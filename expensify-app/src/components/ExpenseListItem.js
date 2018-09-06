import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { removeExpense } from '../actions/expenses';

export const ExpenseItem = (props) => (
    <div>
        <Link to={`edit/${props.id}`}>
            <h3>{props.description}</h3>
        </Link>
        <p>Cost: ${props.amount}, Created On: {props.createdAt}</p>
        <Link to={`edit/${props.id}`}>Edit</Link>
    </div>
);

export default connect()(ExpenseItem);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));