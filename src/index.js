const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let output = "";
    let oneLetter="";
    for (let i = 0; i < expr.length; i+=10) {
      //Взять кусок строки
      oneLetter = expr.slice(i, i+10);
      console.log(oneLetter);
      //отдельно обработать пробел **********
      if (oneLetter === "**********") {
        output += " ";
        continue;
      }
      //преобразовать его в точка-тире
      let currentDotOrDash = [];
      let lastTwoNumbers="";
      for (let j = oneLetter.length - 1; j >= 0; j-=2 ) {
        lastTwoNumbers = oneLetter.slice(j - 1, j + 1);
        if (lastTwoNumbers === "11") {
          currentDotOrDash.push("-");
        } else if (lastTwoNumbers === "10") {
          currentDotOrDash.push(".");
        }
      }
      //по таблице найти букву
      output += MORSE_TABLE[currentDotOrDash.reverse().join("")];
    }
    return output;
  }

module.exports = {
    decode
}