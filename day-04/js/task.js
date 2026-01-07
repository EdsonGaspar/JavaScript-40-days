/**
 * Task 2
 * Caixa eletronico que so permite sacar numeros multiplos de 100
 */

function Atm(valor) {
  if (valor % 100 === 0) {
    console.log(`Saque realizado com sucesso ${valor}`);
  } else {
    console.log(`Falha na operacao`);
  }
}

// Atm(300);

/**
 * Task 3
 * Calculadora com o Operado Switch
 */

const Calculadora = (operador, num1, num2) => {
  let result;
  switch (operador) {
    case "+":
      result = num1 + num2;
      console.log(`${num1} + ${num2} = ${result}`);
      break;
    case "-":
      result = num1 - num2;
      console.log(`${num1} - ${num2} = ${result}`);
      break;
    case "/":
      result = num1 / num2;
      console.log(`${num1} / ${num2} = ${result}`);
      break;
    case "*":
      result = num1 * num2;
      console.log(`${num1} x ${num2} = ${result}`);
      break;
    case "%":
      result = num1 % num2;
      console.log(`${num1} % ${num2} = ${result}`);
      break;
    default:
      console.log("Falha no processo");
  }
};
// Calculadora("*", 20, 10);

/**
 * Task 4
 * Bilhete do filme
 */

function MovieTicket(age) {
  let price;
  if (age < 18) {
    price = 3;
    console.log(`Preco do Bilhete do filme ${price}$`);
  } else if (age >= 18 && age <= 60) {
    price = 10;
    console.log(`Preco do Bilhete do filme ${price}$`);
  } else {
    price = 8;
    console.log(`Preco do Bilhete do filme ${price}$`);
  }
}

// MovieTicket(21);

/**
 * Horoscopo
 * @param {*} day
 * @param {*} month
 */
function SignoHoroscopo(day, month) {
  switch (month) {
    case "Janeiro":
      if (day >= 1 && day < 20) {
        console.log(
          `Capricórnio: Responsável, disciplinado, ambicioso e focado em objetivos.`
        );
      } else if (day >= 20 && day <= 31) {
        console.log(
          `Aquário: Inovador, independente, original e gosta de liberdade.`
        );
      }
      break;
    case "Fevereiro":
      if (day >= 1 && day < 19) {
        console.log(
          `Aquário: Inovador, independente, original e gosta de liberdade.`
        );
      } else if (day >= 19 && day <= 29) {
        console.log(`Peixes: Sensível, intuitivo, empático e sonhador.`);
      }
      break;
    case "Março":
      if (day >= 1 && day < 21) {
        console.log(`Peixes: Sensível, intuitivo, empático e sonhador.`);
      } else if (day >= 21 && day <= 31) {
        console.log(`Áries: Corajoso, impulsivo, energético e líder natural.`);
      }
      break;
    case "Abril":
      if (day >= 1 && day < 20) {
        console.log(`Áries: Corajoso, impulsivo, energético e líder natural.`);
      } else if (day >= 20 && day <= 30) {
        console.log(
          `Touro: Paciente, determinado, prático e valoriza estabilidade.`
        );
      }
      break;
    case "Maio":
      if (day >= 1 && day < 21) {
        console.log(
          `Touro: Paciente, determinado, prático e valoriza estabilidade.`
        );
      } else if (day >= 21 && day < 31) {
        console.log(`Gêmeos: Comunicativo, curioso, versátil e sociável.`);
      }
      break;
    case "Junho":
      if (day >= 1 && day < 21) {
        console.log(`Gêmeos: Comunicativo, curioso, versátil e sociável.`);
      } else if (day >= 21 && day <= 30) {
        console.log(`Câncer: Emocional, protetor, leal e ligado à família.`);
      }
      break;
    case "Julho":
      if (day >= 1 && day < 23) {
        console.log(`Câncer: Emocional, protetor, leal e ligado à família.`);
      } else if (day >= 23 && day <= 31) {
        console.log(
          `Leão: Confiante, carismático, criativo e gosta de destaque.`
        );
      }
      break;
    case "Agosto":
      if (day >= 1 && day < 23) {
        console.log(
          `Leão: Confiante, carismático, criativo e gosta de destaque.`
        );
      } else if (day >= 23 && day < 31) {
        console.log(`Virgem: Organizado, analítico, detalhista e responsável.`);
      }
      break;
    case "Setembro":
      if (day >= 1 && day < 23) {
        console.log(`Virgem: Organizado, analítico, detalhista e responsável.`);
      } else if (day >= 23 && day <= 31) {
        console.log(
          `Libra: Justo, diplomático, equilibrado e aprecia harmonia.`
        );
      }
      break;
    case "Outubro":
      if (day >= 1 && day < 23) {
        console.log(
          `Libra: Justo, diplomático, equilibrado e aprecia harmonia.`
        );
      } else if (day >= 23 && day <= 31) {
        console.log(`Escorpião: Intenso, misterioso, determinado e leal.`);
      }
      break;
    case "Novembro":
      if (day >= 1 && day < 22) {
        console.log(`Escorpião: Intenso, misterioso, determinado e leal.`);
      } else if (day >= 22 && day <= 30) {
        console.log(
          `Sagitário: Otimista, aventureiro, sincero e amante da liberdade.`
        );
      }
      break;
    case "Dezembro":
      if (day >= 1 && day < 22) {
        console.log(
          `Sagitário: Otimista, aventureiro, sincero e amante da liberdade.`
        );
      } else if (day >= 22 && day <= 31) {
        console.log(
          `Capricórnio: Responsável, disciplinado, ambicioso e focado em objetivos.`
        );
      }
      break;
  }
}

// SignoHoroscopo(15, "Fevereiro");

/**
 * What kind triangle type
 * 2 3 2
 */

function TriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    console.log(`Trinagulo: Equilateral Triangle`);
  } else if (
    (side1 !== side2 && side1 === side3) ||
    (side2 !== side3 && side2 == side1)
  ) {
    console.log(`Isosceles Triangle`);
  } else {
    console.log(`Scalene Triangle`);
  }
}

TriangleType(3, 2, 2);
