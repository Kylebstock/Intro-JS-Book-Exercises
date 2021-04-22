let string = "lanuch school tech and talk";
let words = string.split(' ');
let capWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  capWords.push(word[0].toUpperCase() + word.slice(1));
}
//console.log(capWords.join(' '));
console.log(words);