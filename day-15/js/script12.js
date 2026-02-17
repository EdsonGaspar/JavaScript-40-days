//Interative methods

let costumers = [
  {
    id: 1,
    f_name: "Abby",
    l_name: "Thomas",
    gender: "M",
    married: true,
    age: 32,
    expense: 500,
    purchased: ["Shampoo", "Toys", "Book"],
  },
  {
    id: 2,
    f_name: "Jerry",
    l_name: "Tom",
    gender: "M",
    married: true,
    age: 64,
    expense: 540,
    purchased: ["Toys", "Book", "Blade"],
  },
  {
    id: 3,
    f_name: "John",
    l_name: "Willian",
    gender: "M",
    married: false,
    age: 17,
    expense: 230,
    purchased: ["Book", "Table"],
  },
  {
    id: 4,
    f_name: "Michel",
    l_name: "Trump",
    gender: "F",
    married: true,
    age: 22,
    expense: 480,
    purchased: ["Mesa de Centro", "Cadeiras", "Livro", "Janta"],
  },
  {
    id: 5,
    f_name: "Mateus",
    l_name: "Pascoal",
    gender: "M",
    married: false,
    age: 38,
    expense: 100,
    purchased: ["Pizza", "Soft Drink", "Book"],
  },
  {
    id: 6,
    f_name: "Juliana",
    l_name: "Tumba",
    gender: "F",
    married: true,
    age: 25,
    expense: 140,
    purchased: ["Shampoo", "Humburger"],
  },
];

//filter(), cria um novo array com os elementos que satisfacam a logica do assunto.
//sintaxe: array.filter(element, index, array=>{})
const expendMorMany = costumers.filter((custumer) => {
  return custumer.expense >= 500;
});

console.log("Lista das maiores compras ", expendMorMany);

// map()
//Sintaxe: array.map((currentValue, index, array)=>{})
//Retorna o nome completo de um cliente
const custumersFullName = costumers.map((costumer) => {
  let title = "";
  if (costumer.gender === "M") {
    title = "Welcome Sr.";
  } else if (costumer.gender === "F") {
    title = "Welcome Ms.";
  } else {
    return `You not alowed entries!!!`;
  }
  costumer["full_name"] = `${title} ${costumer.f_name} ${costumer.l_name}`;
  return costumer;
});

console.log("Tudo: ", custumersFullName);
