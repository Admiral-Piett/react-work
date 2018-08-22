class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleRandomPick = this.handleRandomPick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        try {
            console.log('fetching data')
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {

        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json);
            console.log('saving data')
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handleRandomPick() {
        const rand_num = Math.floor(Math.random() * this.state.options.length);

        alert(this.state.options[rand_num])
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid value.'
        } else if (this.state.options.indexOf(option) > -1){
            return 'Option already exists.'
        } 

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    render() {

        const subtitle = "Let the computer guide your life.";


        return (
            <div id='content'>
                <Header subtitle={ subtitle } />
                <Action has_options={ this.state.options.length > 0 } handleRandomPick={this.handleRandomPick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
};

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{ props.title }</h1>
            {props.subtitle && <h2>{ props.subtitle }</h2>}
        </div>
    )
};

Header.defaultProps = {
    title: 'Indecision'
}

// class Header extends React.Component {
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <h1>{ this.props.title }</h1>
//                 <h2>{ this.props.subtitle }</h2>
//             </div>
//         )
//     }
// };

const Action = (props) => {
    return (
        <div>
            <button onClick={ props.handleRandomPick } disabled={!props.has_options}>What should I do?</button>
        </div>
    );
}

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={ this.props.handleRandomPick } disabled={!this.props.has_options}>What should I do?</button>
//             </div>
//         );
//     }
// };

const Options = (props) => {
    return (
        <div>
            <p><b>Number of Options :</b> {props.options.length}</p>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.length === 0 && <p>Please add an option to get started.</p>
            }
            {
                props.options.map((option, index) => {
                    return <Option key={ index } option={option} handleDeleteOption={props.handleDeleteOption}></Option>
                })
            }
        </div>
    );
};

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p><b>Number of Options :</b> {this.props.options.length}</p>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option, index) => {
//                         return <Option key={ index } option={option}></Option>
//                     })
//                 }
//                 <Option></Option>
//             </div>
//         );
//     }
// };

const Option = (props) => {
    return (
        <div>
            {props.option}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.option)
                }}
            >
                remove
            </button>
        </div>
    )
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.option}</p>
//             </div>
//         )
//     }
// }

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.onAddOptionSubmit = this.onAddOptionSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }

    onAddOptionSubmit(e) {
        e.preventDefault()

        const option = e.target.elements.add_option_input.value.trim();

        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return {
                error: error
            }
        });

        if (!error) {
            e.target.elements.add_option_input.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onAddOptionSubmit}>
                    <input id='option-input' type='text' name='add_option_input'/>
                    <button type='submit' name='add-option-btn' >Add Option</button>
                </form>
            </div>
        )
    }
}

// Stateless Functional Component
// No access to "this"
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
