"use strict";

const user = {
  name: "tapaScript",
  greet: function () {
    const inenr = () => {
      console.log(`Hello, ${this.name}!`);
    };

    inenr();
  },
};

// user.greet(); //Resolvido

//Task 03

const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

obj.greet();

// const greetFn = obj.greet();
// greetFn();
