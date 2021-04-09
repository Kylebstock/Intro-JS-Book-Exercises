//questions #3
/*let myArray = {
  0 : 'a',
  1 : 'b',
  2 : 'c',
  length : 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
} */

// question #4
/*
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
let upperKeys = objKeys.map((key) => key.toUpperCase());
console.log(upperKeys);
console.log(obj); 


let upperKeys = [];
let objKeys = Object.keys(obj);
objKeys.forEach(function(key) {
  upperKeys.push(key.toUpperCase())
});
console.log(upperKeys);
*/

// question #5
/*
let myProtoObj = {
  foo: 1,
  bar: 2,
};
let newObject = Object.create(myProtoObj);
newObject.sna = 'fu';
for (let key in newObject) {
  console.log(key);
}


let objKeys = Object.keys(newObject);
objKeys.forEach(key => {console.log(key)});
*/

// questions 11
let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
obj.bar[3].xyz = 606;