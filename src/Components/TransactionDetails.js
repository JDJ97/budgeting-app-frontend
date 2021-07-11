import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const TransactionDetails = ({ deleteTransaction }) => {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await axios.get(`${API}/transactions/${index}`);
        console.log(res);
        setTransaction(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTransaction();
  }, [index]);

  const handleDelete = () => {
    deleteTransaction(index);
    history.push("/transactions");
  };
  return (
    <div className="d-flex flex-column  align-items-center fontType">
      
    <div className="d-flex flex-column col-7">
      <div className="d-flex justify-content-around">
        <Link to={`/transactions`}>
          <button type="button" className="btn btn-primary btn-sm">
            Back
          </button>
        </Link>
        <Link to={`/transactions/${index}/edit`}>
          <button
            type="button"
            className="btn btn-primary btn-sm"
          >
            Edit
          </button>
        </Link>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      <div>
        <table className="table">
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
              <td>{transaction.name}</td>
              <td>{transaction.amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default TransactionDetails;
