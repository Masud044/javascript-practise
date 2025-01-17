class car{
   constructor(name,age){
     this.name= name;
     this.age = age;
   }
}

const car1 = new car('masud', 24)
console.log(car1)

class model extends car{
     constructor(br){
          super()
         this.brand = br
     }
}

const model1 = new model('sujuki')
console.log(model1)

// setter and getter method implement below

class flat{
    constructor(name){
        this.name = name;
    }
    get flat1(){
        return this.name;
    }
    set flat1(nm){
        this.name = nm;
    }
}
const newFlat = new flat('masud_flat')
newFlat.flat1 = "luxary"
console.log(newFlat);