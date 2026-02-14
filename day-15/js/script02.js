console.log("Metodos Javascript \n");

//push(), adiciona no final do array e retorna um novo lenght

const tasks = ["Estudar Js", "Fazer Exercicios"];

tasks.push("Ler a fe explicada");

for (let task of tasks) {
  console.log(task);
}
console.log(tasks.length);

//pop(), remove o elemento no final e retorna o elemento removido

const remove = tasks.pop();
console.log(`Elemento removido ${remove}`);

console.log("Lista actual ", tasks);

//unshift(), adiciona no inicio
tasks.unshift("Correr");
tasks.unshift("Tomar banho");
console.log(tasks);

//shift(), remove elemento no inicio
tasks.shift();

console.log(tasks);

console.log("\n\n EXEMPLO REAL \n\n");

class SistemaDeNotificao {
  constructor() {
    this.notificacoes = [];
  }

  //Adicionar a notificaco mais recente no top
  addNoticacao(message) {
    const notificaco = {
      id: Date.now(),
      message,
      lida: false,
      timestamp: new Date(),
    };
    this.notificacoes.unshift(notificaco); //Adiciona no principio da lista
  }

  removeMoreOld() {
    return this.notificacoes.pop();
  }

  //FIFO, first in, first out
  processar() {
    this.notificacoes.shift();
  }
}

const sistema = new SistemaDeNotificao();
sistema.addNoticacao("Noco emiel recebido");
sistema.addNoticacao("Actualizar email");
console.log(sistema.notificacoes);
