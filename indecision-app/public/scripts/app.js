"use strict";

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

var visibility = false;

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render_page();
};

var render_page = function render_page() {
    var template = React.createElement(
        "div",
        { id: "content" },
        React.createElement(
            "h1",
            { id: "app-title" },
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleVisibility },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            "p",
            null,
            "Hey! Here are some details that you can now see!"
        )
    );

    ReactDOM.render(template, appRoot);
};
// <button id="show-details-btn" onClick={ on_details }>{ app.button_handler }</button>
// <p>{ app.details }</p>

var appRoot = document.getElementById('app');

render_page();

// const appTitle = document.getElementById('app-title');

// ReactDOM.render(<title id="app-title">Build It!</title>);
