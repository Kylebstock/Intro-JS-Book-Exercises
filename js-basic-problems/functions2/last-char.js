
let removeLastChar = string => {
  string = string.substring(0, string.length -1);
  return string;
  };

/*
let removeLastChar = (string) => {
string = string.slice(0, -1);
return string;
}
*/

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'