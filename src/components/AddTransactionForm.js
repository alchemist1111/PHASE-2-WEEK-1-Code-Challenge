import React, { useState } from "react";
// import Transaction from "./Transaction";

function AddTransactionForm() {
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")
  function handleSubmit(e) {
    fetch("https://json-server-1-9vxu.onrender.com/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount,
      }),
    });
     alert("added successfully")
  }
  return (  
  <form onSubmit={handleSubmit} className="row g-2 mt-2 mx-auto p-2">
        <div className="col-md-3 d-flex align-items-center">
          <label className="me-2">Date</label>
          <input className="form-control" value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" />
        </div>
          <div className="col-md-3">
          <input className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" />
          </div>
          <div className="col-md-3">
          <input className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" />
          </div>
          <div className="col-md-3">
          <input className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="tn btn-secondary col-md-2 mx-auto" type="submit">
          Add Transaction
        </button>
  </form>
  
  );
}

export default AddTransactionForm;