import React from "react";
import Expenses from "./components/Expenses/Expenses";

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
      amount: 892,
      date: new Date("2023, 01, 28"),
    },
  ];

  return (
    <div>
      <h2>Let's Go!!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
