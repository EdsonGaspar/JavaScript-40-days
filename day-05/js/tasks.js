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
  for (linha = 1; linha <= start; linha++) {
    let acumolo = "";
    for (col = 1; col <= linha; col++) {
      acumolo += "*";
    }
    // console.log(acumolo);
  }
}

RepeatStar(2);

/**
 * Encher copos
 * Copo 1-> 1 dose;
 * Copo 2-> 2 doses;
 * Copo 3-> 3 doses;
 */

function FillUp(n) {
  for (w = 1; w <= n; w++) {
    console.log(`Copo ${w} -> ${w} ${!(w === 1) ? "doses" : `dose`} `);
  }
}

FillUp(4);
