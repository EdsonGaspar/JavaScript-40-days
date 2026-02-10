"use strict";
/**
 * Explicit binding, e quando o programador defini manualmente qual sera o valor do this dentro da funcao usando um dos tres metodos especiais: .call, .apply, .bind.
 *  .call, usado para quando tem argumentos separados;
 *  .apply, usado para quando o argumento e um array;
 *  .bind, nao executa emediatamente. Usado em eventos, callbacks, setTimeout, etc.
 */

const pessoa = {
  name: "Gaspar",
};

function showInfo(city, country) {
  console.log(`Nome: ${this.name} Cidade: ${city} Pais: ${country}`);
}

//.call
showInfo.call(pessoa, "Luanda", "Angola");

const richPerson = {
  firstName: "Edson",
  lastName: "Gaspar",
  address: {
    country: "Ingland",
    city: "London",
  },
  cars: ["Range Rover Sport", "Land Rover", "Discorover"],
};

function showRichPerson() {
  console.log(
    this.firstName,
    " ",
    this.lastName,
    " ",
    this.address,
    " ",
    this.cars,
  );
}

showRichPerson.call(richPerson);

const personHobbies = {
  name: "Joao Gaspar",
};

const likes = function (hobby1, hobby2) {
  console.log(this.name, " lazer ", hobby1, " divertimento ", hobby2);
};

likes.call(personHobbies, "Programar", "Namorar");

const hobbies = ["Ajudar", "Dormir"];

// .apply
likes.apply(personHobbies, hobbies);

const newPersonHobbies = {
  name: "Edson Gaspar",
};

//bind, vantagem dela e que pode ser chamada apos a satisfacao de uma condicao ou ocorrencia de algo.
const newHobbies = function (hobby1, hobby2) {
  console.log(this.name, " gosta de ", hobby1, " e ", hobby2);
};

const executedFn = newHobbies.bind(newPersonHobbies, "Jogar futebol", "Correr");

executedFn();
