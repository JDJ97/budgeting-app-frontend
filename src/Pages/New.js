import TransactionNewForm from "../Components/TransactionNew";

const New = ({ addTransaction }) => {
  return (
    <div>
      <h2>New Transaction</h2>
      <TransactionNewForm addTransaction={addTransaction} />
    </div>
  );
};

export default New;
