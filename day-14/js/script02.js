"use strict";

/**
 * Real word use Cases
 */
function dividNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Divisao por zero nao e permitido!");
    }
    let result = a / b;
    console.log(`${a} / ${b} = ${result}`);
  } catch (err) {
    console.error(`Tem um erro de matematica ${err.name} ${err.message}`);
  }
}

// dividNumbers(2, 0);

function validateAge(age) {
  try {
    if (isNaN(age)) {
      throw new Error("Dado invalido, idade deve ser um numero");
    }
    console.log(`Sua idade ${age}`);
  } catch (error) {
    console.error(`Erro de insercao ${error.message}`);
  }
}

// validateAge("tapas");
const FormData = {
  userName: "Paulo",
  userEmail: "paulo@gmail.com",
};
function validationForm(formdata) {
  try {
    if (!formdata.userName) throw new Error("User name nao inserido");
    if (!formdata.userEmail.includes("@"))
      throw new Error("O email deve possuir @");

    console.log(`Name: ${formdata.userName}`);
  } catch (error) {
    console.error("Erros encontrados na validacao: ", error.message);
  }
}

validationForm(FormData);
