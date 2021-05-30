import React from "react";
import './App.css';

function App() {
  return (
    <div className="main-container">
    
      <div className="heading">
        <h1>Task Manager</h1>
      </div>

      <div className="form">
        <input type="text"/>
        <button>Add</button>
      </div>

      <div className="ItemsList">
        <ul>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
        </ul>
      </div>

    </div>
  );
}

export default App;
