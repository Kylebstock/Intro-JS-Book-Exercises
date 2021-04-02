let rlSync = require('readline-sync');
let age = rlSync.question('How old are you?\n');
const futureAge = age => {
  console.log(`So, you're currently ${age} years old, which means:`)
  console.log(`In 10 years, you will be ${age + 10} years old.`)
  console.log(`In 20 years, you will be ${age + 20} years old.`)
  console.log(`In 30 years, you will be ${age + 30} years old.`)
  console.log(`In 40 years, you will be ${age + 40} years old.`)
};
futureAge(34);