import React, { useCallback } from "react";

export default function ExpenseFilter(props) {
  const dropdownChangeHandler = useCallback(
    (event) => {
      props.onFilterChange(event.target.value);
    },
    [props]
  );

  return (
    <div className="flex items-center justify-between px-4 py-4">
      <label htmlFor="" className=" text-white font-bold text-2xl">
        Filter By Year
      </label>
      <select value={props.selected} className=" px-10 text-xl font-semibold rounded-xl py-3" onChange={dropdownChangeHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
}
