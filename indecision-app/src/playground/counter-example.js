// const user = {
//     name: 'Farty McFart',
//     age: 28,
//     location: 'Outer Space'
// };

// function location_function(location) {
//     if (location) {
//         return <p>Location: { location }</p>
//     } else {
//         return undefined;
//     }
// };

// const templateTwo = (
//     <div>
//         <h1>{ user.name ? user.name : 'Anonymous' }</h1>
//         { (user.age && user.age >= 18) && <p>Age: { user.age }</p> }
//         { location_function(user.location) }
//     </div>
// );

let count = 0;

const add_one = () => {
    count ++;

    render_template();
};

const minus_one = () => {
    count --;

    render_template();
};

const reset = () => {
    count = 0;

    render_template();
};

const appRoot = document.getElementById('app');

const render_template = () => {
    const add_btn_id = 'plus-one'
    const templateTwo = (
        <div>
            <h1>Count: { count }</h1>
            <button id={add_btn_id} className="add-btn" onClick={ add_one }>+1</button>
            <button id="minus-one" className="minus-btn" onClick={ minus_one }>-1</button>
            <button id="reset" className="reset-btn" onClick={ reset }>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

render_template();