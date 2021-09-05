import React, { createContext, useReducer } from "react";
import AppReducer from "./AddReducer";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

export const GlobalContext = createContext(initialState);

// Actions

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState); // AppReducer in another file

  const deleteTransaction = (id) =>
    dispatch({ type: "deleteTransaction", payload: id });
  const addTransaction = (transaction) =>
    dispatch({ type: "addTransaction", payload: transaction });

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
