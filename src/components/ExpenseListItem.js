import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

 const ExpenseListItem = ({dispatch, id, description, amount, createdAt, note}) =>(
    <div>
        <h3>{`Expense: ${description}`} </h3>
        <p>{`Amount: ${amount}`}</p>
        <p>{`Created at: ${createdAt}`}</p>
        <p>{`Note: ${note}`}</p>
        <button onClick={() => {
            dispatch(removeExpense({id}))
        }}> Remove </button>
    </div>
);

export default connect()(ExpenseListItem);