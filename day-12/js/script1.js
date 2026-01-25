//Constractor Function

function Car(name, modelo) {
  this.name = name;
  this.modelo = modelo;
}

let audiCar = new Car("Audi", "A8");
let rangeCar = new Car("Range Rover", "Sport");

console.log(audiCar);
console.log(rangeCar);

console.log(rangeCar instanceof Car);

//Regular function(factory)

function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Ola, ${this.name}`);
    },
  };
}

let user1 = createUser("Tapas", 32);
user1.greet();

//Objecto with method
//in, operador usado para verificar se uma determinada variavel existe dentro de um objecto.

let profile = {
  name: "Edson",
  company: "Petromar",
  message: function () {
    console.log(
      `${this.name} trabalha na ${this.company} na promessa de Deus.`,
    );
  },
  address: {
    city: "Kilamna",
    state: "Luanda",
    pin: "+244",
    country: "Angola",
    greeting: function () {
      console.log(`Seja bem vindo a ${this.country}`);
    },
  },
  salary: 1231782.0,
};

console.log(profile.salary);

"salary" in profile && console.warn("Salario definido");

if (!profile.salary) {
  console.log("Salario nao definido");
}

profile.message();
console.log(profile.address.country);

//for...in
console.log("---------------------------------");
for (let key in profile) {
  console.log(profile[key]);
}
