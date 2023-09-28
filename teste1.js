// Array para manter os produtos no carrinho
var carrinho = [];

// Função para adicionar um produto ao carrinho
function addToCart(productName, price) {
  // Recupere o carrinho atual do armazenamento local ou crie um novo array vazio
  var cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Crie um objeto que representa o item do carrinho
  var cartItem = {
    productName: productName,
    price: price,
  };

  // Adicione o item ao carrinho
  cart.push(cartItem);

  // Atualize o carrinho no armazenamento local
  localStorage.setItem("cart", JSON.stringify(cart));

  // Mostre uma mensagem de sucesso
  alert(productName + " foi adicionado ao carrinho.");
}

var cartCount = 0; // Initialize the counter
var cartItems = 0; // Array to store cart items
var cartList = document.getElementById("cart-count"); // Get the cart list element
function addToCart(productName, price) {
  var item = { productName: productName, price: price };
  cartItems.push(item);
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  updateCartUI();
  saveCartData();
  const botoesAddToCart = document.querySelectorAll(".addToCart");
  let cart = 0;
  botoesAddToCart.forEach((addToCart) => {
    addToCart.addEventListener("click", () => {
      cart++;
      atualizarContador();
    });
  });
}
function atualizarContador() {
  const contador = document.getElementById("cart-count");
  contador.textContent = "Produtos no carrinho: ${cart}" + cart;
}
function updateCartUI() {
  const cartElement = document.getElementById("cart");
  let totalQuantity = 0;
  cartList.innerHTML = ""; // Clear the cart items
  for (const item of cartItems) {
    totalQuantity++;
    const listItem = document.createElement("li");
    listItem.textContent = `${item.productName} - R$ ${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);
  }
  cartCountElement.textContent = totalQuantity;
}
function saveCartData() {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}
function displayCartItems() {
  var storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cartItems = JSON.parse(storedCart);
    cartCount = cartItems.length;
    updateCartUI();
    document.getElementById("cart-count").textContent = cartCount;
  }
}

function checkout() {
  saveCartData();
  window.location.href = "Carrinho.html";
}
// Call the function to display cart items on cart page
displayCartItems();
