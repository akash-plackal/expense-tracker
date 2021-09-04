import React, { useContext } from "react";
import "./TransactionList.css";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="list-container">
      <h3> Transactions</h3>
      <ul className="list">
        {transactions.map((transaction) => {
          return <Transaction key={transaction.id} transaction={transaction} />;
        })}
      </ul>
    </div>
  );
};
