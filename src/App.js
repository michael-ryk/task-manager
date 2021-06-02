import React, {useState} from "react";

function App() {

  const [inputText, setInputText] = useState("");   //New Task from user
  const [items, setItems] = useState([]);           //List of all Task items

  //Handle each click and add character-character
  function handleInputEntry(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  //Add item from input to item array
  function addItem(event){
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");                      //Clear input field
  }

  return (
    <div className="main-container">
    
      <div className="heading">
        <h1>Task Manager</h1>
      </div>

      <div className="form">
        <input type="text" className="inputField" onChange={handleInputEntry} value={inputText}/>
        <button onClick={addItem}>Add</button>
      </div>

      <div className="ItemsList">
        <ul>
          {items.map((singleToDoItem) => (
            <li>{singleToDoItem}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
