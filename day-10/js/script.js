let globalVar = "Eu sou a variavel global";

function outer() {
  let outerVar = "Eu sou a vairavel outerVar";

  function inner() {
    let innerVar = "Eu sou a inner var";

    console.log(innerVar);
    console.log(outerVar);
    console.log(globalVar);
  }
  inner();
}

outer();

var count = 10;

function outer() {
  var count = 20;

  function inner() {
    var count = 30;

    console.log(count);
  }
  inner();

  console.log(count);
}
console.log(count);
