let language = "TypeScript";

for (i = 0; i < language.length; i++) {
  //   console.log(language.charAt(i));
}

for (let j = 1; j <= 3; j++) {
  for (let d = 1; d <= 4; d++) {
    // console.log(`Linha ${j} coluna ${d}`);
  }
}

//Break and Continue

for (let k = 1; k <= 5; k++) {
  //   console.log(k);
  if (k === 3) {
    break;
  }
}

for (let p = 1; p <= 8; p++) {
  if (p === 4) continue;

  console.log(p);
}
