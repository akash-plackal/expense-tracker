import "./App.css";
import { Balance } from "./components/Balance";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <h1 className="title"> Expense Tracker</h1>
        <Balance />
        <TransactionList />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
