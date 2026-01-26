/**
 * Closures é usado para tornar privado variaveis que não queremos que sejem acessados de qualquer lugar.
 * Todas as variaveis debtro de uma função Closures, elas são lembradas mesmo após o termino de execução da função.
 * Exemplo pratico
 * As informacoes de uma conta bancaria (variaveis) não podem ser modificadas de qualquer lugar logo vamos criar uma função clouseres que inicia uma conta bancaria com algum valor.
 * E retorna uma função que mostra o valor depositado e o total que tem desponível na conta.
 * Nota: Function Closures não pode retornar duas funções.
 */

function CreateBanckAccount(inicialCount) {
  let balance = inicialCount;

  return function Deposit(amount) {
    balance += amount;

    console.log(`Valor despositado ${amount} \nTotal disponível ${balance}`);
  };
}

const tapaScriptAccount = CreateBanckAccount(5);

tapaScriptAccount(10);
tapaScriptAccount(10);
