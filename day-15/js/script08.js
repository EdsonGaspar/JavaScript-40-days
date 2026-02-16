//Weapping

let a = 2;
let b = 4;
//Fazendo a troca de valores
[b, a] = [a, b];
console.log(a, b);

//Merge, juntar todos os arrays em um unico array
const emotions = ["Triste", "Feliz", "Com raiva", "Decepcionado"];
const vegetabels = ["Toamte", "Pimenta", "Broclis", "Repolho"];

const mergeIt = [...emotions, ...vegetabels];
console.log(mergeIt);

//lenght, ]e uma propriedade javascript e nao um metodo

//Concat(), concatena mais de um array e retorna um novo array concatenado

const first = [2, 4, 6];
const second = [8, 10, 12];
const third = [13, 14, 15];

const mergeConcat = first.concat(second, third);
console.log(mergeConcat);

//Join(), junta todos os elementos de um array e usa-os separadamente. No final retorna string
const joined = emotions.join("<->"); //dentro do join [e colocado o simbilo da separacao]
console.log(joined);
