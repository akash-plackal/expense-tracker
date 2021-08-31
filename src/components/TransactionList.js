import React from "react";
import "./TransactionList.css";

export const TransactionList = () => {
  return (
    <div className="list-container">
      <h3> Transactions</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>-$400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
};
