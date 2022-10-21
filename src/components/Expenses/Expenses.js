import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [selectYear, setSelecYear] = useState("");
  const changeSelectedYearHandler = (e) => {
    setSelecYear(e.target.value);
  };
  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectYear}
        onChangeSelectedYear={changeSelectedYearHandler}
      />
      <ExpensesList
        expenses={props.expenses}
        filteredExpense={filteredExpense}
        selectedYear={selectYear}
      />
    </Card>
  );
}

export default Expenses;
