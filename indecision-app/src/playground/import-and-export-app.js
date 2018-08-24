// import './utils.js';
import subtractWhateverName, { square, add } from './example-export-utils.js';
import isSenior, { isAdult, canDrink } from './example-export-person.js';

console.log('app.js is running on webpack!!');

console.log(square(6));
console.log(add(4, 5));
console.log(subtractWhateverName(100, 10));
console.log(isAdult(18));
console.log(canDrink(18));
console.log(isSenior(50));