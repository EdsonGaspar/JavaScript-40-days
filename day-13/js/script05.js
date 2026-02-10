"use strict";
/**
 * Understand with exemplo
 */
const user = {
  name: "Tapas",
  greeting: function () {
    const inner = () => {
      //Arrow function, herda o this do anterior.
      console.log(`Hello `, this.name, "!");
    };
    inner();
  },
};
user.greeting();

//

const obj = {
  name: "Person",
  greting: function () {
    console.log(`Ola..., ${this.name}`);
  },
};

const greetFn = obj.greting();

if (4 > 4) {
  //greetFn();
}
