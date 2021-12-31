import Faker from "faker";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpenses/NewExpense";
import { useCallback, useState } from "react";

function App() {
  const DUMMY_EXPENSES = [
    {
      id: Math.random().toString(),
      title: Faker.commerce.productName(),
      amount: Faker.finance.amount(),
      date: Faker.date.past(),
    },
    {
      id: Math.random().toString(),
      title: Faker.name.gender(),
      amount: Faker.finance.amount(),
      date: Faker.date.past(),
    },
    {
      id: Math.random().toString(),
      title: Faker.commerce.productName(),
      amount: Faker.finance.amount(),
      date: Faker.date.past(),
    },
    {
      id: Math.random().toString(),
      title: Faker.commerce.productName(),
      amount: Faker.finance.amount(),
      date: Faker.date.past(),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseDataHandler = useCallback((data) => {
    setExpenses((prev) => [data, ...prev]);
  }, []);

  return (
    <div className="App">
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
