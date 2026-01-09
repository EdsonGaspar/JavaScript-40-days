//Task aula

for (l = 1, m = 10; l <= 10, m >= 1; l++, m--) {
  // console.log(`L = ${l}, M = ${m}`);
}

/**
 * Tasks
 *  *
 *  **
 *  ***
 *  ****
 *  *****
 *  ******
 */
function RepeatStar(start) {
  let acumolo = "";
  for (linha = 1; linha <= start; linha++) {
    for (col = 1; col <= linha; col++) {
      acumolo += "*";
    }
    console.log(acumolo);
  }
}

RepeatStar(2);
