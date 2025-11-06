// Recupera produtos do carrinho (simulação com localStorage)
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
const listaCarrinho = document.getElementById("lista-carrinho");
const totalSpan = document.getElementById("total-carrinho");

// Renderizar itens
function renderCarrinho() {
  listaCarrinho.innerHTML = "";
  let total = 0;

  carrinho.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = `${item.nome} <strong>R$ ${item.preco}</strong>`;
    listaCarrinho.appendChild(li);
    total += parseFloat(item.preco.replace(",", "."));
  });

  totalSpan.textContent = "R$ " + total.toFixed(2).replace(".", ",");
}
renderCarrinho();

// Formulário de envio (simulação WhatsApp)
document.getElementById("form-checkout").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Pedido finalizado! Entraremos em contato para confirmar.");
  localStorage.removeItem("carrinho"); // limpa carrinho
  window.location.href = "index.html";
});
