// Filtro de produtos
const filtroBtns = document.querySelectorAll(".filtro-btn");
const itens = document.querySelectorAll(".item");

filtroBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filtroBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    let filtro = btn.dataset.filter;

    itens.forEach(item => {
      if (filtro === "all" || item.classList.contains(filtro)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Carrinho simples
let carrinhoCount = 0;
const carrinhoSpan = document.getElementById("carrinho-count");
const addBtns = document.querySelectorAll(".add-carrinho");

addBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    carrinhoCount++;
    carrinhoSpan.textContent = carrinhoCount;
    alert("Produto adicionado ao carrinho!");
  });
});
