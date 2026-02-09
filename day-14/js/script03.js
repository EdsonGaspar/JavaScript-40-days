"use strict";

//Custom error

function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
}

function ValidationIsCiteze(age) {
  if (age < 80) throw new ValidationError("Nao es um cidado senior");

  return `Cidado senior`;
}

try {
  const message = ValidationIsCiteze(60);
  console.log(message);
} catch (error) {
  console.error(`Erro capturado: ${error.name} ${error.message}`);
}

//Self assignment operator ??=
let x;
let y = 10;

console.log((x ??= 20));
console.log((y ??= 13));
