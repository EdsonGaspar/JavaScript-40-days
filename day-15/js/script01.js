"use strict";

//Criacao de array
const users = ["Ana", "Paula", "Beatriz"];
const numbers = [1, 2, 3, 4, 5, 6];
const misto = [7, "Angola", null, { name: "Joao" }];

const tasks = [];

const produts = new Array();

console.log(produts);

//Acesso e modificadores
const fruts = ["Manga", "Banana", "Laranja"];

console.log(fruts[0]);
console.log(fruts[2]);
console.log("\n");

fruts[1] = "Goiba";

for (let frut of fruts) {
  console.log(frut);
}

console.log(fruts.length);

console.log("EXEMPLO REAL");

const listProduts = [
  { id: 1, name: "Laptop Dell", preco: 1200, stock: 4 },
  { id: 1, name: "Mouse Hp", preco: 98, stock: 20 },
  { id: 1, name: "Teclado Dell", preco: 121, stock: 41 },
];

const firstProdut = listProduts[0];

console.log(firstProdut.name);

console.log("Listar apenas os nomes \n");

for (let produt of listProduts) {
  console.log(produt.name);
}
