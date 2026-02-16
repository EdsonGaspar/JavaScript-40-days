//Tecnicas de imutabilidade
//spread operator
const fruts = ["Maça", "Banana", "Cogumelo", "Senoura", "Goiba"];

//Adicionar no final, criando um novo array
const newFruts = [...fruts, "Laranja"];

//Adicionar no inicio, cria um novo array
const newFruts2 = ["Manga", ...fruts];

//Adicionar no meio
const newFruts3 = ["Tomate", "Repolho"];
newFruts3.splice(1, 0, "Goaiba");
console.log(newFruts3);

//Verificar se  e um array
console.log(Array.isArray(newFruts3));

//Array destruction
//Baseado na ordem dos arrays.
const [maca, , cogumelo] = fruts;
console.log(maca, cogumelo);

const [, banana] = fruts;
console.log(banana);
