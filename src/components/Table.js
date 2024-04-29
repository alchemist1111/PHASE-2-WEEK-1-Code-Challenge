
import React from 'react';
import Row from './Row';

function Table({ data }) {
  return (
    <table className="table table-light table-striped table-hover">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <Row data={data} />
      </tbody>
    </table>
  );
}

export default Table;