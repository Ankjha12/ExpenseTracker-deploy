import React, { useState } from "react";
import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const dropdownChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={dropdownChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

        {/* this is the alternative way of implementing the same logic as we write above at line 24 but the diffrence here is that we don't rely on ternary oprator as we know the trick of javascript that when we compare two thing with && operator then if the condition is met then it will return the 2nd value as the result that is why the two line statement is removed the concept of using the ternary operator
       
       
       
        {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
        {filteredExpenses.length === 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        />
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        />
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        />
        <ExpenseItem
          title={props.item[3].title}
          amount={props.item[3].amount}
          date={props.item[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
