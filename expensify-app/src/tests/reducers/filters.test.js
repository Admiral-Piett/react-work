import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT', sortBy: 'amount' })

    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to data', () => {
    const defaultState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const action = { type: 'SORT_BY_DATE', sortBy: 'date' };
    const state = filtersReducer(defaultState, action)
    expect(state.sortBy).toBe('date');
});

// test('should set the text filter')
test('should set text filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'this is a text filter'});

    expect(state.text).toBe('this is a text filter');
});

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', date: moment(0)})

    expect(state.startDate).toEqual(moment(0));
});

test('should set endDate filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', date: moment(0)})

    expect(state.endDate).toEqual(moment(0));
});
