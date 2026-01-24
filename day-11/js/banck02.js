/**
 * Quando a necessidade de que uma function closures retorna n\ao apenas uma função a melhor estrategia e aplicar Objects, chave: valor, o valor pode ser uma função.
 */

function CreateMilleniumAccount(inicialBalance) {
  let balance = inicialBalance;

  return {
    desposit: (amount) => {
      balance += amount;
      console.log(`Valor depositado ${amount} Total disponível ${balance}`);
    },
    withdraw: (amount) => {
      balance -= amount;
      console.log(`Valor levantado ${amount} Total disponível ${balance}`);
    },
    checkBalance: () => {
      console.log(`Valor disponível ${balance}`);
    },
  };
}

const edsonMilleniumCount = CreateMilleniumAccount(200);

console.log(edsonMilleniumCount);

edsonMilleniumCount.desposit(500);
edsonMilleniumCount.withdraw(250);
edsonMilleniumCount.withdraw(10);
edsonMilleniumCount.withdraw(10);
edsonMilleniumCount.withdraw(10);
edsonMilleniumCount.withdraw(10);
edsonMilleniumCount.withdraw(10);
edsonMilleniumCount.withdraw(10);
edsonMilleniumCount.withdraw(10);
edsonMilleniumCount.withdraw(10);
edsonMilleniumCount.withdraw(10);
edsonMilleniumCount.withdraw(10);
edsonMilleniumCount.withdraw(10);
edsonMilleniumCount.withdraw(10);
edsonMilleniumCount.withdraw(10);
edsonMilleniumCount.withdraw(30);

edsonMilleniumCount.checkBalance();
