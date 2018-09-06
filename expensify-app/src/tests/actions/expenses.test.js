import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should set up removeExpense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should set up editExpense action', () => {
    const action = editExpense('123abc', {note: 'Updating Note'});

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'Updating Note' }
    })
});

test('should set up addExpense action with provided values', () => {
    const data = {
        description: 'Rent',
        amount: 100922,
        createdAt: 1000,
        note: 'This is my rent.'
    }
    const action = addExpense(data);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...data,
            id: expect.any(String)
        }
    })
});

test('should set up addExpense action with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
});