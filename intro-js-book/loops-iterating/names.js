let names = ['john', 'jacob', 'jingle', 'heimer', 'smith'];
let upperNames = [];

for (let index = 0; index < names.length; index++) {
  if (names[index] !== 'heimer') {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  }
}
console.log(upperNames);