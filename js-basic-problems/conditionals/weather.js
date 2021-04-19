let weather = 'cold';

/*
if (weather === 'sunny') {
  console.log(`It's a beautiful day!`);
} else if (weather === 'rainy') {
  console.log(`Grab your umbrella!`);
} else {
  console.log(`let's stay inside`);
}
*/

switch (weather) {
  case 'sunny':
    console.log(`It's a beautiful day!`);
    break;
  case 'rainy':
    console.log(`Grab your umbrella!`);
    break;
  case 'hot':
    console.log(`Why did we move to Arizona?!`);
    break;
  case 'cold':
    console.log(`Grab your jacket!`);
    break;
  default:
    console.log(`don't trust the weather report!`);
}