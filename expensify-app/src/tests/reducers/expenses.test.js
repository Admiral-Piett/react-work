import moment from 'moment';
import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});

    expect(state).toEqual([]);
});

test('should remove an expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove an expense when id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
});

test('should add a new expense', () => {
    const expense = {
        description: 'Test Description',
        note: 'This is my note',
        amount: 1300,
        createdAt: moment(0)
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(undefined, action)

    expect(state).toEqual([expense])
});

test('should edit an existing expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            amount: 2
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state[2].amount).toBe(2)
});

test("should not edit an expense if expense doesn't exist", () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount: 2
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses)
});
