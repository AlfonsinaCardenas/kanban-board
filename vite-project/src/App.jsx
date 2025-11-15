import { useState } from 'react';
import './styles.css'

export default function App() {
  
  const[items, setItems] = useState([1, 2]);

  const add = () =>{
    setItems([...items, items.length + 1])
  };

  const remove = () => {
    if(items.length > 0){
      setItems(items.slice(0, -1));
    }
  }

  return (
  /**
   * <div>
        <div class="GroceryList">
        <h1>My Grocery List</h1>
        <ul id="list">
                <li>Soup</li>
                <li>Chicken</li>
                <li>Eggs</li>
                
        </ul> 

  <button onclick="Add()">
    Add
  </button>

  <button onclick="RemoveButton()">
    Remove
    </button>


  </div>
  <script src="button.js"></script>
 
  </div>
   */
 
  <div>
    <h1>Hello</h1>
    <p>Add or Remove</p>

    <ul>
      {items.map((num) => (
        <li key={num}>{num}</li>
      ))}
    </ul>    
    
    <button onClick={add}>Add</button>
    <button onClick={remove}>Remove</button>
  </div>

  );
}
