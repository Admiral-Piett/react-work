// Object Destructuring

// const person = {
//     name: "Devin",
//     age: 28,
//     location: {
//         city: "Philadelphia",
//         temp: 'hot-as-balls'
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const {name: firstName ="Anonymous", age, location} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// };

// const book = {
//     title: "Harry Potter and the Order of the Pheonix",
//     auther: "J.K. Rowling",
//     publisher: {
//         name: "Fart Blossom"
//     }
// };

// const {name: publisherName = "Self Publish"} = book.publisher;
// console.log(publisherName);


// Array Destructuring

const address = ['214 E Salaignac Street', 'Philadelphia', 'Pennsylvania', '19128'];

const [, city="Fartington", state="Fartville"] = address;

console.log(`You are in ${city}, ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [thing, , medium] = item;
console.log(`A medium ${thing} costs ${medium}.`)
