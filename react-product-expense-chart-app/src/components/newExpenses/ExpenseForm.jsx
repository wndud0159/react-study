import React, { useCallback } from "react";
import useInput from "../../hooks/useInput";

export default function ExpenseForm(props) {
  const [title, setTitle, titleChangeHandler] = useInput("");
  const [amount, setAmount, amountChangeHandler] = useInput("");
  const [date, setDate, dateChangeHandler] = useInput("");

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      const expenseData = {
        title: title,
        amount: amount,
        date: new Date(date),
      };
      props.onSaveExpenseData(expenseData);
      setTitle("");
      setAmount("");
      setDate("");
    },
    [setTitle, setAmount, setDate, title, amount, date, props]
  );

  return (
    <div className=" border rounded-xl flex flex-col items-center px-3 py-2 bg-purple-500 border-purple-500 font-bold my-3">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Title</label>
          <br />
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div>
          <label htmlFor="">Amount</label>
          <br />
          <input type="number" value={amount} onChange={amountChangeHandler} min="0.01" step="0.01" />
        </div>
        <div className="">
          <label htmlFor="">Date</label>
          <br />
          <input type="date" value={date} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" />
        </div>
        <div className="space-x-3">
          <button type="submit" className="text-center border border-purple-900 rounded-xl  bg-purple-900 mt-2 px-3 py-2 text-white">
            Add Expense
          </button>
          <button type="button" onClick={props.stopEditing} className="text-center border border-purple-900 rounded-xl  bg-purple-900 mt-2 px-3 py-2 text-white">
            Cencel
          </button>
        </div>
      </form>
    </div>
  );
}
