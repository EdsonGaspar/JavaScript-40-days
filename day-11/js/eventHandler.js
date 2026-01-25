/**
 * Closures in Event Handler
 */

function ClickEventHandler() {
  let countClick = 0;

  document.getElementById("myButton").addEventListener("click", function () {
    countClick++;
    console.log(`Botao foi clidado ${countClick} vezes`);
  });
  //   document.getElementById("muButton").innerHTML(countClick);
}

ClickEventHandler();
