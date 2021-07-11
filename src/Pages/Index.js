import Transactions from "../Components/Transactions";
import { useState, useEffect } from "react";
const Index = ({ transactions }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const reduceFunction = async () => {
      const transactionsAmounts = transactions.map((transaction) => {
        return transaction.amount;
      });
      const result = (sum, currentValue) => {
        return sum + currentValue;
      };
      const sumOfTransactions = transactionsAmounts.reduce(result, 0);
      setTotal(sumOfTransactions);
    };
    reduceFunction();
  }, [transactions]);
  return (
    <div>
      <h1>
        Bank Account Total Amount:{" "}
        {total < 50 ? (
          <div class="text-danger">{total}</div>
        ) : (
          <div class="text-success">{total}</div>
        )}{" "}
      </h1>

      <Transactions transactions={transactions} />
    </div>
  );
};

export default Index;
