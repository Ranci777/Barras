var cartItems = [];
var total = 0;
function atualizarTotalCarrinho() {
  document.getElementById("total").textContent = totalCarrinho.toFixed(2);
  totalCarrinho = totalCarrinho.document.createElement("span");
  window.onload = function () {
    document.getElementById("total").appendChild(totalCarrinho);
  };
}
function addToCart(productName, price) {
  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  var cartItem = {
    productName: productName,
    price: price,
  };
  var item = { productName: productName, price: price };
  cartItems.push(item);
  total += price;
  atualizarCarrinho();
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(productName + " foi adicionado ao carrinho.");
}
function atualizarCarrinho() {
  // Atualize o carrinho de compras
  var cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";
  for (const item of cartItems) {
    var listItem = document.createElement("li");
    listItem.textContent = `${item.productName} - R$ ${item.price.toFixed(2)}`;
    cartElement.appendChild(listItem);
  }
  // Atualize o total
  var totalElement = document.getElementById("total");
  totalElement.textContent = total.toFixed(2);
}
