import React from 'react';

import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    };

    handleRandomPick = () => {
        const rand_num = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[rand_num]


        this.setState(() => ({ selectedOption: option }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid value.'
        } else if (this.state.options.indexOf(option) > -1){
            return 'Option already exists.'
        } 

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handleClearSelectedOptions = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };

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

    render() {

        const subtitle = "Let the computer guide your life.";

        return (
            <div id='content'>
                <Header subtitle={ subtitle } />
                <div className='container'>
                    <Action has_options={ this.state.options.length > 0 } handleRandomPick={this.handleRandomPick} />
                    <div className='widget'>
                        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                        <AddOption handleAddOption={this.handleAddOption} />
                        <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOptions={this.handleClearSelectedOptions} />
                    </div>
                </div>
            </div>
        );
    }
};

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp;