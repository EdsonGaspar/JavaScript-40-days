/**
 * Estudo sobre Objecto
 */

let user = {
  name: "Tapas",
  age: 2,
};

console.log(user);

user.isCitizen = true;

user["have money"] = 0;

delete user.name;

console.log(user);

//Atribuição dnamica

let keyValor = "isCitizen";

console.log(user[keyValor]);

let car = prompt("Qual e o teu carro favorito?");

let favCar = {
  [car]: 5,
};

console.log(favCar);
