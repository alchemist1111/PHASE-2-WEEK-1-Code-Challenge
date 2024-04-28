import Row from './Row';

function Table(data, handleDelete) {
    inputData = data.map()
  }
return (
  <>
   <table className="table table-striped table-hover table-bordered">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Description</th>
        <th scope="col">Category</th>
        <th scope="col">Amount</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
        <tbody>
          {
             transactions.map((transactions, index)=> {
              return <Row key={index}transaction={transactions}/>
  
            })
          }
         
        </tbody> 
  </table>
  </>
  
)
}

export default Table;