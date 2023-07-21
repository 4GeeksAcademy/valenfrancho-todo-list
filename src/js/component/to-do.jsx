import React, {useState} from "react";

const ToDo = () => {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    function addItem(e) {
        e.preventDefault();
    
        if (!newItem) {
          alert("Enter a task");
          return;
        }
    
        const item = {
          id: Date.now(),
          text: newItem,
        };
    
        setItems((oldList) => [...oldList, item]);
        setNewItem("");
      }
    
      function deleteItem(id) {
        setItems((oldList) => oldList.filter((item) => item.id !== id));
      }

    return (
        <div>
            <h1 className="to-do-title">MY TO-DOs</h1>
            <form className="to-do-list" onSubmit={addItem}>
                <input type="text" 
                placeholder="What needs to be done?" 
                value={newItem}
                onChange={e => setNewItem(e.target.value)}/>
            </form>
            <ul className="to-do-list">
            {items.length === 0 ? ( // Check if the array is empty
          <li className="placeholder-task">Nothing to do yet, add a new task</li>
        ) : (
            items.map((item) => (
                <li className="actual-tasks" key={item.id}>
                    {item.text}
                    <button onClick={() => deleteItem(item.id)}><svg xmlns="http://www.w3.org/2000/svg" height="15px" fill="darkgrey" viewBox="0 0 448 512" style={{ fill: "darkgrey" }} onMouseOver={(e) => (e.currentTarget.style.fill = "darkred")} onMouseOut={(e) => (e.currentTarget.style.fill = "darkgrey")}><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></button>
                </li>
                )))
            }
            </ul>
            <div className="to-do-list">
              <p className="pending-task-number">Pending tasks: {items.length}</p>
            </div>
        </div>
    );
};

export default ToDo;