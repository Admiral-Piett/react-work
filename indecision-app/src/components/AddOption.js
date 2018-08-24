import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    onAddOptionSubmit = (e) => {
        e.preventDefault()
        console.log('test')
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
    };

    render() {
        return (
            <div>
                <p className='add-option-error'>{this.state.error && <p>{this.state.error}</p>}</p>
                <form className='add-option-form' onSubmit={this.onAddOptionSubmit}>
                    <input className='add-option-input' id='option-input' type='text' name='add_option_input'/>
                    <button className='button' type='submit' name='add-option-btn' >Add Option</button>
                </form>
            </div>
        )
    }
};
