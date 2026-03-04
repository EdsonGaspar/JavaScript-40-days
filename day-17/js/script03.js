/**
 * Cria um mini projecto em que filtra enquando o usuario escreve o nome de uma fruta e seleciona o que corresponde
 */

function filterList() {
  const inputText = document.getElementById("searchInput");
  const inputValue = inputText.value;

  const items = document.querySelectorAll("ul#itemList li");

  items.forEach((item) => {
    item.style.backgroundColor = item.innerText
      .toLowerCase()
      .includes(inputValue.toLowerCase())
      ? "green"
      : "white";
    // item.style.diplay = item.innerText
    //   .toLowerCase()
    //   .includes(inputValue.toLowerCase())
    //   ? "block"
    //   : "none";
  });
}
