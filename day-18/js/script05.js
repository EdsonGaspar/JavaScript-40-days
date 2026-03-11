//Testando os meus conhecimentos removendo um elemento.

let divSelected = document.getElementById("permited");

document.body.removeChild(divSelected);

{
  //Read, write and remove atribute
  let getImage = document.querySelector("img");

  //Escrevendo atributo
  getImage.setAttribute("src", "./assets/transferir.jpg");
  getImage.setAttribute("alt", "banner");

  //Removendo atributo
  getImage.removeAttribute("width");

  //Lendo atributo
  console.log(getImage.getAttribute("src"));
}
