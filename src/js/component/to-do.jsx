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
                {items.map((item) => (
                <li key={item.id}>
                    {item.text}
                    <span><button className="delete-button-todo" onClick={() => deleteItem(item.id)}>X</button></span>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDo;