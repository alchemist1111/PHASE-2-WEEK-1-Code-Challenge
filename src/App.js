import React from "react";
import "./App.css";
import AccountContainer from "./components/AccountContainer";

function App() {
  return (
    <div className="container">
      <div className="container-fluid" style={{ background: "linear-gradient(to right, #4B0082, #800080)", color: "#FFFFFF"}}>
        <p className="isplay-4 text-center font-weight-bold">The Royal Bank of Flatiron</p>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;