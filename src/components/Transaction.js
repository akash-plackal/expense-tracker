import React, { useContext } from "react";
import "./Transaction.css";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount > 0 ? "+" : "-";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <div className="transaction-list">
      <li className="transaction">
        <span className="transaction-text">
          <span className="main-text">{transaction.text}</span>
          <span className={transaction.amount > 0 ? "green" : "red"}>
            {transaction.amount > 0 ? "income" : "expense"}
          </span>
        </span>
        <span className="transaction-amount">
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-btn"
        >
          {" "}
          X{" "}
        </button>
      </li>
    </div>
  );
};
