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
