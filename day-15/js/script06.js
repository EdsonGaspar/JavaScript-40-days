//NESTED ARRAY
//Sao arrays dentro de um array formando assim uma matriz
const frutis = [
  "Laranja",
  "Manga",
  "Goiba",
  "Mucua",
  "Limao",
  ["Tomate", "Repolho", "Alface"],
];

const vegetais = frutis[5]; //Pegando o array aninhado
console.log(vegetais);

console.log(vegetais[2]); //Pegando em uma certa posicao

console.log(frutis[5][1]); //No array geral pega o elemento do segundo array em uma certa posicao

//Destructing, vai descartar todos os elementos do array excepto o ultimo do segundo array
const [, , , , , [, , alface]] = frutis;
console.log(alface);

//Exemplos aplicados de Nested Array

const numbers = [
  [0, 2, 4],
  [5, 3, 1],
  [7, 11, 13],
];
console.log(numbers); //Visualmente e uma tabela de 3x3

//Exemplo do tipo tabuleiro
const board = [
  ["R", "N", "B", "Q"],
  ["P", "P", "P", "P"],
  ["", "", "", ""],
  ["p", "p", "p", "p"],
];

console.log(board); // E uma matriz de 4x4

//Criando uma tabela dinamicamente

let tabela = [];

for (let i = 0; i < 4; i++) {
  tabela.push([i, i * 10 + 2, i * 10]);
}

console.log(tabela);
/**
 * 0 2 0
 * 1 12 10
 * 2 22 20
 * 3 32 30
 */
//Acessando os elemntos do array
//Gegando o elemento 12
const twelve = tabela[1][1]; //12. Primeiro o numero da linha, segundo numero o numero da posicao do elemento. Fazendo assim primeiro a linha e depois a coluna
console.log(twelve);
