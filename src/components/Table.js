
import React from 'react';
import Rows from './Row';

function MyTable({ data }) {
  return (
    <table className="table table-light table-striped table-hover" >
      <thead>
        <tr className="">
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody className="table1">
        <Rows data={data} />
      </tbody>
    </table>
  );
}

export default MyTable;