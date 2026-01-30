/**
 * Freeze, congelar objecto. Quando isso acontece o objecto torna-se completamente Imutavel.
 */

const emp = {
  sal: 100,
};

Object.freeze(emp);

emp.salary = 200;

console.log(emp);

/**
 * Seal, faz quase o mesmo que freeze com pequena excessao.
 * Ela permite a reatribuicao de valores a variaveis ja existente no objecto.
 * Tanto quando o Freeze ela nao permite que se adicione nova propriedadeg e nem que se delete um propriedade.
 */

const compan = {
  depart: "Finance",
};

Object.seal(compan);

compan.funcion = "Pau";

delete compan.depart;

console.log(compan);

/**
 * hasown, e um metodo que retorna verdadeiro ou falso.
 * Ela verifica se em um determinado objecto tem uma certa propriedade.
 */

const isCompan = Object.hasOwn(compan, "funcion");

console.log(isCompan);
