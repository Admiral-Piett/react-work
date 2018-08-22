class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.onAddOne = this.onAddOne.bind(this);
        this.onMinusOne = this.onMinusOne.bind(this);
        this.onReset = this.onReset.bind(this);
        // this.state = {
        //     count: props.count
        // };
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log('mount')
        try {
            const count = parseInt(localStorage.getItem('count'), 10);

            if (!isNaN(count)) {
                this.setState(() => ({ count }))
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('update')
        if (prevState.count !== this.state.count) {
            console.log('updating count')
            localStorage.setItem('count', this.state.count)
        }
    }

    onAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    onMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    onReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
        // Passing Object into this.setState instead of function (older, possibly deprecated in future)
        // this.setState({
        //     count: 0
        // })
        // this.setState({
        //     count: this.state.count + 1
        // })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.onAddOne}>+1</button>
                <button onClick={this.onMinusOne}>-1</button>
                <button onClick={this.onReset}>Reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'));