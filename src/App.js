import "./App.css";
import { Balance } from "./components/Balance";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <div className="App">
      <h1 className="title"> Expense Tracker</h1>
      <Balance />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
