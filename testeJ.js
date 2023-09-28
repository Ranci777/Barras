const produtos = ["PRODUTO 1 =", "PRODUTO 2 ="];
const precos = ["R$ 100,00", "R$ 200,00"];
function scrollPages(direction, pagination, table) {
  let last_active = pagination.querySelector("li.active");
  let buttons = pagination.querySelectorAll("li");
  let last_index = Array.from(buttons).indexOf(last_active);
  let scroll_index = null;

  if (direction && last_index > 0) {
    scroll_index = last_index - 1;
  } else if (!direction && last_index < buttons.length - 1) {
    scroll_index = last_index + 1;
  }

  if (scroll_index !== null) switchPage(pagination, table, scroll_index);
}
