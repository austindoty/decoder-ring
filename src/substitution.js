// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
  if (!alphabet) {
    return false}
  if (alphabet.length!==26){
    return false
  }
  for (let i = 0; i <alphabet.length; i++){
    if (alphabet.lastIndexOf(alphabet[i]) !==i){
      return false
    }
  }
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
  input = input.toLowerCase();
  let results = ""
  if (encode == true) {
    for (let j of input) {
      if (j == " ") {
        results += " ";
      } else {
        let indexValue = standardAlphabet.indexOf(j);
        results += alphabet[indexValue];
      }
    }
  }
  //if decoding, loop through the input, ignore spaces, use input character to find the index value in substitution alphabet
  //return that index value in the standard alphabet
  else {
    for (let k of input) {
      if (k == " ") {
        results += " ";
      } else {
        let indexValue = alphabet.indexOf(k);
        results += standardAlphabet[indexValue];
      }
    }
  }
  return results
  }
// to if checks
// alphabet === 26 charcters or return false
// musn't be repeats or return false



  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
