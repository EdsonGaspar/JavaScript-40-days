let salads = ["Tomate", "Alface", "Pimenta", "Sebola"];

for (let salad of salads) {
  console.log(salad);
}

salads.push("Sal"); //Adiciona no final da lista
salads.unshift("Repolho"); //Adiciona no inicio da lista
console.log(salads);

const lastElementrRemoved = salads.pop(); //Remove o ultimo elemento da lista e retorna o elemento
console.log(lastElementrRemoved);

const firstElementRemoved = salads.shift(); //Remove o primeiro elemento da lista e retorna o elemento
console.log(firstElementRemoved);

console.log(salads);

//EXEMPLO DA VIDA REAL
//Faca um sistema que permite enviar email
class SistemOfNotification {
  constructor() {
    this.notificoes = [];
  }

  //Adiciona no inicio da lista.
  addNotification(message) {
    const notificao = {
      id: Date.now(),
      message,
      lida: false,
      timestamp: new Date(),
    };
    this.notificoes.unshift(notificao);
  }

  //Remove de maneira FIFO
  removeNotification() {
    this.notificoes.shift();
  }
  removeLast() {
    this.notificoes.pop();
  }
}

const sendNotification01 = new SistemOfNotification();
sendNotification01.addNotification("Terminar tarefa de programacao");
sendNotification01.addNotification("Ler livro a fe explicada");

sendNotification01.removeLast();
console.log("\n ", sendNotification01.notificoes);
