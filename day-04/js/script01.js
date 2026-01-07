let count = 0;

if (count === 0) {
  console.log(0);
} else if (count <= 0) {
  console.log(`Menor que 0 ${count}`);
} else {
  console.log(`Maior que 0 ${count}`);
}

const condition = false;
const innerCondition = true;

if (condition) {
  console.log(`Primeira condicao verdade.`);
  if (innerCondition) {
    console.log("Segunda condicao verdade.");
  } else {
    console.log("Else segunda condicao");
  }
} else {
  console.log("Else primeira condicao");
}

const Empire = "tapaScript";
switch (Empire) {
  case "tapaScript":
    console.log("Empresa Indiana");
    break;
  case "google":
    console.log("Empresa Americana");
    break;
}

const city = "Sao Paulo";
switch (city) {
  case "Benguela":
  case "Lubango":
  case "Luanda":
    console.log(`${city} pertence Angola`);
    break;
  case "Los Angels":
  case "Chicago DC":
  case "Las Vegas":
    console.log(`${city} pertence USA`);
    break;
  default:
    console.log(`${city} nao identificado`);
}
