import React from "react";

function Search({handleSearch}) {
  return (
    <div className="">
      <input
        type="text"
        placeholder="Search Your Recent Transactions"
        className="form-control"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;