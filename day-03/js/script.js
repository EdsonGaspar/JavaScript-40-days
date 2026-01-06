//

let a = 10;
let b = 11;

var resul = a + b;
console.log(`+ ${resul}`);
var resul = a - b;
console.log(`- ${resul}`);
var resul = b - a;
console.log(`/ ${resul}`);
var resul = a / b;
console.log(resul);
var resul = a * b;
console.log(`* ${resul}`);
console.log(resul);
console.log(`/ ${resul}`);

//Resto da divisao
let r = a % b;
console.log(r);

//Exponenciacao
let x = 2 ** 3;
console.log(x);

let y = 4;
soma = y += 2;
sub = y -= 1;
mult = y *= 6;
divis = y /= 2;
resto = y %= 3;

console.log(`soma ${soma}`);
console.log(`Subtracao ${sub}`);
console.log(`Divisao ${divis}`);
console.log(`Multiplicacao ${mult}`);
console.log(`Resto ${resto}`);

//Comparacao apenas do valor
console.log(4 == "4");
//Comparacao do valor e do tipo de dados, chama-se Strict Operator
console.log(0 === false);

console.log(NaN == false);

/**
 * Na comparacao de dois objectos nao comparamos os dados apenas, mais tambem a referencia do espaco na memoria
 */

const obj1 = {
  name: "Joao Gaspar",
};

const obj2 = {
  name: "Joao Gaspar",
};

console.log("Comparacao de dois objectos ", obj1 === obj2);

console.log("Comparacao de dois objectos ", obj1 !== obj2);
//Porque e falso, porque pode ser que o objecto 1 e ferente a memoria XX1003 e o objecto 2 CA2012

console.log(false && false);
console.log(true && false);
console.log(false && true);
console.log(true && true);

console.log("Cow" && "Harse");

console.log(true || false);
console.log(false || false);
console.log(false || true);
console.log(true || true);
console.log("Cow" || "Haser");

console.log(!true);
console.log(!false);

/**
 * Nulliish Coalescing Operator, ele considera apenas os valores null e undefind
 * So retorna o valor da direita caso o valor da esquerda seja null ou undefind
 */

const nome1 = undefined ?? "Edson";
const nome2 = 0 ?? "Joao";
const nome3 = null ?? "Gaspar";
console.log(nome1 + nome2 + nome3);

/**
 * Ternary Operator
 * condition? val1 : val2;
 */

let age = 32;

console.log(age >= 31 ? "Citizen" : "Not Citizen");

//bitwise

console.log(15 | 9);
console.log(15 & 9);
console.log(15 ^ 9);

const numbers = [2, 1, 5, 7];

console.log(typeof numbers);

//Instanceof
// object instanceof ObjectType
