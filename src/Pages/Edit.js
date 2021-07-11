import TransactionEdit from "../Components/TransactionEdit";

const Edit = ({ updateTransaction }) => {
  return (
    <section>
      <h2>Edit The Transaction</h2>
      <TransactionEdit updateTransaction={updateTransaction} />
    </section>
  );
};

export default Edit;
