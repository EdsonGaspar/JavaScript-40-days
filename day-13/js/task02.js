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

user.greet();
