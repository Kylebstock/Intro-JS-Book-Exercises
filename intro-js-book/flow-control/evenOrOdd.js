const prompt = getNumber => {
  let readlineSync = require('readline-sync');
  let number = readlineSync.question(getNumber);
  return number;
}

let evenOrOdd = prompt("Please select a number, any number, and I'll tell you if it's even or odd!\n")

  if (evenOrOdd % 2 === 0) {
    console.log(`${evenOrOdd} is an even number!`);
  } else {
    console.log(`${evenOrOdd} is an odd number!`);
  }
