import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const CreateExpensePage = (props) => (
    <div>
        <h1>Add a New Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                console.log(expense);
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(CreateExpensePage);