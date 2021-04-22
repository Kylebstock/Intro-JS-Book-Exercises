const isBlank = string => {
  if(string.trim().length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isBlank(' '));

/*
let string = 'this is a string';
let noString ='';
const isBlank = (str) => {
  if (str === '') {
    console.log(`this string is empty!`);
  } else {
    console.log(`this string is not empty! it says:\n"${str}"`);
  }
}
isBlank(noString);
*/