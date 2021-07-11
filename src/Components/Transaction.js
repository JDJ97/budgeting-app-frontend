import { Link } from "react-router-dom";

const Transaction = ({ transaction, index }) => {
  return (
    <div>
      <table className="table fontType">
        <thead className="thead-dark">
          <tr>
            <th>Date</th>
            <th>Transaction </th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{transaction.date}</th>
            <td>
              <Link to={`/transactions/${index}`}>{transaction.name}</Link>
            </td>
            <td>{transaction.amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
