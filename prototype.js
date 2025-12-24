function Human(name,age){
    this.name=name,
    this.age=age,
    this.details=function(){
        console.log(`Name is ${this.name} and age is ${this.age}`);
        
    }
}

const h1=new Human("Titas",20);
// h1.details()

const Man=Object.create(h1)
// console.log(Man);


// Man.details=function(){
//     console.log("All stores in prototype")
// }

// console.log(Man.details()); // Name is Titas and age is 20
Man.name="DDDDD";
// console.log(h1.name);



//class based
class Person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
}

Person.prototype.newVar="newVar"

const newPerson = new Person("Saumya",25)
console.log(newPerson.newVar)
console.log(newPerson.__proto__);


