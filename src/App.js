import { Route, Switch } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import FourOFour from "./Pages/FourOFour";
import Edit from "./Pages/Edit";

import "./App.css";

import { apiURL } from "./util/apiURL";
const API = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);
  const fetchTransactions = async () => {
    try {
      console.log(API)
      const res = await axios.get(`${API}/transactions`);
      setTransactions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const addTransaction = async (newTransaction) => {
    try {
      const res = await axios.post(`${API}/transactions`, newTransaction);
      setTransactions((prevTransactions) => [...prevTransactions, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTransaction = async (index) => {
    try {
      await axios.delete(`${API}/transactions/${index}`);
      const dummyState = [...transactions];
      dummyState.splice(index, 1);
      setTransactions(dummyState);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTransaction = async (transactionToUpdate, index) => {
    try {
      await axios.put(`${API}/transactions/${index}`, transactionToUpdate);
      const newTransactions = [...transactions];
      newTransactions[index] = transactionToUpdate;
      setTransactions(newTransactions);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/transactions"}>
          <Index transactions={transactions} />
        </Route>
        <Route path={"/transactions/new"}>
          <New addTransaction={addTransaction} />
        </Route>
        <Route exact path={"/transactions/:id"}>
          <Show deleteTransaction={deleteTransaction} />
        </Route>
        <Route exact path={"/transactions/:id/edit"}>
          <Edit updateTransaction={updateTransaction} />
        </Route>
        <Route path="*">
          <FourOFour />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
