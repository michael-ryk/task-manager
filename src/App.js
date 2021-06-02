import React, {useState} from "react";
import ToDoItem from "./ToDoItem";
import CompleteItem from "./CompleteItem";

function App() {

  const [inputText, setInputText] = useState("");   //New Task from user
  const [activeitems, setActiveItems] = useState([]);           //List of all Task items
  const [completeditems, setCompletedItems] = useState([]);           //List of all Task items

  //Handle each click and add character-character
  function handleInputEntry(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(){
    //prevent empty entries
    if (inputText !== "") { 
      setActiveItems((prevItems) => {
        return [...prevItems, inputText];
      });
    }

    //Clear input field
    setInputText("");
  }

  //On click, move active item to completed
  function moveItemToCompleted(id){

    //Update completed list
    setCompletedItems((prevItems) => {
      return [...prevItems, activeitems[id]]
    });

    //Remove item from Active list
    setActiveItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    })
    
  }

  return (
    <div className="main-container">
    
      <div className="heading">
        <h1>ToDo List</h1>
      </div>

      <div className="form">
        <input type="text" className="inputField" onChange={handleInputEntry} value={inputText}/>
        <button onClick={addItem}>Add</button>
      </div>

      <div className="ItemsList">
        <div>
          <h4>Active Tasks</h4>
          <ul>
            {activeitems.map((singleItem, index) => (
              <ToDoItem 
                key={index}
                id={index}
                itemText={singleItem}
                clickOnItemDetected={moveItemToCompleted}
                />
            ))}
          </ul>
        </div>
        <div>
          <h4>Completed Tasks</h4>
          <ul>
            {completeditems.map((singleItem, index) => (
              <CompleteItem
                key={index}
                doneItem={singleItem}
                />
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
}

export default App;
