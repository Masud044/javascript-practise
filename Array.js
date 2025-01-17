const tt =[3,4,5,5,6,7,7,7,7,5,5,4,4,3,9]
const re = tt.slice(2,5)
console.log(re)

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
console.log(cars)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const ee = fruits[fruits.length-1]
const t = Array.isArray(fruits)//this means Array is not or yes!
console.log(t);
 
console.log(ee)

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year)

// const cars = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"];//error this formet because const take reassign value
// console.log(cars)
