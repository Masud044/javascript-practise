// const person = {};
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// console.log(person.firstName) 

//create a new object
const person = new Object();
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
person["lastName"] = "masud"
person.age = 30
//delete the age property
console.log(delete person["age"]) 
console.log( person) 

const person1 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Create an Array
  const myArray = Object.values(person1);
console.log(myArray) 

// Create an Object
const person2 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Stringify Object
  // let myString = JSON.stringify(person2);
  // console.log(myString)

  let js = JSON.parse(person2)

  console.log(js)

  