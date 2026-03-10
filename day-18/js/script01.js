//Criando elemento no documento html apartie da DOM

let elementoP = document.createElement("p");
elementoP.innerText = "Este e um texto adcionado dinamicamente.";
//Adicionando no documeto DOM
document.body.appendChild(elementoP);
console.log(elementoP);

//Inserir um elemento antes de um elemento especifico
const elementoSpan = document.createElement("span");
elementoSpan.innerText =
  "Sou elemento SPAN e serei imprimido antes do elemento P";

//Selecionando ou pegando o elemento p
const selectP = document.querySelector("p");

document.body.insertBefore(elementoSpan, selectP);
