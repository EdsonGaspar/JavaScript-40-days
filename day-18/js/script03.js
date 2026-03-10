//**
// Entendendo a logica do inserir depois
//  */

//Criar o elemento que vai ser inserido
const elementoSpan = document.createElement("span");

//Adcionar conteudo ao elemento criado
elementoSpan.innerText = "Elemento novo a ser adicionado depois do elemento P";

const selectP = document.querySelector("p");

document.body.insertBefore(elementoSpan, selectP.nextSibling);
