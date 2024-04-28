function Button({children}) {
  
  function handleClick() {
    
  }
  return (
    <button onClick={() => handleClick('I have been clicked')} className=" btn btn-primary btn-sm">{children}</button>
  )
}

export default Button;