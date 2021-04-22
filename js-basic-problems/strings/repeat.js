const repeat = (n, string) => {
  let repetition = '';

  while (n > 0) {
    repetition += string;
    n -= 1;
  }
  return repetition;
}
console.log(repeat(4, 'Ha'));

// my first attempt
/*
const repeat = () => {
  let r = 0;
  while (r < 3) {
    console.log('Ha!');
    r++;
  }
}
repeat();
*/
