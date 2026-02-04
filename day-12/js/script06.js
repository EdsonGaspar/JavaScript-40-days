let persona = {
  nome: "Algum Nome",
  age: 21,
  address: {
    country: "Angola",
    city: "Luanda",
    rua: "Camama",
  },
};

const { nome } = persona;
console.log(nome);

//Destruturacao de objecto, podes chegar a qualquer nivel
const {
  address: { country },
} = persona;
console.log(country);

//Destruturacao com loop

let students = [
  { nome: "Wilian", grade: "A" },
  { nome: "Jhon", grade: "A+" },
  { nome: "Robert", grade: "B" },
];

for (let { nome, grade } of students) {
  console.log(nome, grade);
}
