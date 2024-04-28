import {useState} from 'react';

function Form({submitData}) {
  const [formData, setFormData] = useState({
    date: " ",
    description: " ",
    category: " ",
    amount: " "
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData({
     ...formData,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitData(formData);
    setFormData({
      date: " ",
      description: " ",
      category: " ",
      amount: " "
    })
  }

  return (
    <form className="row g-3 mt-2 mx-auto p-2" onSubmit={handleSubmit}>
      <div className="col-md-3 d-flex align-items-center">
        <label className="me-2">
          Date
        </label>
        <input 
        type="date" 
        className="form-control" 
        name="date" 
        value={formData.date} 
        requred 
        onChange={handleChange}
        />
      </div>
      <div className="col-md-2">
        <input 
        type="text" 
        className="form-control" 
        name="description" 
        placeholder="Description" 
        value={formData.description} 
        requred 
        onChange={handleChange}
        />
      </div>
      <div className="col-md-2">
        <input 
        type="text" 
        className="form-control" 
        name="category" 
        placeholder="Category" 
        value={formData.category} 
        requred 
        onChange={handleChange}
        />
      </div>
      <div className="col-md-2">
        <input 
        type="number" 
        className="form-control" 
        name="amount" 
        placeholder="Amount" 
        value={formData.amount} 
        requred 
        onChange={handleChange}
        />
      </div>
      <button 
      type="submit" 
      className="btn btn-secondary col-md-2 mx-auto">
        Add Transaction
      </button>
    </form>
  )
}

export default Form;