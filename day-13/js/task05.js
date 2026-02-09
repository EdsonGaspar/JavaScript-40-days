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

futbool.log();
basketbool.log();
