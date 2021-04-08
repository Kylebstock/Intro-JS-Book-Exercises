let rlSync = require('readline-sync');
let age = rlSync.question('How old are you?\n');
age = parseInt(age);
console.log(`you are ${age} years old.`);
for (let future = 10; future < 50; future += 10) {
  console.log(`in ${future} years, you will be ${age + future} years old`);
};