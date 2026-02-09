"use strict";
class Sports {
  constructor(name, numberOfPlaye) {
    ((this.name = name), (this.numberOfPlaye = numberOfPlaye));
  }

  log() {
    console.log(`${this.name} tem ${this.numberOfPlaye}`);
  }
}

const futbool = new Sports("Recriativo da Caala", 21);
const basketbool = new Sports("1 da Gosto", 18);

// futbool.log();
// basketbool.log();

//Task 06
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
}; //Nao resolvido.

//Task 07
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  },
};

person.sayHello();
person.sayHelloArrow();
