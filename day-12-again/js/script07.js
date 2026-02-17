//Desestruturacao de funcao

const getStudent = () => {
  return {
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
};

const anotherStudent = getStudent();
const name = anotherStudent.name;
const age = anotherStudent.age;
//Usando desestruturacao
const { name: anotherName, age: anotherAge } = getStudent();
console.log(`Sem desestruturacao Nome: ${name} Idade: ${age}`);
console.log(`Com desestruturacao Nome: ${anotherName} Idade: ${anotherAge}`);

//Destructin in loop

const students = [
  { name: " Willian", grade: "A+" },
  { name: " Tom", grade: "B+" },
  { name: " Paul", grade: "A" },
];

for (let { name, grade } of students) {
  console.log(`Name: ${name} Idade: ${grade}`);
}
