import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All")
  const [item , setItems] = useState(items)
  function filterItems(event){
    setCategory(event.target.value)
  }
  
  const itemsToDisplay = item.filter((i)=>{
    if(selectedCategory === "All"){
      return true;
    } else {
      return i.category === selectedCategory;
    }
  })
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={filterItems} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
