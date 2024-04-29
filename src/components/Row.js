import React from 'react';

function Rows({ data }) {
  return (
    <>
      {data.map((item, index) => ( // this maps through the data to render rows
        <tr key={index+1}>
          <td>{item.date}</td> { /*this displays the Date */ }
          <td>{item.description}</td> {/* this displays the description */}
          <td>{item.category}</td> {/* this displays the category */}
          <td>{item.amount}</td> {/* this displays the amount */}
        </tr>
      ))}
    </>
  );
}

export default Rows;