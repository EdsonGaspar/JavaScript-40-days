"use strict";
class Perfil {
  constructor(name, age) {
    ((this.name = name),
      (this.age = age),
      (this.speak = function () {
        console.log(`${this.name} tenho ${this.age}`);
      }));
  }
}

const newPerfil = new Perfil("Edson", 21);
newPerfil.speak();

console.log(Perfil);
