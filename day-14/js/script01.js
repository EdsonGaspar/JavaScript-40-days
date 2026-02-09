//Error Handling and Exception handling

/**
 *Tipos de erros
 * //Parsing error
 *  //Runtime error
 *  //What is an exception in javascript?
 * //Ans: Exception are runtime erros that disrupt program execution.
 */

//*Reference Error, variavel nao declarada
// console.log(xxx);

//*TypeError, Operacao invalida em tipo errado.
let obj = null;
// console.log(obj.name);

//*SyntaxError, Erro de escrita no código
// console.log("hi"

//*RangeError, Valor fora do intervalo permitido
// const list = new Array(-1);

//*URIError, Problema em encode/decode URI. Exemplo: decodeURI("%")

//Try...Catch

try {
  console.log("Controle comeca aqui");
  vdd;
  console.log("Controle termina aqui");
} catch (err) {
  console.error("Erro encontrado", err.name); //Nome do tipo do erro
  console.error("Erro encontrado", err.message); //O erro encontrdo em si
  console.error("Erro encontrado", err.stack); //A situacao por completo.
}
