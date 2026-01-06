/**
 * Task One
 * Verifica se um numero e par ou impar e mostra a resposta no console.
 */
function FindOddEven(number) {
  if (!(number % 2 === 0)) {
    console.log(`${number} é um numero impar`);
    return;
  }
  console.log(`${number} é um número par.`);
}
// FindOddEven(50);

/**
 * Task Two
 * Verificar se uma pessoa pode obter uma permissao de conducao.
 */
const AgeLicense = (number) => {
  let age = number;
  if (!(age >= 18)) {
    console.error(`${age} nao tem permissao obter licensa`);
    return;
  }
  console.log(`${age} tem permissao de obter licensa`);
};
// AgeLicense(19);

/**
 * Task Three
 * Calculate annual salaray with bonus
 */
function AnnualSalary(sal) {
  let salaray = sal;
  let annualBaseSalary = salaray * 12;
  let percentage = (annualBaseSalary / 100) * 20;
  let annualSalary = annualBaseSalary + percentage;
  return annualSalary;
}
// console.log(AnnualSalary(12.3));

/**
 * Task Four
 * Semaforo, controlador rodoviario
 */
function ControladorRodoviario(color) {
  if (color === "Red" || color === "red") {
    console.log(
      `${color.toUpperCase()}, Stop driving, you not able to keep going!!!`
    );
  }
  if (color === "Blue" || color === "blue")
    console.log(`${color.toUpperCase()}, Let's Go, is your turn!`);
}

// ControladorRodoviario("Red");

/**
 * Task Five
 * Calcular o pagamento de energia mensal e anual
 */

function CalculaterElectric(unit) {
  let units = unit;
  let mensalUnits = units * 30;
  let annualElectric = mensalUnits * 12;
  console.log(
    `Pagamento Mensal: ${mensalUnits}, Pagamento Anual: ${annualElectric}`
  );
}
// CalculaterElectric(150);

/**
 * Task Sevente
 * Calcular o valor maximo dentre 3 variaveis
 */

function CalculeMaxValue() {
  let p = 18;
  let q = 20;
  let r = 21;
  if (p >= q && p >= r) {
    console.log(`Maior e P ${p}`);
  } else if (q >= p && q >= r) {
    console.log(`Maior e Q ${q}`);
  } else {
    console.log(`Maior e R ${r}`);
  }
}
// CalculeMaxValue();

/**
 * Bitwise
 * Encontrar um valor que dobra o
 */
let count = 5;

let doubleCount = count & 209;
console.log(doubleCount);
