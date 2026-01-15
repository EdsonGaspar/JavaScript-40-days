function isPalindrome(str) {
  const wordlowercase = str.toLowerCase();
  let vari = str.length;
  let count;
  for (i = 0; i < str.length; i++) {
    if (wordlowercase[i] !== wordlowercase[(vari -= 1)]) {
      count += 1;
      console.log(`${wordlowercase[i]} ${i} != ${wordlowercase[vari]} ${vari}`);

      return false;
    } else {
      count += 1;
      console.log(`${wordlowercase[i]} ${i} = ${wordlowercase[vari]} ${vari}`);
    }
  }
  return true;
}

console.log(isPalindrome("casa"));
