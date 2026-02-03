/**
 * Crie uma function que recebe um valor e faz o seu fatorial.
 */

function factoria(n) {
  let nNew = (other = n);

  if (n === 0 || n === 1) {
    return 1;
  } else if (n < 0) {
    return "Nao existe fatorial de numeros negativos!!!";
  }
  // 4x3x2x1
  for (let v = 0; v < n; v++) {
    if (other === 1) {
      return nNew;
    }
    nNew *= other -= 1;
    console.log(v + "  " + other);
  }
  return nNew;
}
// 3 * 2 + 3 * 1 + 3 * 0;
// 6 + 3;
// 9;

//Resolvendo factorial com ideia da IA, muito massa.

function betterWayFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else if (n < 0) {
    return "Nao existe factorial negativa!!!";
  }
  //3
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(betterWayFactorial(5));
