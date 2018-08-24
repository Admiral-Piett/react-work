class OldSyntax {
    constructor() {
        this.name = "Devin";
    }
    getGreeting() {
        return `Hi.  My name is ${this.name}.`
    }
}

const oldSyntax = new OldSyntax();
// const getGreeting = OldSyntax.getGreeting();
console.log(oldSyntax);

// New Syntax

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi.  My name is ${this.name}.`
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting();
console.log(newGetGreeting);