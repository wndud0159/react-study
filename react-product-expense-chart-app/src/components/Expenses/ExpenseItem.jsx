import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(props.title);
  // };

  return (
    <div className=" text-center border border-gray-700 bg-gray-700 flex  items-center justify-center text-white px-3 py-2 rounded-xl mb-3">
      <div className=" flex-1">
        <ExpenseDate date={props.date} />
      </div>
      <div className="flex  justify-between w-10/12 pl-3 items-center">
        <div className="text-xl font-bold">{props.title}</div>
        <div>
          <div className="border bg-purple-900 px-3 py-2 rounded-xl font-bold ">${props.amount}</div>
          {/* <button onClick={clickHandler}>Click Title</button> */}
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
