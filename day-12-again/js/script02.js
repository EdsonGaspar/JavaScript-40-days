/**
 * Parametro: E usado au definir uma funcao
 * Argumento: E o valor actual que substitui o parametro quando invocamos a funcao
 */

//Funcao Construtora
//Apartir de uma funcao construtora podemos criar diferentes instacias da classe.
//Pode se verificar se uma determinada instacia tempende de uma classe construtora
//Funciona parecido como um objecto, mais um objecto que o programador propio cria

function Car(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

const rangeRover = new Car("Ranger Rover", "Sport");

console.log(rangeRover);

const person = new Object();
person.nome = "Alfa";
person.age = 77;

console.log(person);

//Verificar se uma instacia pertence a um objecto
console.log(rangeRover instanceof Car);

//Factory function
function Persona(nome, age) {
  return {
    nome,
    age,
  };
}
const persona1 = Persona("Edson", 27);
console.log(persona1);
