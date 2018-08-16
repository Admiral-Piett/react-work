"use strict";

console.log('this is my app file bitch');

// JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "Here's some junk I wanted to say.",
    options: []
};

function list_options(options) {
    options.map(function (option) {
        return React.createElement(
            "li",
            { key: options.index },
            "Option: ",
            option
        );
    });
};

var on_form_submit = function on_form_submit(e) {
    // Stops full page refresh and stops sending data back in the URL
    e.preventDefault();

    // e is the Response, target is the form, elements are the elements in the form, option is the input name field, and value gets the value 
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render_page();
    }
};

var on_reset_options = function on_reset_options() {
    app.options = [];
    render_page();
};

var on_make_decision = function on_make_decision() {
    var rand_num = Math.floor(Math.random() * app.options.length);
    var option = app.options[rand_num];

    alert(option);
};

var render_page = function render_page() {
    var template = React.createElement(
        "div",
        { id: "content" },
        React.createElement(
            "h1",
            { id: "jsx-app-id" },
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            { id: "paragraph-info" },
            app.subtitle
        ),
        app.options && app.options.length > 0 ? "Here are your options" : "No options",
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: on_make_decision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: on_reset_options },
            "Remove All Options"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option.index },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: on_form_submit },
            React.createElement("input", { id: "text-input", type: "text", name: "option" }),
            React.createElement(
                "button",
                { type: "submit" },
                "Add Option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

render_page();
