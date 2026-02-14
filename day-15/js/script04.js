//Conceito de imutabilidade

//Nao recomendado
const arrayOriginal = [1, 2, 3, 4, 5];
const arrayMutavel = arrayOriginal;
arrayMutavel.push(6);

console.log("Array Original", arrayOriginal);
console.log("Array Mutavel", arrayMutavel);

//Extremamente recomendado
const arrayOriginal2 = [1, 2, 3, 4, 5];
const arrayNaoMutave = [...arrayOriginal2, 6];

console.log("Array original", arrayOriginal2);
console.log("Array Mutavel", arrayNaoMutave);
