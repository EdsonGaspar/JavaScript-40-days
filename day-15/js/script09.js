//Fill()
const colors = ["Preta", "Azul", "Branca"];
colors.fill("Azul", 1, 3);
console.log(colors);

//INCLUDES()
const names = ["tom", "alex", "bob", "john"];
console.log(names.includes("alex"));

//IndexOf(), retorna a posicao do item no array, caso nao existir retorna menos 1;

console.log(names.indexOf("bob"));

//lastIndexOf()

//reverse()
console.log(names.reverse());

//Sort(), metodo sort converte o elemento para string. O padrao e ascendente
console.log("Depois do ordenar: ", names.sort());
const artist = [
  "John white Abbott",
  "Leonard da Vinci",
  "Charles Aubry",
  "Anna Atkins",
  "Barent Avercamp",
];

console.log("Organizando: ", artist.sort());

//Organizando de forma descendente

artist.sort(function (a, b) {
  return a === b ? 0 : a > b ? -1 : 1;
});

console.log("Descendente: ", artist);

//at(), recupera elemento apartir do seu index. Se o index for negativo a contagem comeca da esquerda para direita.
const junkFood = [
  "Humburger",
  "Pizza",
  "Cachorro",
  "Massa com tudo",
  "Yogurte",
];

console.log(junkFood.at(0)); //Retorna o primeiro elemento
console.log(junkFood.at(2)); //
console.log(junkFood.at(-4)); //Retorna o elemento, contagem da direita para esquerda
console.log(junkFood.at(-1)); //Retorna o ultimo elemento

//copyWithin(target, start, end)
//Target, o index onde vai comecar a copia.
//Start, posicao do elemento que vai ser copiado no target
//End, ate onde vai para os elementos que vao ser copiado

const values = [1, 2, 3, 4, 5, 6, 7];
values.copyWithin(0, 3, 6);
console.log(values); // [4,5,6,4,5,6,7]
