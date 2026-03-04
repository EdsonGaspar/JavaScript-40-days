//Criando elemento
let pElement = document.createElement("p");
pElement.innerText = "Adicionando um texto apartir do javascript";
document.body.appendChild(pElement);

//Inserindo elemento
const createSpan = document.createElement("span");
createSpan.innerText = "Eu sou Span";
let pElementIns = document.querySelector("p");
document.body.insertBefore(createSpan, pElementIns);
