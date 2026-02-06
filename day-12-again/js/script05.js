//Object Entres, converte um objecto em array
//Cria um a com caracteristica chave valor

const computer = {
  marca: "DELL",
  model: "Latitude",
};

const becomeArray = Object.entries(computer);

console.log(becomeArray); //[ [ 'key', 'valor' ], [ 'model', 'Latitude' ] ]

//Map, usado para converter Array em objecto

const entreis = new Map([
  ["foo", "bar"],
  ["jamp", 41],
]);

const becomeObject = Object.fromEntries(entreis);
console.log(becomeObject);
