"use strict";

/*
  IMPORTANTE:

  Coloque aqui o número do WhatsApp da empresa.

  Use somente números:
  código do país + DDD + número.

  Exemplo de formato:
  55 + DDD + número

  Não utilize espaços, parênteses, traços ou sinal de +.
*/

const NUMERO_WHATSAPP = "5541992072920";

/*
  Mensagens utilizadas pelos botões.
*/

const MENSAGEM_PADRAO =
  "Olá! Gostaria de solicitar um atendimento.";

const MENSAGEM_PLANO =
  "Olá! Gostaria de saber mais sobre os planos mensais de manutenção.";

/*
  Elementos do menu.
*/

const menuToggle = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector("#menu-principal");

/*
  Elementos do formulário.
*/

const formulario = document.querySelector("#contact-form");
const campoNome = document.querySelector("#name");
const campoTelefone = document.querySelector("#phone");
const servicoSelecionadoTexto = document.querySelector("#selected-service");
const feedbackFormulario = document.querySelector("#form-feedback");

let servicoSelecionado = "";

/*
  Verifica se o número foi configurado.
*/

function numeroConfigurado() {
  return /^\d+$/.test(NUMERO_WHATSAPP);
}

/*
  Cria o link do WhatsApp com a mensagem codificada.
*/

function criarLinkWhatsApp(mensagem) {
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}

/*
  Exibe uma mensagem quando o número ainda não foi configurado.
*/

function avisarNumeroNaoConfigurado() {
  feedbackFormulario.textContent =
    "Configure o número do WhatsApp no arquivo script.js para ativar o contato.";

  document.querySelector("#contato").scrollIntoView({
    behavior: "smooth"
  });
}

/*
  Abre o WhatsApp em uma nova aba.
*/

function abrirWhatsApp(mensagem) {
  if (!numeroConfigurado()) {
    avisarNumeroNaoConfigurado();
    return;
  }

  feedbackFormulario.textContent = "";

  window.open(
    criarLinkWhatsApp(mensagem),
    "_blank",
    "noopener,noreferrer"
  );
}

/*
  Atualiza os links dos botões principais.
*/

function configurarLinksWhatsApp() {
  const links = document.querySelectorAll(".js-whatsapp");

  links.forEach((link) => {
    if (numeroConfigurado()) {
      link.href = criarLinkWhatsApp(MENSAGEM_PADRAO);
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        avisarNumeroNaoConfigurado();
      });
    }
  });
}

/*
  Abre e fecha o menu mobile.
*/

function fecharMenu() {
  menuPrincipal.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}

menuToggle.addEventListener("click", () => {
  const menuEstaAberto =
    menuToggle.getAttribute("aria-expanded") === "true";

  if (menuEstaAberto) {
    fecharMenu();
    return;
  }

  menuPrincipal.classList.add("is-open");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Fechar menu");
});

/*
  Fecha o menu ao clicar em uma opção.
*/

menuPrincipal.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", fecharMenu);
});

/*
  Fecha o menu ao pressionar Escape.
*/

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuToggle.getAttribute("aria-expanded") === "true"
  ) {
    fecharMenu();
    menuToggle.focus();
  }
});

/*
  Ao selecionar um serviço, registra o interesse
  para incluir na mensagem do formulário.
*/

document.querySelectorAll(".js-service").forEach((card) => {
  card.addEventListener("click", () => {
    servicoSelecionado = card.dataset.service || "";

    if (servicoSelecionado) {
      servicoSelecionadoTexto.textContent =
        `Serviço selecionado: ${servicoSelecionado}`;

      servicoSelecionadoTexto.hidden = false;
    }
  });
});

/*
  Botão dos planos mensais.
*/

document.querySelector(".js-plan").addEventListener("click", (event) => {
  if (!numeroConfigurado()) {
    event.preventDefault();
    avisarNumeroNaoConfigurado();
    return;
  }

  event.preventDefault();
  abrirWhatsApp(MENSAGEM_PLANO);
});

/*
  Envia os dados do formulário para o WhatsApp.

  Observação:
  O formulário não armazena dados em servidor.
  Ele abre o WhatsApp com uma mensagem preenchida.
*/

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = campoNome.value.trim();
  const telefone = campoTelefone.value.trim();

  if (!nome || !telefone) {
    feedbackFormulario.textContent =
      "Preencha seu nome e seu WhatsApp para continuar.";
    return;
  }

  const linhasMensagem = [
    "Olá! Gostaria de solicitar um atendimento.",
    "",
    `Nome: ${nome}`,
    `WhatsApp: ${telefone}`
  ];

  if (servicoSelecionado) {
    linhasMensagem.push(`Serviço: ${servicoSelecionado}`);
  }

  abrirWhatsApp(linhasMensagem.join("\n"));
});

/*
  Inicialização.
*/

configurarLinksWhatsApp();