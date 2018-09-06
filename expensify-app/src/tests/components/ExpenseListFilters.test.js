import React from 'react';
import { shallow } from 'enzyme';

import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import { filters, altfilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render expenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render expenseListFilters with altdata correctly', () => {
    // can pass in data as props object to override default data above
    wrapper.setProps({filters: altfilters});
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'text'
    wrapper.find('#text-filter').simulate('change', {
        target: {value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sortByDate correctly', () => {
    wrapper.setProps({filters: altfilters});

    const value = 'date'
    wrapper.find('#sort-by-selector').simulate('change', {
        target: {value}
    })
    expect(sortByDate).toHaveBeenCalled();
});

test('should sortByAmount', () => {
    const value = 'amount'
    wrapper.find('#sort-by-selector').simulate('change', {
        target: {value}
    })
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = altfilters.startDate.add(4, 'years');
    const endDate = altfilters.endDate.add(8, 'years');

    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle data focus changes', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('endDate');
    expect(wrapper.state('calendarFocused')).toBe('endDate');
});

