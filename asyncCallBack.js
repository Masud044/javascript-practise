// this time out when 4 second after show the undefined
// setTimeout(display,3000)

// function display(x){
//       document.getElementById('demo').innerHTML = x;
// }
// function calculator(num1,num2,myDisplay){
//      let sum = num1+num2;
//      myDisplay(sum)
// }
// calculator(10,5,display)

//settimeout method used to inside the fuction
// setInterval(function() {
//      show("this is my home");
// },3000)

// function show(value){
//      document.getElementById('demo').innerHTML = value;
// }

//example using promise method

let myPromise = new Promise(function(myResolve, myReject) {
     setTimeout(function() { myResolve("I love You !!"); }, 3000);
   });
   
   myPromise.then(function(value) {
     document.getElementById("demo").innerHTML = value;
   });

   // async and await used to inside a function

   async function myDisplay() {
     let myPromise = new Promise(function(resolve) {
       resolve("I love You !!");
     });
     document.getElementById("demo").innerHTML = await myPromise;
   }
   
   myDisplay();
   
   