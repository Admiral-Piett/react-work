// arguments object - is no longer bound with arrow functions
// this keyword - is no longer bound with arrow functions
    // Bound to parent scope - traditional ES5 functions are bound to local scope

const add = function (x, y) {
    console.log(arguments) 
    return x + y
}

console.log(add(55, 9, 1000))


const add_arrow = (x, y) => {
    // console.log(arguments)
    // fails in arrow functions
}

console.log(add_arrow(55, 1))

const user = {
    name: 'Devin',
    cities: ['Philadelphia', 'Los Angeles', 'Houston'],
    // ES6 method definition syntax - local scope for this variable
    print_places_lived() {
        
        // ES5
        // const that = this;
        // this.cities.forEach(function(city) {
        //     console.log(that.name + ' lived in ' + city);
        // });

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in '+ city)
        // })

        // Can transform each item
        return this.cities.map((city) => {
            return this.name + ' has lived in ' + city + '!'
        })
    }
};

console.log(user.print_places_lived())


// Challenge
const multiplier = {
    numbers: [4, 5, 6],
    multiply_by: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiply_by);
    } 
};

console.log(multiplier.multiply());

