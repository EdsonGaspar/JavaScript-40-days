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
    married: false,
    age: 25,
    expense: 140,
    purchased: ["Shampoo", "Humburger"],
  },
];

//filter(), cria um novo array com os elementos que satisfacam a logica do assunto.
//Para o filter usa-se test function
//sintaxe: array.filter(element, index, array=>{})
const expendMorMany = costumers.filter((custumer) => {
  return custumer.expense >= 500;
});

console.log("Lista das maiores compras ", expendMorMany);

// map()
//Para map usa-se transformation function
//Sintaxe: array.map((currentValue, index, array)=>{})
//Retorna o nome completo de um cliente
const custumersFullName = costumers.map((costumer) => {
  let title = "";
  if (costumer.gender === "M") {
    title = "Welcome Sr.";
  } else if (costumer.gender === "F") {
    title = costumer.age < 18 ? "Miss." : "Mrs.";
  } else {
    return `You not alowed entries!!!`;
  }
  costumer["full_name"] = `${title} ${costumer.f_name} ${costumer.l_name}`;
  return costumer;
});

console.log("Tudo: ", custumersFullName);

//Aplicacao do Filter e Map em conjunto

const people = [
  { name: "Joaozinho", age: 19, cidade: "MX" },
  { name: "Paulino", age: 9, cidade: "LA" },
  { name: "Manuela", age: 22, cidade: "CB" },
  { name: "Agusta", age: 30, cidade: "ML" },
  { name: "Makiesse", age: 16, cidade: "CN" },
  { name: "Jiovana", age: 27, cidade: "LB" },
];

//Filtar apenas as pessoas maior de idade
const olderPeople = people
  .filter((person) => person.age > 17)
  .map((person) => {
    return person.name;
  });

console.log(olderPeople.sort());

//Reduce()
//Para reduce usa-se reducer function
//array.reduce((acumulador, valorActual, index, arrayOriginal)=>{}, valorInicial)

//Exemplo: Soma de numeros

const numeros = [2, 1, 4, 1, 5];
const valorFinal = numeros.reduce((acc, curr) => acc + curr, 0);
console.log("Exemplo reduce: ", valorFinal);

//Exemplo: Resultado da multiplicacao de todos os elementos do array
const multValor = numeros.reduce((acc, curr) => acc * curr, 1);
console.log(
  "Exemplo reduce, multiplicação de todos os valores do array: ",
  multValor,
);

//Contatenar string
const frases = ["Eu", "amo", "javascript"];
const fullFrase = frases.reduce((acc, curr) => acc + curr);
console.log("Frase completa: ", fullFrase);
//Forma simples
const fullFrase1 = frases.join(" ");
console.log(fullFrase1);

//Exemplo simulado

const carrinho = [
  { name: "Manuel", preco: 1230 },
  { name: "Gonçalves", preco: 2520 },
  { name: "Josefa", preco: 3290 },
  { name: "Fani", preco: 4130 },
];

//Somar total arecado no dia
const totalArecadado = carrinho.reduce((acc, curr) => acc + curr.preco, 0);
console.log("Total: ", totalArecadado);

//Exemplo elegante, Numeros com duplicado

const numerosComDuplicados = [1, 2, 2, 4, 3, 3, 5, 2, 1, 4];
const numerosSemDuplicados = numerosComDuplicados.reduce((acc, num) => {
  if (!acc.includes(num)) {
    acc.push(num);
  }
  return acc.sort();
}, []);

console.log("Contem numeros duplicados,", numerosComDuplicados);
console.log("Sem numeros duplicados,", numerosSemDuplicados);

//Exemplo elegante verificar calor maximo
const valorMaximo = numerosSemDuplicados.reduce(
  (acc, max) => Math.max(acc, max),
  -Infinity,
);

console.log(valorMaximo);

//Exemplo elegante, quero saber as medias da idade das pessoas que compraram livro
let count = 0;
const idadePeople = costumers.reduce((acc, curr) => {
  if (curr.purchased.includes("Book")) {
    acc += curr.age;
    count++;
  }
  return acc;
}, 0);
const mediaIdade = Math.floor(idadePeople / count);
console.log(
  "Media das idades: ",
  mediaIdade,
  " Total de pessoas que compraram livros ",
  count,
);

//Some(), retorna true ou false. Verifica se tem algum x na lista
//Exemplo, temos algum cliente menor de 10 anos
const temClienteJoven = costumers.some((costumer) => costumer.age < 18);
console.log("Tem algum cliente menor de idade ", temClienteJoven);

//Every(), verificar se todos os elementos da lista passa no teste caso um seja falso ele para.
//Exemplo: Verificar se todos os clientes da lista sao casados.
const isMarried = costumers.every((costumer) => costumer.married === true);
let showIsMarried = isMarried ? "Sim" : "Não";
console.log("Todos clientes sao casados? ", showIsMarried);

//Retorna o primeiro cliente n\ao casado da lista
const firstNoMarried = costumers.find((costumer) => costumer.married === false);
console.log(firstNoMarried);

//Retornar o ultimo usuario activo na lista
const users = [
  { name: "Paulo", active: false },
  { name: "Sofia", active: true },
  { name: "Kilunda", active: false },
  { name: "Manuela", active: true },
  { name: "Josefa", active: false },
];

const lastActive = users.findLastIndex((last) => last.active);
console.log("Ultimo usuario activo", lastActive);

//Obtenha o total gasto por clientes casados.
const totalGastoCasados = costumers.reduce((acc, curr) => {
  if (curr.married) {
    acc += curr.expense;
  }
  return acc;
}, 0);

console.log(totalGastoCasados);

const totalGastoCasados2 = costumers
  .filter((costumer) => costumer.married)
  .reduce((acc, curr) => acc + curr.expense, 0);
console.log(totalGastoCasados2);

//Mostra uma lista dos gastos dos clientes casados;
const marriedCostumers = costumers.filter((costumer) => costumer.married);
const gastosCasados = marriedCostumers.map((costumer) => {
  return costumer.expense;
});

console.log(gastosCasados);
