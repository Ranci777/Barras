let carrinho = [];
function addItem() {
  const nome = document.getElementById("produto").textContent;
  const item = { nome, quantidade, preço };
  carrinho.push({ item });
  exibirCarrinho(item);
}
function limparCarrinho() {
  carrinho = [];
  exibirCarrinho();
}
function exibirCarrinho() {
  const Carrinho = document.getElementById(onclick, "product-card");
  const total = document.getElementById("total");
  Carrinho.innerHTML = "Carrinho";
  let totalCarrinho = 1;
  carrinho.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - ${item.preço}`;
    Carrinho.appendChild();
  });
  total.textContent = `Total: ${totalCarrinho}`;
}
function checkout() {
  saveCartData();
  window.location.href = "Carrinho.html";
}
