//Methods estaticos de arrays em javascript
function checkArgs() {
  console.log("Array like args", arguments);
  const argArr = [...arguments];
  console.log("Coverted in Array args ", argArr);
  argArr.forEach((element) => element);
}

checkArgs(1, 2);

//Forma moderna

function checkArgs2(...numeros) {
  numeros.forEach((element) => console.log(element));
}

checkArgs2(2, 4, 6, 8, 10);

//from()
console.log("Array Like ", document.getElementsByTagName("li"));
const arrayLike = document.getElementsByTagName("li");
const arrayTrue = Array.from(arrayLike);
console.log("True Array", arrayTrue);

//fromAsync(), retorna uma promessa

const arrayLike1 = document.getElementsByTagName("li");
const convertArrayAsync = Array.fromAsync(arrayLike1);

//Apresentar dados de uma promessa
console.log(convertArrayAsync); //Retorna uma promessa
convertArrayAsync.then((value) => console.log(value));

//Outro exemplo

const ret = Array.fromAsync({
  0: "TapasScript",
  1: "google",
  2: "Youtube",
  3: "whastapp",
  length: 4,
});

ret.then((element) => console.log(element));

//of(), cria um novo array com os elementos inseridos nela
const a = new Array(2, 3, 4);
const b = new Array(4, 5, 6);

const c = Array.of(2, 3, true, { name: "Paulo" }, [11, 12, 13]);
console.log(c);
