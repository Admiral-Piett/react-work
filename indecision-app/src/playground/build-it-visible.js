// const app = {
//     title: "Build It!",
//     header: "Visibility Toggle",
//     button_handler: "Show Details"
// }

// const on_details = () => {
//     if (app.details) {
//         app.button_handler = "Show Details";
//         app.details = undefined;
//         render_page();
//     } else {
//         app.button_handler = "Hide Details";
//         app.details = "Hey, These are some details you can now see!";
//         render_page();
//     }
// }

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility
    render_page();
}

const render_page = () => {
    const template = (
        <div id="content">
            <h1 id="app-title">Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            { visibility && (
                <p>Hey! Here are some details that you can now see!</p>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
};
// <button id="show-details-btn" onClick={ on_details }>{ app.button_handler }</button>
// <p>{ app.details }</p>

const appRoot = document.getElementById('app');

render_page();

// const appTitle = document.getElementById('app-title');

// ReactDOM.render(<title id="app-title">Build It!</title>);