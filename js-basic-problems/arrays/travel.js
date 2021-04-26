let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

let contains = (place, options) => {
  for (let i = 0; i < options.length; i ++) { 
  if (place === options[i]) {
      return true;
    } 
  }
  return false;
};

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false