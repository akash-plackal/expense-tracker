import React from "react";
import "./Transaction.css";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount > 0 ? "+" : "-";
  return (
    <div className="transaction-list">
      <li className="transaction minus">
        <span className="transaction-text">
          <span className="main-text">{transaction.text}</span>
          <span className={transaction.amount > 0 ? "green" : "red"}>
            {transaction.amount > 0 ? "income" : "expense"}
          </span>
        </span>
        <span className="transaction-amount">
          {sign}${Math.abs(transaction.amount)}
        </span>
        {/* <button className="delete-btn">x</button> */}
      </li>
    </div>
  );
};
