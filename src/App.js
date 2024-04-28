import Header from "./components/header";
import Search from "./components/search";
import Form from "./components/form";
// import Sort from "./components/sort";
import Table from "./components/table";
import { useState } from "react";
function App() {
 
  const transactions = [
    {
      date: '04/27/2024',
      description: 'Income from Work',
      category: 'Income',
      amount: '500,000'
    },
    {
      date: '04/28/2024',
      description: 'Pay Rent',
      category: 'rent',
      amount: '50,000'
    },
    {
      date: '04/29/2024',
      description: 'Did a monthly shopping',
      category: 'Shopping',
      amount: '20,000'
    },
    {
      date: '04/30/2024',
      description: 'Paid for wifi',
      category: 'Wifi',
      amount: '6,000'
    },
    {
      date: '04/31/2024',
      description: 'Paid for electricity and water bills',
      category: 'Utilities',
      amount: '8,000'
    },
    {
      date: '04/31/2024',
      description: 'Bought some wearables',
      category: 'Clothes and Shoes',
      amount: '15,000'
    },
    {
      date: '04/31/2024',
      description: 'Paid School fees',
      category: 'Schhol fees',
      amount: '70,000'
    }
    
  ];
  
  const [data, setData] = useState(transactions);
  function submitData(formData) {
    setData((data) =>[...data, formData]);
  }

  function handleDelete(id) {
     const newData = data.filter((transactions, index) => {
      return index !== id && transactions.index;
     })
     setData(newData);
  }

  return (
    <div className="container">
      <Header />
      <Search />
      <Form onSubmitData={submitData}/>
      <Table data = {handleDelete} />
    </div>
  );
}

export default App;
