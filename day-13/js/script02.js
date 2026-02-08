"use strict";
function outer(b) {
  console.log(`Outer Function `, this);
  return function inner(c) {
    console.log(`Inner Function `, this);
  };
}

const showOute = outer(3);
showOute(2);

const food = {
  name: "Manga",
  color: "Amarelo",

  // getDescription: () => `${this.name} é ${this.color}`,//Aqui retorna undefine
  getDescription: function () {
    //Cria um metodo
    return `${this.name} é ${this.color}`;
  },
};

console.log(food.getDescription());

//Implicit binding, acontece quando objecto.function(), o valor this refere o proprio objecto antes da funcao

const pessoa = {
  name: "Edson",

  dizerOi() {
    setTimeout(() => {
      console.log("Dizer oi", this.name);
    }, 1000);
  },
};

pessoa.dizerOi();
