
function ToDoItem(props){

    return (
        <div onClick={() => (props.clickOnItemDetected(props.id))}>
            <li>{props.itemText}</li>
        </div>
    );
}

export default ToDoItem;