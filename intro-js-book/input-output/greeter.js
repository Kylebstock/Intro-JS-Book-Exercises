let rlSync = require('readline-sync');
let firstName = rlSync.question("What's your first name?\n");
let lastName = rlSync.question("What's your last name?\n");
let question = rlSync.question(`Hello, ${firstName} ${lastName}! How's your day today?\n`);
console.log(`I'm glad it's a ${question} day for you so far!`);
