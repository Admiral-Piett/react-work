class IndecisionApp extends React.Component {
    render() {

        const title = "Indecision";
        const subtitle = "Let the computer guide your life.";
        const options = ['fart face1', 'dill weed 2', 'douche baggins 4']

        return (
            <div id='content'>
                <Header title={title} subtitle={ subtitle }/>
                <Action />
                <Options options={options} />
                <AddOption options={options} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <h2>{ this.props.subtitle }</h2>
            </div>
        )
    }
};

class Action extends React.Component {
    on_random_pick() {
        alert('random pick')
    }

    render() {
        return (
            <div>
                <button onClick={ this.on_random_pick } >What should I do?</button>
            </div>
        );
    }
};

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.on_remove_all = this.on_remove_all.bind(this);
    }

    on_remove_all() {
        console.log(this.props.options)
    }

    render() {
        return (
            <div>
                <p><b>Number of Options :</b> {this.props.options.length}</p>
                <button onClick={this.on_remove_all}>Remove All</button>
                {
                    this.props.options.map((option, index) => {
                        return <Option key={ index } option={option}></Option>
                    })
                }
                <Option></Option>
            </div>
        );
    }
};

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.option}</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    on_add_option_submit(e) {
        e.preventDefault()

        const option = e.target.elements.add_option_input.value.trim();

        if (option) {
            alert(option)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.on_add_option_submit}>
                    <input id='option-input' type='text' name='add_option_input'/>
                    <button type='submit' name='add-option-btn' >Add Option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
