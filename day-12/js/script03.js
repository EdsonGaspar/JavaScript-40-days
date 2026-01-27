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
