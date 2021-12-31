import React, { useCallback, useState } from "react";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = useCallback(
    (data) => {
      const expenseData = {
        ...data,
        id: Math.random().toString(),
      };
      props.onAddExpenseData(expenseData);
      setIsEditing(false);
    },
    [props]
  );

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className=" text-center">
      {!isEditing && (
        <button className=" text-white rounded-xl mt-5 px-10 py-2 text-2xl font-bold  bg-purple-900" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEditing={stopEditingHandler} />}
    </div>
  );
}
