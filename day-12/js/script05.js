/**
 * Destruction, e uma accao que extrai as propriedades de um determinado objecto.
 */

const student = {
  name: "Jon Doe",
  age: 9,
  std: 3,
  subjects: ["Matematica", "Ingles", "Programacao"],
  parents: {
    father: "Doe McCarty Willian",
    mother: "Alisa John Willian",
    emailParents: "willianfamily@gmail.com",
  },
  address: {
    street: "65/2, brooklyn road",
    city: "Carterton",
    country: "New Zealand",
    zip: 5179,
  },
};

//Quero mostrar nome e age
const { name, age } = student;
console.log(`Nome ${name} age ${age}`);

const { subjects, numOfSubst = subjects.length } = student;

console.log(numOfSubst);
