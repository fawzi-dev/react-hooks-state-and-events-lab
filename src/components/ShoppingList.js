import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedChoice, setChoice] = useState('All');


  const handleOnChange = (e) => {
    setChoice(e.target.value);
  }

  const filteredList = selectedChoice == 'All' ? items : items.filter((item) => item.category === selectedChoice);


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedChoice} onChange={handleOnChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ),)}
      </ul>
    </div>
  );
}

export default ShoppingList;
