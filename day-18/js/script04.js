//TextoContent, show all itens ate os que nao aparecem visivel no documento

const selectedDiv = document.querySelector("div");

console.log("Mostrar com InnerText", selectedDiv.innerText); //Vazio
console.log("Mostrar com TextContente", selectedDiv.textContent); //Mostra o conteudo completo
console.log("Mostrar com InnerHtml", selectedDiv.innerHTML); //Mostra o conteudo e a estrutura
