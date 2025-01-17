const tt = [1, 2, 3, 4,5,56,6]
let re=""
for(let result in tt){
    re+=tt[result] + " "
}
console.log(re)

const person = {fname:"John", lname:"Doe", age:25};

let text = [];
for (let x in person) {
  text += person[x] + " ";
}
console.log(text)

const cars = ["BMW", "Volvo", "Mini"];

let cr ="";
for(let re of cars){
    cr+= re + " "
}
console.log(cr)