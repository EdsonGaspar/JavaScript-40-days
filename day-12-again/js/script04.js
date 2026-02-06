/**
 * Referencia de objecto
 * A comparacao de objecto nao e feita pelo valor mais sem pela referencia.
 */

let first = {
  nome: "Double",
};

const second = {
  nome: "Double",
};

// first = second;
console.log(first === second);

//Static Method
//Static method ASSIGN, pega o segundo objecto e lhe uni ao primeiro.
const obj1 = {
  a: 2,
  c: 3,
};

const obj2 = {
  b: 21,
  c: 4,
};

const joinObje = Object.assign(obj1, obj2);

console.log(joinObje);

//Outro exemplo, a copia de um objecto para o outro nao segnifica dizer que serao o mesmo objecto quando feito a comparao porque objecto verifica referencia.

const shirt = {
  color: "Preta",
  size: "M",
};

// const pends = {
//     color:"Branca",
//     size:"2XL"
// }
const dress = Object.assign({}, shirt);

console.log("Shirt", shirt, "dress", dress); //Consegui-se ver qua as saidas sao iguais

console.log(dress === shirt); //Referencia diferente

//Mudar, valor da propriedade

const obj3 = {
  a: 1,
  b: { c: 4 },
};

const obj4 = Object.assign({}, obj3);

obj4.b.c = 5; //Atribui um novo valor no object4, mais modou o obj3 porcausa da referencia.

console.log(obj3.b.c); // Mostrando o obj3

//Copiado objecto e mudando a referencia dos elementos.

const obj5 = structuredClone(obj4);

obj5.a = 2;

obj5.b.c = 10;

console.log("Obj4", obj4);
console.log("Obj5", obj5);
