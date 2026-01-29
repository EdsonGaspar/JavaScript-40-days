const person = {
  nome: "Edson",
  address: {
    city: "Luanda",
  },
};

const p1 = Object.assign({}, person);
const p2 = Object.assign({}, p1);

//Este e o problema do assign quando muda a variavel nested, moda em todos os lugares porque ela tem uma unica referencia.
p1.address.city = "Benguela";

console.log("Primeiro ", person);
console.log("Segundo ", p1);
console.log("Terceiro ", p2);

//StructuredClone

const p3 = structuredClone(person);

const cars = {
  marca: "Jeep Grandcherock",
  forca: "4x4",
};

//Converte de objecto para Array
let c1 = Object.entries(cars);
console.log(c1);

//Converte de Array para objrcto
const animals = new Map([
  ["food", "bar"],
  ["baz", 41],
]);

const a1 = Object.fromEntries(animals);

console.log(a1);
