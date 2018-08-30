import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeExpense } from '../actions/expenses';

const ExpenseItem = (props) => (
    <div>
        <Link to={`edit/${props.id}`}>
            <h3>{props.description}</h3>
        </Link>
        <p>Cost: ${props.amount}, Created On: {props.createdAt}</p>
        <a href={'edit/'+props.id}>Edit</a>
        <button onClick={() => {
            props.dispatch(removeExpense({ id: props.id }))
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseItem);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));