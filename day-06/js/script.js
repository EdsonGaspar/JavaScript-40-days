const printMe = function () {
  console.log("Prind some thing");
};

// printMe();

function sum(a, b, c) {
  const resul = (a + b) / c;
  console.log(resul);
}

// sum(4, 2, 3);

function DoubleItem(b) {
  const resul = 2 * b;
  return resul;
}

// console.log(DoubleItem(2));

const Calcuc = function (a, b) {
  const result = 2 * (a + b);
  return result;
};

// console.log(Calcuc(4, 8));

//Rest Parameter

function RestParameter(a, c, f, ...rest) {
  console.log(a, c, f, rest);
}

// RestParameter(4, 2, 4, 3, 6, 7, 8, 9, 0);

//Funcao aninhada

const NestefFunc = function () {
  console.log("First function");

  return function Inner() {
    console.log("Segunda funcao");
  };
};

// const showFunc = NestefFunc();

// console.log(showFunc());

//Validacao de acesso com CallBack

function ValidateAcess(name, age, funcAcess, funcErro) {
  let messageErro = "";
  if (name === "") {
    messageErro = `Erro nome vazio: ${name}`;
    funcErro(messageErro);
  } else if (age < 18) {
    messageErro = `Erro menor de idade: ${age}`;
    funcErro(messageErro);
  } else {
    funcAcess(name, age);
  }
}

const sucess = function (name, age) {
  console.log(`Sucesso, Nome:${name} Idade:${age}`);
};

const error = function (messageErro) {
  console.log(`${messageErro}!!!`);
};

// ValidateAcess("Hadson", 21, sucess, error);

//Função Pura, quer dizer que está funcão terá os mesmos outputs para os mesmos inputs
let message = "Hello";
function Greetings(name) {
  console.log(`${message}, ${name}`);
}

Greetings("TypaScripts");
message = "Namaste";
Greetings("TypaScripts");
Greetings("TypaScripts");
Greetings("TypaScripts");

//Heigher Older function

function ReturnFunc() {
  return function Say() {
    console.log("Hello");
  };
}

const retFunc = ReturnFunc();

// retFunc();

/**
 * Arrow Function
 */

let getGreetMe = (smsLanguage) => {
  console.log(`Welcome to study arrow function in ${smsLanguage}`);
};

// getGreetMe("PHP");

/**
 * IIFE(Immediately Invoked Function Expression), a função é executada imdediatamente depois da sua declaração;
 */

(function (rank) {
  console.log("IIFE, function immdiately invoked", rank);
})(91);

/**
 * Function Execution Stack(Call Stack), empilha o primeiro a entrar é o último a sair
 * Como se cocolase-mos um para um em cima do outro e so podendo tirar o ultimo colocado.
 */

function A() {
  console.log("A, inicio");
  B();
  console.log("A, terminou");
}

function B() {
  console.log("B, inicio");
  C();
  console.log("B, terminou");
}

function C() {
  console.log("C, executou");
}

A();

/**
 * Recursion Function, e quando uma funcao chama a si mesma
 */
function GetWater(count) {
  console.log(`Pegando agua ${count}`);
  if (count === 0) {
    console.log("Terminou de pegar agua.");
    return;
  }
  GetWater((count -= 1));
}

GetWater(5);
