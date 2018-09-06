import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    handleDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    handleFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else {
            this.props.sortByAmount();
        }
    };

    render () {
        return (
            <div>
                <p>Filter on Text:</p>
                <input id='text-filter' type='text' value={this.props.filters.text} onChange={this.onTextChange} />
                <p>Sort by:</p>
                <select id='sort-by-selector' value={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <p>Pick a Date Range:</p>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    startDateId='start_date_id'
                    endDate={this.props.filters.endDate}
                    endDateId='end_date_id'
                    onDatesChange={this.handleDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.handleFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    sortByDate: () => dispatch(sortByDate),
    sortByAmount: () => dispatch(sortByAmount)
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);