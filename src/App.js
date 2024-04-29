
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import Search from "./components/Search";

function App() {
  const [tableData, setTableData] = useState([
    {
      "date": "2024-04-01",
      "description": "Paycheck from work",
      "category": "Income",
      "amount": 100000
    },
    {
      "date": "2024-04-04",
      "description": "Chicken Inn",
      "category": "Fast food",
      "amount": 1200
    },
    {
      "date": "2024-04-06",
      "description": "Payed house rent",
      "category": "Rent",
      "amount": 15000
    },
    {
      "date": "2024-04-07",
      "description": "Payed water bill",
      "category": "Utility",
      "amount": 1200
    },
    {
      "date": "2024-04-08",
      "description": "Paid electricity bill",
      "category": "Utility",
      "amount": 900
    },
    {
      "date": "2024-04-09",
      "description": "Fueled vehicle",
      "category": "Fuel",
      "amount": 8000
    },
    {
      "date": "2024-04-10",
      "description": "Send money to Joshua",
      "category": "Debt",
      "amount": 5000
    },
    {
      "date": "2024-04-11",
      "description": "Car service",
      "category": "Service",
      "amount": 10000
    },
    {
      "date": "2024-04-12",
      "description": "Paid school fees",
      "category": "School",
      "amount": 12000
    },
    {
      "date": "2024-04-13",
      "description": "Bought a TV set",
      "category": "Entertainment",
      "amount": 24000
    }
  ]);

  const [filteredData, setFilteredData] = useState(tableData); // this is the state to hold filtered data

  const handleSearch = (filteredData) => { //this function handles the search and update filtered data
    setFilteredData(filteredData); // this state updates filtered data
    setTableData(tableData);
  };

  return (
    <div className="container">
      <div>
          <Header />
          <Search data={tableData} setData={handleSearch} /> {/* this renders the Searchbar component */}
          <Table data={filteredData} /> {/* this renders the MyTable component with filtered data */}
       </div>
    </div>
    
  );
}

export default App;