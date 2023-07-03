import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, subText] = useState("");
  const [amount, subAmount] = useState(0);
  const [clearInput, setClearInput] = useState(false);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setClearInput(true);
  };

  const clearFields = () => {
    subText("");
    subAmount(0);
    setClearInput(false);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={clearInput ? "" : text}
            onChange={(e) => subText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={clearInput ? 0 : amount}
            onChange={(e) => subAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" onClick={clearFields}>
          Add Transaction
        </button>
      </form>
    </>
  );
};
