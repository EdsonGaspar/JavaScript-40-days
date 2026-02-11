let salads = ["Tomate", "Alface", "Pimenta", "Sebola"];

for (let salad of salads) {
  console.log(salad);
}

salads.push("Sal"); //Adiciona no final da lista
salads.unshift("Repolho"); //Adiciona no inicio da lista
console.log(salads);

const lastElementrRemoved = salads.pop(); //Remove o ultimo elemento da lista e retorna o elemento
console.log(lastElementrRemoved);

const firstElementRemoved = salads.shift(); //Remove o primeiro elemento da lista e retorna o elemento
console.log(firstElementRemoved);

console.log(salads);
