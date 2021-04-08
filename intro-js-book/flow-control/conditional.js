const prompt = getNumber => {
  let readlineSync = require('readline-sync');
  let number = readlineSync.question(getNumber);
  return number;
}
let firstNumber = prompt('what is your number?\n');

if (firstNumber === '3') {
  console.log(`${firstNumber} is equal to 3`);
} else if (firstNumber === '4') {
  console.log(`${firstNumber} is equal to 4`);
} else {
  console.log(`${firstNumber} is neither 3 nor 4`);
}
