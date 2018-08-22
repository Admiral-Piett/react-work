class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.onDetails = this.onDetails.bind(this)
        this.state = {
            visibility: false
        }
    }

    onDetails(){
        this.setState((prevState) => {
            console.log(prevState.visibility)
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={ this.onDetails }>{ !this.state.visibility ? 'Show Details':'Hide Details' }</button>
                { !this.state.visibility ? undefined : <p>Here are some details</p> }
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));