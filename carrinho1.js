const produto = document.getElementById("product-card");
const root = document.getElementById("root");
const produtos = document.getElementById("addToCart");
var total = calcularTotal();
document.getElementById("total").textContent = total.toFixed(2);
// Armazene os dados no localStorage
var cartItem = { productName: productName, price: price };
var cart = JSON.parse(localStorage.getItem("cartitems")) || [];
cart.push(cartItem);
localStorage.setItem("cartitems", JSON.stringify(cart));
window.location.href = "Carrinho.html";
const tableBody = produtos
  .map((produto) => {
    return `<tr>
    <td>${produto.produto}</td>
    <td>${produto.price}</td>
  </tr>`;
  })
  .join("");

const table = `<table>
  <tr>
    <td>Nome</td>
    <td>Produtos</td>
  </tr>
  ${tableBody}
</table>`;

root.insertAdjacentHTML("beforeend", table);

document
  .getElementById("payment-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Pega os valores do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    // Limpa os campos após a coleta dos dados
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";

    // Envia os dados para o servidor (substitua com a URL do seu servidor PHP)
    fetch("seu_servidor.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Dados enviados com sucesso para o laboratório 3D.");
        } else {
          alert(
            "Ocorreu um erro ao enviar os dados. Por favor, tente novamente mais tarde."
          );
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
        alert(
          "Ocorreu um erro ao enviar os dados. Por favor, tente novamente mais tarde."
        );
      });
  });
