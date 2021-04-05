const multiply = (num1) => {
  let readlineSync = require('readline-sync');
  let number = readlineSync.question(num1);
  return number;
}

let firstNumber = multiply('Enter the first number: ');
let secondNumber = multiply('Enter the second number: ');
console.log(`${firstNumber} * ${secondNumber} = ` + firstNumber * secondNumber);