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

ValidateAcess("Hadson", 21, sucess, error);
