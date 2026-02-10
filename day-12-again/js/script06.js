//Estudando desestruturacao

const student = {
  name: "John Willian",
  age: 9,
  std: 3,
  subjects: ["Math", "English", "EVS"],
  parents: {
    father: "Brown Willian",
    mother: "Sophia Willian",
    email: "john-parents@abc.com",
  },
  address: {
    street: "65/2, brooklyn road",
    city: "Cartoon",
    country: "New Zeland",
    zip: 432,
  },
};

const {
  name,
  address: { country },
} = student; //Desestruturacao

//Em uma desestruturacao e possivel adicionar chave com o seu valor que ainda nao existe no objecto.
const { age, subjects, numberSubject = subjects.length } = student;

console.log(numberSubject);

//Alias javascript, e um metodo de redeclarar uma variavel com outro nome.

const { std: standart } = student;

console.log("Variavel std passou a ser standart ", standart);

//Nested destruction
const {
  parents: { mother },
} = student;

console.log("Nome da mae: ", mother);

//Envia email para os pais do estudante
function sendEmail(stud) {
  console.log(`Enviar email para ${stud.parents.email}`);
}

sendEmail(student);
