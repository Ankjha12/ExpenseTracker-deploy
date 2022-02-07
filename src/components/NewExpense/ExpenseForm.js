import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput,setUserInput] = useState({ // this is the alternate method of using the useState() function without using the multiple useState intead in here we are using one useState and we are passing the object of all value of the title amount and date propety whivh is going to chage by the user input
  //     enteredTitle: '',
  //     enteredAmount:  '',
  //     enteredDate: ''
  // })

  const titleClickHandler = (event) => {
    // console.log('title Clicked');
    // console.log(event);
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
    // setUserInput({  // in here we are responding about the change in title according the user input in here we are only changing the title input feild that is there is the problem of using one useState intead of using the UseState individually we have to save the older userInput as wel otherwise the value of the other input will we lost and we only can set the value of the emnteredTitle

    //     ...userInput, // this the spread operator of javascript wich s responsible for the storing of the older input of the user as we setting up the new title in the next line so this value will store the new user value
    //     enteredTitle: event.target.value
    // })
    // setUserInput((prevState) => { // this method is usefull for the those when your updating state is based on the previous state  so this function will only change the enteredTitle based on the user input but it will also give us a snapshot of the previous  state and react will guarantee that snapshot will be the latest snapshot with passed as the parameter in the arrow function
    //     return {...prevState, enteredTitle: event.target.value}
    // })
  };
  const amountClickHandler = (event) => {
    // console.log('Amount clicked');
    // console.log(event.target.value);
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput, // similarlt  here we are storing the older version of the user input and setting the new value of the enteredAmount
    //     enteredAmount: event.target.value
    // })
  };
  const dateClickHandler = (event) => {
    // console.log('date is Clicked');
    // console.log(event.target.value);
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput, // Similarly in here we are storing the older version input of the input field and setting the new value for the enteredate in the next line
    //     enteredDate: event.target.value
    // })
  };
  const submitHandler = (event) => {
    event.preventDefault(); // this preventDefault method is used to prevent the default behaviour of the browser when form is submitted it will autometically reload the server but after using this method it will stop sending to the server instead page will not reload and we can save the data
    const expenseData = {
      title: enteredTitle, // this enteredTitle, enteredAmount, enteredDate these are basically the useState variable that are holding the user input data on the form
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData); // this function is responsible for sending the user data from here to the newExpense.js File

    setEnteredTitle(""); // this is used to set the input field empty after user clicked on the add expense button that is why we are setting the input valur as enteredAmount ,enteredTitle and date so that te value can be stored and then make the field empty for another input collection by the user
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleClickHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="Number"
            min="1"
            step="0.01"
            value={enteredAmount}
            onChange={amountClickHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateClickHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onStopEditing}>
          Cancel
        </button>
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
