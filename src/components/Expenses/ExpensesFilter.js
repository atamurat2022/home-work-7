import React from "react";
import "./ExpensesFilter.css";

function ExpensesFilter({ selectedYear, onChangeSelectedYear }) {
  return (
    <div className="expensesFilter">
      <div className="expensesFilter-control">
        <label htmlFor="">Filter by year</label>
        <select value={selectedYear} onChange={onChangeSelectedYear}>
          <option value="All">Select All</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
