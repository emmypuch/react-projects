import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 200.72,
      date: new Date("2020, 01, 24"),
    },
    {
      id: "e2",
      title: "Health Insurance",
      amount: 234.2,
      date: new Date("2021, 08, 14"),
    },
    {
      id: "e3",
      title: "Food",
      amount: 546.12,
      date: new Date("2022, 10, 13"),
    },
    {
      id: "e4",
      title: "Utility",
      amount: 892.52,
      date: new Date("2023, 01, 28"),
    },
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
