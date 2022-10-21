import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList({ expenses, filteredExpense, selectedYear }) {
  const getCurrentExpenses = () => {
    if (selectedYear === "All") {
      return expenses;
    }
    return filteredExpense;
  };
  const renderedExpenses = getCurrentExpenses();
  if (renderedExpenses.length === 0) {
    return <h1 className="expense_list_fallback">Not expense found</h1>;
  }
  return (
    <ul className="expensesList">
      {renderedExpenses.map((expenses) => {
        return (
          <ExpenseItem
            expenseTitle={expenses.title}
            expensePrice={expenses.amount}
            expenseDate={expenses.date}
            key={expenses.id}
          />
        );
      })}
    </ul>
  );
}

export default ExpensesList;
