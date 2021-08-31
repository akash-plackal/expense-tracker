import React from "react";
import "./Balance.css";

export const Balance = () => {
  return (
    <div className="container">
      <div className="Balance">
        <h4> Balance </h4>
        <h1>₹ 260.00</h1>
      </div>

      <div className="exp-container">
        <div>
          <p className="money plus">Income</p>
          <h4>₹ 100.00</h4>
        </div>
        <div>
          <p className="money minus">Expense</p>
          <h4>₹ 80.00</h4>
        </div>
      </div>
    </div>
  );
};
