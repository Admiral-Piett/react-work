export const isAdult = (x) => {
    if(x >= 18) {
        return true
    } else {
        return false
    }
};

export const canDrink = (x) => {
    if (x >= 21) {
        return true
    } else {
        return false
    }
};

const isSenior = (x) => x >= 65;
export default isSenior;