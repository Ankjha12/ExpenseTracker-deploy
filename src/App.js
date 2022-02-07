import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// import ExpensesFilter from "./components/Expenses/ExpensesFilter";
const Dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "A Toy",
    amount: "120",
    date: new Date(2022, 1, 5),
  },
];
const App = (props) => {
  const [expenses, setExpenses] = useState(Dummy_expenses);
  const addExpenseHandler = (expenses) => {
    // this fuction is respnsible for gathering the user data from the newExpense file from there we are executing the this function
    // console.log("in App.js");
    // console.log(expense);
    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenses={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
