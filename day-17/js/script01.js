//Pegando um elemento
const hOne = document.getElementById("heading");
console.log(hOne);

let pOne = document.getElementsByClassName("info");
let ptwo = document.getElementsByClassName("info");

//Classe retorna um Array Like, para fazer a apresentacao  no console pode se usar o spread que transforma um Array Like me Array.
[...pOne].forEach((elem) => {
  //   console.log(elem);
});

let pThree = document.querySelectorAll(".info");
console.log(typeof pThree);

[...pThree].forEach((item) => {
  console.log(item);
});

console.log(pThree);

let pS = document.getElementsByTagName("p");
console.log(pS);
[...pS].forEach((p) => console.log(p));
