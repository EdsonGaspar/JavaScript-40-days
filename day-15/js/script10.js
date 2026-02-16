//flat(), unifica os vetores paulatinamente.
const array = [2, 4, 6, [7, 9]];
console.log(array.flat());

const arr = [1, 2, [3, [4, 5]]];
console.log(arr.flat()); //Remove apenas uma camada
console.log("E O DOIS", arr.flat(2)); //Remove o numero de camadas indicado
console.log(arr.flat(Infinity)); //Remove todas as camadas possivel

{
  const employed = [
    { name: "Bob", departament: "Engineering", salary: 5000 },
    { name: "Alex", departament: "HR", salary: 3000 },
    { name: "Ravi", departament: "Engineering", salary: 7000 },
    { name: "John", departament: "Engineering", salary: 1000 },
    { name: "Tom", departament: "Sales", salary: 6000 },
  ];

  const groupedByDet = Object.groupBy(
    employed,
    ({ departament }) => departament,
  );
  console.log(groupedByDet);

  const groupedBySal = Object.groupBy(employed, ({ salary }) => {
    return salary >= 5000 ? "Salario maior de 5k" : "Salario menor de 5k";
  });
  console.log(groupedBySal);
}
