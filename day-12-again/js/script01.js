/**
 * Estudando objecto pela segunda vez por ser muito importante
 */
console.log("Objecto em JavaScript");

//Criando um bjecto User e manipulando o objecto.
//Cria objecto com propriedades, adicionar uma propriedade que nao existe no objecto, mostrar as propriedades do objecto com caracteres especias e sem caracteres especias que e o mais comom.

const user = {
  nome: "Jhon",
  genero: "M",
};

const { nome, genero } = user;
console.log(`Nome: ${nome} Genero: ${genero}`);

user.isCitezen = false;

// console.log(user);

//Propriedade com caracteres especiais
user["is employ"] = true;

// console.log(user["is employ"]);

/**
 * Propriedade dinamica
 */
user.age = 23;

let someKey = "age";

console.log(user[someKey]);

//Escreva um algoritmo que o usuario escolhe o tipo de carro que gosta e retribuio o tipo de carro com o numero 5

const car = prompt("Qual e o seu carro favorito?");

const cars = {
  [car]: "5",
};

console.log(`${car} ${cars[car]}`);
