/**
 * Pedra 🪨, Papel 🧻 ou Tesoura ✂️.
 *
 * Pedra quebra c → Pedra ganha
 * Papel embrulha Pedra → Papel ganha
 * Tesoura corta Papel → Tesoura ganha
 *
 * Papel cortado Tesoura -> Tesoura ganha
 * Tesoura esmago Pedra
 * pedra emburado papel
 */

function PlayGame() {
  console.log("O jogo comecou");
  let userChoice = prompt(
    "Escolha entre Pedra 🪨, Papel 🧻 ou Tesoura ✂️"
  ).toLocaleLowerCase();

  let random = Math.floor(Math.random() * 3) + 1;

  let computerChoise;

  switch (random) {
    case 1:
      computerChoise = "pedra";
      break;
    case 2:
      computerChoise = "papel";
      break;
    case 3:
      computerChoise = "tesoura";
      break;

    default:
      computerChoise = "Erro computador";
      break;
  }
  console.log(
    `Escolha do Usuario ${userChoice}, ecolha do Computador ${computerChoise}`
  );
  if (
    (userChoice === "pedra" && computerChoise === "tesoura") ||
    (userChoice === "papel" && computerChoise === "pedra") ||
    (userChoice === "tesoura" && computerChoise === "papel")
  ) {
    console.log("Usuario vencedor");
  } else if (
    (userChoice === "papel" && computerChoise === "tesoura") ||
    (userChoice === "tesoura" && computerChoise === "pedra") ||
    (userChoice === "pedra" && computerChoise === "papel")
  ) {
    console.log("Cumputador vence!!!");
  } else if (userChoice === computerChoise) {
    console.log("Empate");
  } else {
    console.log("Erro inesperado!");
  }
}

PlayGame();
