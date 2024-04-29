import React, { useState } from "react";

function Search({ data, setData }) {
  // State variables for search query and new transaction fields
  const [searchQuery, setSearchQuery] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  // Handler for search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredData = data.filter((item) =>
      Object.values(item).some(
        (value) => typeof value === "string" && value.toLowerCase().includes(query)
      )
    );

    setData(filteredData);
  };

  // Handler for adding a new transaction
  const handleAddTransaction = (e) => {
    e.preventDefault();
    // Creating a new transaction object
    const newTransaction = {
      date: date,
      description: description,
      category: category,
      amount: amount
    };
    // Updating the data with the new transaction
    setData([...data, newTransaction]);
    // Clearing the input fields after adding the transaction
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  };

  return (
    <form className="row g-2 mt-2 mx-auto p-2">
      <div className="col">
        <input
          type="search"
          className="form-control"
          placeholder="Search for your recent transactions"
          name="search"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="row align-items-center">
        <div className="col-md-3">
          <input
            className="form-control"
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            placeholder="Category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            placeholder="Amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          className="btn btn-secondary col-md-2 mx-auto"
          type="submit"
          onClick={handleAddTransaction}
        >
          Add Transaction
        </button>
      </div>
    </form>
  );
}

export default Search;
