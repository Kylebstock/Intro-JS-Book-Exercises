//first problem set
/*let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

  myArray.forEach(value => {
    if (value % 2 === 0) {
      console.log(value);
    }
  })

  for (let i = 0; i < myArray.length; i += 1) {
    let value = myArray[i];
    if (value % 2 === 0) {
      console.log(value);
    }
  }
  */ 

//second problem set:
/*let myArray = [[1, 3, 6, 11], [4, 2, 4], [9, 17, 16, 0],];

  for (let i = 0; i < myArray.length; i += 1){
    for (let j = 0; j < myArray.length; j += 1){
      let value = myArray[i][j];
      if (value % 2 === 0){
        console.log(value);
      }
    }
  }

  myArray.forEach(nestedArray => {
  nestedArray.forEach(value =>{
    if (value % 2 === 0) {
      console.log(value);
    }
  })
})
*/

//third problem set
/*let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];
let newArray = myArray.map(value => {
  if (value % 2 === 0){
    console.log('even');
  } else {
    console.log('odd');
  }
})
*/

let array = [3, 5, 7];
sumOfSquares = array.reduce((accum, element) => {
  accum * element, 1
})
console.log(sumOfSquares(array));