import React, { useContext } from "react";
import "./Balance.css";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((trans) => trans.amount);
  const total = amount.reduce((acc, item) => (acc += item)).toFixed(2);

  const income = amount
    .filter((amt) => amt > 0)
    .reduce((acc, item) => (acc += item))
    .toFixed(2);
  const expense =
    amount
      .filter((amt) => amt < 0)
      .reduce((acc, item) => (acc += item))
      .toFixed(2) * -1;

  return (
    <div className="container">
      <div className="Balance">
        <h4> Balance </h4>
        <h1>₹{total}</h1>
      </div>

      <div className="exp-container">
        <div>
          <p className="money plus">Income</p>
          <h4>₹ {income}</h4>
        </div>
        <div>
          <p className="money minus">Expense</p>
          <h4>₹ {expense}</h4>
        </div>
      </div>
    </div>
  );
};
