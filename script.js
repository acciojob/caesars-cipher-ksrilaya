// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = [],char;
	var codeArr = encodedStr.split("");
  function isLetter(char) { 
	  return /[a-z]/i.test(char);
  }
  function cipher(letter) {
    var charCode = letter.charCodeAt(0), // ASCII
    exceedsM = (charCode<97)? charCode>77 : charCode>109;
    return (exceedsM) ? charCode-13 : charCode+13;
  } // Transforms the letter into a new ASCII code

  for (var i = 0; i < codeArr.length; i++) {
    char = codeArr[i]; // Cache the current character
    if(isLetter(char)) {
      char = String.fromCharCode(cipher(char));
    } // Re-Assigns the letter for the ciphered new one

    decodedArr.push(char);
  } // Finished iterating and pushing
// Your Result goes here
  // Only change code below this line

  return decodedArr.join(""); //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
