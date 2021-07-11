import Transaction from "./Transaction";

const Transactions = ({ transactions }) => {
  return (
    <div className="d-flex flex-column  align-items-center fontType">
    <ul className="col-7 d-flex flex-column">
      {transactions.map((transaction, index) => {
        return (
          <Transaction key={index} transaction={transaction} index={index} />
        );
      })}
    </ul>
    </div>
  );
};

export default Transactions;
