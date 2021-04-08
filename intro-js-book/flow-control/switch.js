let a = 5;

switch (a) {
  case 3:
  case 4:
  case 5:
    console.log('a is either 3, 4, or 5');
    break;
  case 6:
  case 7:
  case 8:
    console.log('a is either 6, 7 or 8');
    break;
  default:
    console.log('a is not 3 through 8');
    break;
}