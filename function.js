
// function firstCall(p){
//      let i,sum=0;
//      for(i=0;i<=p;i++){
//         sum+=i;
//      }
//      return sum;
// }

// let result = firstCall(3);
// console.log(result)

// self-involk function
// (function(){
//     let x = 'hi masud'
//     console.log(x);  
    
// }())
// this is tostring function declare
// function myFunction(a, b) {
//     return a * b;
//   }
  
//   let text = myFunction.toString();
//   console.log(text)

//Arrow function

// const name =(a,b)=>{
//     console.log(a,b);
// }
// name("masud","rana")

// x = sumAll(1, 123, 500, 115, 44, 88);

// function sumAll() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(x)

// let x = findMax(2,4,5,7,3,2,7,8,9,12,-1)
// function findMax(x) {
//   let min= 100000;
//   for (let i = 1; i <arguments.length; i++) {
//     if(arguments[i]<min){
//         min=arguments[i];
//     }
//   }
//   return min;
// }

// console.log(x);

const objects = {
     name:'masud',
     age:25,
     instituation:'gopalgonj',
     fullName:function(){
         return this.name +" "+ this.age
     }
}
console.log(objects.fullName())

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  console.log(person.fullName.call(person1))