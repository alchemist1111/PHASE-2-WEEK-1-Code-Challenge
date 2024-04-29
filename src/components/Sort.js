import React, { useState } from 'react';

function Sort({ data }) {
  const [sortData, setSortData] = useState('#'); // Default sorting option is '#'

  function handleSort(event) {
    const selectedOption = event.target.value;

    if (selectedOption === 'date') {
      data.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (selectedOption === 'description') {
      data.sort((a, b) => a.description.localeCompare(b.description));
    } else if (selectedOption === 'category') {
      data.sort((a, b) => a.category.localeCompare(b.category));
    } else if (selectedOption === 'amount') {
      data.sort((a, b) => a.amount - b.amount);
    } else {
      // Default sorting option
      data.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setSortData(selectedOption);
  }

  return (
    <select className="form-select mt-3" aria-label="Default select example" value={sortData} onChange={handleSort}>
      <option value="#">Sort by</option>
      <option value="date">Date</option>
      <option value="description">Description</option>
      <option value="category">Category</option>
      <option value="amount">Amount</option>
    </select>
  );
}

export default Sort;
