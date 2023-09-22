// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }

    if (!encode) shift *= -1;

    let lowerCase = input.toLowerCase();
    let codedMessage = "";

    for (let i=0; i <lowerCase.length; i++){
      let letter = lowerCase[i];
      if (letter.match(/[a-z]/)){
        let coded = lowerCase.charCodeAt(i) + shift;
        if (coded > 122) {
          coded = coded - 26;
        }
        if (coded < 97) {
          coded = coded + 26;
        }
        codedMessage += String.fromCharCode(coded)
      }
      else {
        codedMessage += letter
      }
    }
return codedMessage
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };


// alot of poeple have used char... and split() ascii...
// 97 = lower case a
//122 = lower case z
//what is %26?
