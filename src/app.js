import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibileExpenses from './selectors/expenses';
import { Provider } from 'react-redux';

const store = configureStore();


store.dispatch(addExpense({ description: 'hulu bill', amount: 60}));
store.dispatch(addExpense({ description: 'water bill', amount: 70}));

store.dispatch(setTextFilter('water'));

setTimeout(()=>{
    store.dispatch(setTextFilter('bill'));
}, 3000);

const state = store.getState();
const visibileExpenses = getVisibileExpenses(state.expenses, state.filters);

console.log(visibileExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
