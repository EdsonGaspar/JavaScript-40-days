//Object Entres, converte um objecto em array
//Cria um a com caracteristica chave valor

const computer = {
  marca: "DELL",
  model: "Latitude",
};

const becomeArray = Object.entries(computer);

console.log(becomeArray); //[ [ 'key', 'valor' ], [ 'model', 'Latitude' ] ]

//Map, usado para converter Array em objecto

const entreis = new Map([
  ["foo", "bar"],
  ["jamp", 41],
]);

const becomeObject = Object.fromEntries(entreis);
console.log(becomeObject);

//O que e imutabilidade em objectos. O objecto fica completamente imutavel
/**
 * Congelar o objecto para que nao se faca alteracoes nele
 */

const emp = {
  sal: 100,
};

Object.freeze(emp);

emp.custo = 20;
delete emp.sal;
console.log(emp); //Continua a ser o objecto inincial

//Verificar se um determinado objecto esta congelado ou nao "freeze"
console.log(Object.isFrozen(emp)); //true

//Diferenca entre F reeze e Seal

const depart = {
  nome: "finance",
};

Object.seal(depart);

depart.adress = "Luanda"; //Acao  nao permitida
delete depart.nome; //Acao nao permitida

depart.nome = "RH"; //Acao permitida

console.log(depart);

//HasOwn, metodo estatico que permite verificar se em um determindado objecto tem uma chave x. Retornando true ou false.

const isExist = Object.hasOwn(depart, "address");
console.log("Existe", isExist);
