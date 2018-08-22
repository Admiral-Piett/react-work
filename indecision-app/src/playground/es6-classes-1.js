class Person {
    constructor(name="Anonymous", age=0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // return 'Hi ' + this.name
        return `Hi, I am ${ this.name }!`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
};

class Student extends Person {
    constructor(name, age, major='Undecided') {
        super(name, age);
        this.major = major;
    }
    
    has_major() {
        if (this.major === 'Undecided' || !!this.major === false) {
            return false
        } else {
            return true
        }
    }

    getDescription() {
        let description = super.getDescription();
        
        if (this.has_major()) {
            description += ` Their major is ${this.major}`
        }
        return description
    }
};

class Traveler extends Person {
    constructor(name, age, homeLocation='') {
        super(name, age);
        this.homeLocation = homeLocation
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` My home location is ${this.homeLocation}.`
        }
        return greeting
    }
}

const p = new Traveler('Devin Humphreys', 90, 'Mars Bitch');
console.log(p.age);
console.log(p.getDescription());
console.log(p.getGreeting()) 

const o = new Traveler();
console.log(o);
console.log(o.getDescription());
console.log(o.getGreeting())
