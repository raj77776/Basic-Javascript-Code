class Person 
    {
    constructor(name,age) {
        this.species = "humans";
        this.colour = "skin";
        this.name = name;
        this.age = age;
       
    }
        eat () {
        console.log("eating is fun");
    }

    sleep () {
       console.log("sleep is important")
    }
}

class Engineer extends Person {

      constructor(name,age) {
         super(name,age);
         this.branch = "Chemical Engineer";
      }
    work () {
        super.eat();
        console.log("work to earn money");
    }

   
}

class Worker extends Person {
    constructor(name,age) {
        super(name,age);
    }

    construct() {
        console.log(`the worker name is ${this.name} and aged ${this.age}`);
    }
}

let engineer = new Engineer("John", "43");
let person = new Person("Michael","52");
let worker = new Worker("Adam", "28");

