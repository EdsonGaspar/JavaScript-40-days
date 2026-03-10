//**
// Estudando innerHTML
// Ele e usado para formatar texto, actualizar texto e ler texto */

{
  //Exemplo onde vai ler um conteudo
  const readP = document.querySelector("p");
  console.log(readP.innerHTML);
}
{
  //Exemplo Actualizando e modificando
  let changeH2 = document.querySelector("h2");
  changeH2.innerHTML = "Ola como <u>voce</u> esta?";
}
