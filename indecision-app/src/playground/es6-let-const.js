var nameVar = 'Devin';
console.log('nameVar', nameVar);

let nameLet = 'Fart';
nameLet = 'reassign';
console.log('nameLet', nameLet);

const nameConst = 'Const';
console.log('nameConst', nameConst);

function getPetName() {
    let petName = 'Cat';
    return petName
};

const petName = getPetName();
console.log(petName);

// Block Scoping
const fullName = 'Devin Humphreys';
let firstName;

if (fullName){
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)
