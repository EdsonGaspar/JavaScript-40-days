const cars = [
  "Mercedes",
  "Ranger Rover",
  "Lamborguini",
  "Land Rover",
  "Ferrari",
  "BMW",
];

//Nested and spread
const [mercedes, , lambo, ...rest] = cars;
console.log(
  "Mercedes: ",
  mercedes,
  "\n",
  "Lambo: ",
  lambo,
  "\n",
  "Resto: ",
  rest,
);
