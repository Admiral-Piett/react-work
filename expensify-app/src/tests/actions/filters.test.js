import moment from 'moment';
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from '../../actions/filters';

test('should generate setStartDate action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
});

test('should generate setEndDate action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
});

test('should generate a setTextFilter action object with default text', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});

test('should generate a setTextFilter action object with provided text', () => {
    const action = setTextFilter('Hey-o!')

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Hey-o!'
    })
});

test('should generate a sortByAmount action object', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
});

test('should generate a sortByDate action object', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    })
});