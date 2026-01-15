/**
 * Task
 * Converte Celsius para Fahrenheit
 * Formula: (Celsius * 9/5) + 32 = Fahrenheit
 */
const ConvertCelsiusFahrenheit = (celsius) => {
  let fahrenheit = celsius * (9 / 5) + 32;
  console.log(`${celsius}ºcelsius e equivalente a ${fahrenheit}fahrenheit`);
};

// ConvertCelsiusFahrenheit(24);

/**
 * Encontrar o maximo entre dois numeros
 *
 */

function FindMaxNumber(num1, num2) {
  if (num1 >= num2) {
    console.log(`${num1} é maior.`);
  } else {
    console.log(`${num2} é maior.`);
  }
}

// FindMaxNumber(5, 6);
