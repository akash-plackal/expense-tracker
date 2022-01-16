import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AddReducer";

const defaultState = { transactions: [] };

const initialState =
  JSON.parse(localStorage.getItem("expenses")) || defaultState;

export const GlobalContext = createContext(initialState);

// Actions

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState); // AppReducer in another file

  useEffect(() => {
    window.localStorage.setItem("expenses", JSON.stringify(state));
  }, [state]);

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
