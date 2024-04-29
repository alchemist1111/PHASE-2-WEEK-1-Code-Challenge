import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transaction, setTransaction] = useState([])
  const [data, setData] = useState("")
  useEffect(() => {
    fetch("http://localhost:3000/transactions?q=" + data)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [data])
  function handleSearch(e) {
    setData(e.target.value)
  }
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList transactions={transaction} />
    </div>
  );
}

export default AccountContainer;