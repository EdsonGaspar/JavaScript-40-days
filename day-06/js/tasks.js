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

/**
 * Ciar a função que verifica se uma palavra é um palindrome
 * isPalindrome(str)
 */
function isPalindrome(str) {
  let deCount = str.length;

  let innerCount = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[deCount - 1]) {
      innerCount += 1;
      if (innerCount == str.length) {
        return true;
      }
    }
  }
  return false;
}

console.log(isPalindrome("radar"));
//1 - a  3 - a
//2 - n  2 - n
//3 - a  1 - a
