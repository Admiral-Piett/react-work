import { createStore } from 'redux';
import { Action } from 'rxjs/internal/scheduler/Action';

const store = createStore((state={ count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            };
        case "DECREMENT":
            return {
                count: state.count - 1
            };
        case "RESET":
            return {
                count: 0
            };
        default:
            return state;
    };

    // if(action.type === 'INCREMENT') {
    //     return{
    //         count: state.count + 1
    //     };
    // } else {
    //     return state;
    // }
});


console.log(store.getState())

// Actions - nothing more than an object that gets sent to the store
store.dispatch({
    type: "INCREMENT"
});

store.dispatch({
    type: "INCREMENT"
});
console.log(store.getState())

store.dispatch({
    type: "RESET"
});
console.log(store.getState())

store.dispatch({
    type: "DECREMENT"
});

console.log(store.getState())