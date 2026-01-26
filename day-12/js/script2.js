/**
 * Static Methods
 * assign method, faz uma copia, pega o segundo objecto e lhe assina no primeiro objecto.
 */

const object01 = { p: 1, a: 2 };
const object02 = { q: 4, a: 3 };

const objectoCopy = Object.assign(object01, object02);

console.log(objectoCopy);

//Explo pratico com o primeiro objecto no qual lhe seram assinado.

const object03 = {
  a: 5,
  b: {
    c: 12,
  },
};

const object04 = Object.assign({}, object03);

console.log(object04);
console.log("Entando no objecto copiado ", object04.b.c);
