console.log('this is my app file bitch');

// JSX - JavaScript XML

const app = {
    title: "Indecision App",
    subtitle: "Here's some junk I wanted to say.",
    options: []
};


function list_options(options) {
    options.map((option) => {
        return <li key={ options.index }>Option: {option}</li>
    })
};

const on_form_submit = (e) => {
    // Stops full page refresh and stops sending data back in the URL
    e.preventDefault();

    // e is the Response, target is the form, elements are the elements in the form, option is the input name field, and value gets the value 
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render_page();
    }
};

const on_reset_options = () => {
    app.options = [];
    render_page();
};

const on_make_decision = () => {
    const rand_num = Math.floor(Math.random() * app.options.length);
    const option = app.options[rand_num];

    alert(option);
};


const render_page = () => {
    const template = (
        <div id="content">
            <h1 id="jsx-app-id">{ app.title }</h1> 
            { app.subtitle && <p id="paragraph-info">{ app.subtitle }</p>}
            { (app.options && app.options.length > 0) ? "Here are your options" : "No options" }
            <button disabled={ app.options.length === 0 } onClick={ on_make_decision }>What should I do?</button>
            <button onClick={ on_reset_options }>Remove All Options</button>
            <ol>
                { 
                    app.options.map((option) => {
                        return <li key={ option.index }>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={ on_form_submit }>
                <input id="text-input" type="text" name="option"/>
                <button type="submit">Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

render_page();
