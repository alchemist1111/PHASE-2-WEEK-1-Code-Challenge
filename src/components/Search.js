import React, { useState } from "react";

function Search({ data, setData }) {
  const [searchQuery, setSearchQuery] = useState(""); // this causes the state to store the searchquery as a string

  const handleSearch = (e) => { // this function  handles search input change
    const query = e.target.value.toLowerCase(); //this gets the search query from the input and converts it to lowercase
    setSearchQuery(query); //this updates the state of the search query

    const filteredData = data.filter((item) => //this filters the data in the table based on search query
      Object.values(item).some(
        (value) => typeof value === "string" && value.toLowerCase().includes(query)
      )
    );

    setData(filteredData); // this updates the data with filtered results
  };

  return (
    <form className="row g-2 mt-2 mx-auto p-">
      <div>  
        <input
          type="search"
          className="form-control"
          placeholder="Search for your recent transactions"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div>
        <div className="col-md-3 d-flex align-items-center">
         <label className="me-2">Date</label>
          <input
          className="form-control"
          type="date"
          />
        </div>
        <div className="col-md-3">
          <input
          className="form-control"
          type="text"
          name="description"
          placeholder="Description"
          />
        </div>
        <div className="col-md-3">
            <input
              className="form-control"
              type="text"
              placeholder="Category"
            />
        </div>
        <div className="col-md-3">
        <input
          className="form-control"
          type="text"
          placeholder="Amount"
        />
        </div>
        <button
        className="tn btn-secondary col-md-2 mx-auto" type="submit"
          onClick={(e) => {
            e.preventDefault();
            const newTransaction = {
              date: document.querySelector(".date1").value,
              description: document.querySelector(".description1").value,
              category: document.querySelector(".category1").value,
              amount: document.querySelector(".amount1").value
            };
            setData([...data, newTransaction]);
          }}
        >
          Add Transaction
        </button>
      </div>
    </form>
  );
}

export default Search;