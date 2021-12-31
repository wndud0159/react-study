import React, { useCallback, useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = useCallback(
    (data) => {
      setFilteredYear(data);
    },
    [setFilteredYear]
  );

  const NoExpensesFount = () => {
    return <div className="text-white text-center">No Expenses found.</div>;
  };

  const filteredExpenses = props.items.filter((v) => {
    return v.date.getFullYear().toString() === filteredYear;
  });
  console.log("filter year check: ", filteredExpenses);

  return (
    <Card>
      <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
      {filteredExpenses.length === 0 && <NoExpensesFount />}
      {filteredExpenses.length > 0 && filteredExpenses?.map((item) => <ExpenseItem key={item.id} title={item.title} date={item.date} amount={item.amount} />)}
    </Card>
  );
}
