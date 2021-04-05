const getName = question => {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(question);
  return name;
}

let firstName = getName('What is your first name?\n');
let lastName = getName('what is your last name?\n');
console.log(`Hello, ${firstName} ${lastName}! My name is Hal. It's nice to meet you!`);
