import ExpenseDate from './ExpenseDate'
import './Expense.css'
import React from 'react';

function ExpenseItem (props){
    return (
    <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2 className='expense-item__type'>{props.title}</h2>
            <div className='expense-item__price'>{'$'+props.price}</div>
        </div>

    </div>
    );
};
export default ExpenseItem; 