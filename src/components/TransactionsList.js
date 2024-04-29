import React from "react";
import Transaction from "./Transaction";
function TransactionsList({transactions}) {
  const list = transactions.map((item)=>{
    return <Transaction key={item.id} date={item.date} description={item.description} category={item.category} amount={item.amount} />;
  })
  return (
    <table className="table table-striped text-center table-bordered table-hover">
      <tbody>
        <tr>
          <th scope="col">
            Date
          </th>
          <th scope="col">
            Description
          </th>
          <th scope="col">
            Category
          </th>
          <th scope="col">
            Amount
          </th>
        </tr>
        {list}
      </tbody>
    </table>
  );
}

export default TransactionsList;