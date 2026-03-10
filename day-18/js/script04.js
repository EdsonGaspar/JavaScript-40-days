//TextoContent, show all itens ate os que nao aparecem visivel no documento

const selectedDiv = document.querySelector("div");

console.log("Mostrar com InnerText", selectedDiv.innerText); //Vazio
console.log("Mostrar com TextContente", selectedDiv.textContent); //Mostra o conteudo completo
console.log("Mostrar com InnerHtml", selectedDiv.innerHTML); //Mostra o conteudo e a estrutura

{
  //Removendo elemento apartir da DOM
  const myList = document.getElementById("myList");
  //Pegando um elemento da lista atraves de arrey
  const item1 = myList.children[0];
  //Removendo o elemento
  myList.removeChild(item1);
}
