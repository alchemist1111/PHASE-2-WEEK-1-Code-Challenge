import (useState) from 'react';
function Sort() {
  const [sortData, setSortData] = useState(null);

  function handleSort(a, b) {
    if () {

    }
  }
  return(
    <select className="form-select mt-3" arial-label="Default select example" value={} onChange={handleSort}>
      <option value="#">Sort by</option>
      <option value="date">Date</option>
      <option value="description">Description</option>
      <option value="category">Category</option>
      <option value="amount">Amount</option>
    </select>
  )
}
export default Sort;