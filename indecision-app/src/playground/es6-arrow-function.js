// ES5 function
const square = function(x) {
    return x * x
};

console.log(square(7));

// ES6 Function Arrow
const square_arrow = (x) => {
    return x * x
};

console.log(square_arrow(8));

// Arrow Function Expression Syntax
const squareArrowExpress = (x) => x * x;

console.log(squareArrowExpress(9))

// Challenge
const getFirstName = (fullName) => fullName.split(' ')[0]

const name = 'Farty McFart'
console.log(getFirstName(name))
