import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        if (props.expense) {
            this.state = {
                description: props.expense.description,
                amount: (props.expense.amount / 100).toString(),
                createdAt: moment(props.expense.createdAt),
                calendarFocused: false,
                note: props.expense.note,
                error: undefined
            }
         } else {
            this.state = {
                description: '',
                amount: '',
                createdAt: moment(),
                calendarFocused: false,
                note: undefined,
                error: undefined
            }
        }
    };

    handleDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() =>({ description }));
    };

    handleAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    handleDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt: createdAt }))
        }
    };

    handleFocusChange = (e) => {
        this.setState(() => ({ calendarFocused: e.focused }))
    };

    handleNoteChange = (e) => {
        // need to pull this out as a variable first because using e.target.value is being used in a callback
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: 'Please fill in a Description and an Amount.'
            }))
        } else {
            this.setState(() => ({
                error: undefined
            }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text' 
                        placeholder='Description' 
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                        autoFocus 
                    />
                    <input 
                        type='text' 
                        placeholder='$0'
                        value={this.state.amount}
                        onChange={this.handleAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.handleDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.handleFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        placeholder='Add a Note (optional)'
                        value={this.state.note}
                        onChange={this.handleNoteChange}
                    ></textarea>
                    <button type='submit'>Save Expense</button>
                </form>
            </div>
        )
    }
};