import React from 'react';
function Row() {
  

  return (
    <>
      <tr>
          <td>date</td>
          <td>description</td>
          <td>category</td>
          <td>amount</td>
          <td>
            <button className="btn btn-primary" onClick={()=>handleDelete(id)}>delete</button>
          </td>
        </tr>
    </>
  )
 
}

export default Row;


