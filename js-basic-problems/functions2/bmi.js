

// 1 meter = 100 centemeters

let calculateBMI = (weight, height) => {
  let heightInMeters = height / 100;
  let bmi = weight / heightInMeters**2;
  return bmi.toFixed(2);
}
 
console.log(calculateBMI(80, 180)); // "24.69"