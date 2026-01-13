/**
 * Jogo de pedra papel e tesoura
 * Pedra quebra Tesoura → Pedra vence
 * Papel embrulha Pedra → Papel vence
 * Tesoura corta Papel → Tesoura vence
 */

function ChooseHand() {
  console.log("Comecou o Jogo!");
  const userChoicePrompt = prompt("Entra com Papel, Pedra ou Tesoura");
  const userChoice = userChoicePrompt.toLocaleLowerCase();

  let computerChoice;
  const randomComputer = Math.floor(Math.random() * 3) + 1;
  console.log(randomComputer);

  if (randomComputer === 1) {
    computerChoice = "pedra";
  } else if (randomComputer === 2) {
    computerChoice = "papel";
  } else if (randomComputer === 3) {
    computerChoice = "tesoura";
  }

  console.log("Escolha do usuario: ", userChoice);
  console.log("Escolha do computador: ", computerChoice);

  if (
    (userChoice === "pedra" && computerChoice === "tesoura") ||
    (userChoice === "papel" && computerChoice === "pedra") ||
    (userChoice === "tesoura" && computerChoice === "papel")
  ) {
    console.log("Yay, você é o vencedor!");
  } else if (userChoice === computerChoice) {
    console.log("Empate!!!");
    /**
     * c- tesoura corta papel → tesoura vence
     * c- papel embrulha Pedra → pedra vence
     * c- pedra corta tesoura → Tesoura vence
     */
  } else if (
    (userChoice === "papel" && computerChoice === "tesoura") ||
    (userChoice === "pedra" && computerChoice === "papel") ||
    (userChoice === "tesoura" && computerChoice === "pedra")
  ) {
    console.log("Ohh, computador venceu!!!");
  } else {
    console.log("Situação não esperada!");
  }
}

ChooseHand();
