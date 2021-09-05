import React, { useContext } from "react";
import "./Balance.css";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((trans) => trans.amount);
  const total =
    amount.length > 1
      ? amount.reduce((acc, item) => (acc += item), 0).toFixed(2)
      : amount[0] > 0
      ? amount[0]
      : "";

  const income =
    amount.length > 1
      ? amount
          .filter((amt) => amt > 0)
          .reduce((acc, item) => (acc += item), 0)
          .toFixed(2)
      : amount[0] > 0
      ? amount[0]
      : "";
  const expense =
    amount.length > 1
      ? amount
          .filter((amt) => amt < 0)
          .reduce((acc, item) => (acc += item), 0)
          .toFixed(2) * -1
      : amount[0] < 0
      ? amount[0]
      : "";

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
