import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water Bill', amount: 50000, createdAt: 1400000 }));
// store.dispatch(addExpense({ description: 'Electric Bill', amount: 800, createdAt: -950 }));
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 40000, createdAt: 10 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 1095000, createdAt: 250, note:'eff rent' }));

// store.subscribe(()=>{
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
