function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className=" border rounded-lg bg-gray-900">
      <div className="font-semibold">{month}</div>
      <div>{year}</div>
      <div className="font-bold text-2xl">{day}</div>
    </div>
  );
}

export default ExpenseDate;
