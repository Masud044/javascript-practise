const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  
  // Destructuring
  let {firstName, lastName, country = "US"} = person;

  console.log(firstName)

  // Create a String
let name = "W3Schools";

// Destructuring
let [a1, a2, a3, a4, a5] = name;
console.log(a5)

// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2,,fruit4] = fruits;
console.log(fruit1,fruit2,fruit4)

// Create an Array
const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a,,c,...spreadoperator] = numbers
console.log(spreadoperator,a,c)