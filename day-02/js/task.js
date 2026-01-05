/**
 *Resumo da tarefa, declara variaves que uma pessoa pode possuir, imprimir no console e mudar os dados da pessoa.
 */

let person = {
  name: "Joao Gaspar",
  age: 27,
  isStuden: true,
  fav_progam_language: "JavaScript",
};

let newName = (person.name = "Edson Gaspar");

const data = `Nome: ${newName}
Idade: ${person.age}
Estudante: ${person.isStuden}
Linguagem favorita: ${person.fav_progam_language}`;

document.getElementById("task").innerText = data;

console.log(person);
