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

console.log(user);

//Propriedade com caracteres especiais
user["is employ"] = true;

console.log(user["is employ"]);
