import TransactionDetails from "../Components/TransactionDetails";

const Show = ({ deleteTransaction }) => {
  return (
    <div>
      <h2>Transaction</h2>
      <TransactionDetails deleteTransaction={deleteTransaction} />
    </div>
  );
};

export default Show;
