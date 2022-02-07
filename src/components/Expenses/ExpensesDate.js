import React from 'react';
import './ExpensesDate.css';

const ExpensesDate = (props) => { 
    // const date = new Date();
    // const currentDate = date.toLocaleString(); 
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const Month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    return ( 
        <div className="expense-date">
            <div className='expense-date__month'>{Month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>

    )
} 

export default ExpensesDate;