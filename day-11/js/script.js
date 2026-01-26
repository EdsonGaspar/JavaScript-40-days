//Closures

function CriarContador() {
  let count = 1;
  return function () {
    count++;
    return count;
  };
}

let meuContador = CriarContador();

console.log(meuContador()); //2
console.log(meuContador()); //3
console.log(meuContador()); //4

//Function Greetengs

function Greetings(saudacao) {
  return function (name) {
    return `${saudacao}, ${name}`;
  };
}

let sayHello = Greetings("Ola");
let sayHi = Greetings("Oi");

console.log(sayHello("Edson"));
console.log(sayHi("Conceição"));
