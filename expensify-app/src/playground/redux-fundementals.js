import { createStore } from 'redux';
import { Action } from 'rxjs/internal/scheduler/Action';

// Reducers
// 1. Pure functions - output is only determined by input - doesn't interact with or change anything outside of the function.
// 2. Never change state or action directly

const countReducer = (state={ count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case "RESET":
            return {
                count: 0
            };
        case "SET":
            return {
                count: action.count
            }
        default:
            return state;
    };
};

const store = createStore(countReducer);

// const store = createStore((state={ count: 0 }, action) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return {
//                 count: state.count + action.incrementBy
//             };
//         case "DECREMENT":
//             // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
//             return {
//                 count: state.count - action.decrementBy
//             };
//         case "RESET":
//             return {
//                 count: 0
//             };
//         case "SET":
//             return {
//                 count: action.count
//             }
//         default:
//             return state;
//     };
// });

// Watches the store for state changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())  
})

// Action Generators

const incrementCount = ({incrementBy = 1 } = {}) => ({ 
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count: count
})

const resetCount = () => ({
    type: 'RESET'
});

const add = ({ a, b }, c) => {
    return a + b + c
}

console.log(add({a: 1, b: 2 }, 100))

// Actions - nothing more than an object that gets sent to the store
// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({count: 3000}))

store.dispatch(resetCount())

store.dispatch({
    type: "RESET"
});

store.dispatch({
    type: "DECREMENT",
    decrementBy: 10
});

store.dispatch({
    type: "DECREMENT"
});

store.dispatch({
    type: 'SET',
    count: 101
})
