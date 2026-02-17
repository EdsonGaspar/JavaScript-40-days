//this, no nivel global aponta para windwos

console.log(`This at the global`, this);

console.log(this === window);

//Entendo como funciona o this
//This dentro de um objecto aponta para o mesmo objecto.
const employ = {
  id: "AA77B",
  firstName: "Maico",
  lastName: "B. Jordan",
  returnThis: function () {
    return this;
  },
  getFullName: function () {
    return `Nome completo: ${this.firstName} ${this.lastName}`;
  },
};

console.log("Codigo= ", employ.id);
console.log("Retorno This ", employ.returnThis());
console.log(employ.getFullName());

//Implit binding

const tom = {
  name: "Tom",
  age: 7,
};

const michel = {
  name: "Michel",
  age: 3,
};

function GreetingMe(obj) {
  obj.logMessage = function () {
    console.log(`Nome: ${this.name} Idade: ${this.age}`);
  };

  obj.logMessage(); //Implicit binding
}

//GreetingMe(michel); //Espera que a mensagem fosse mostrada aqui

//michel.logMessage();//Mais so foi mostrada depois de fazer isso. Precisava de uma chamada explicita

GreetingMe(michel);
