function highlighText() {
  console.log("Clicou no hightLight");
  let elements = document.querySelectorAll("p.info");

  elements.forEach((element) => {
    element.style.backgroundColor = "yellow";
  });
}
