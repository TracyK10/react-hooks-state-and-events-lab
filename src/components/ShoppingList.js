import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  
  const shoppingList = itemsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ));
  console.log(shoppingList);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" on onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {shoppingList}
      </ul>
    </div>
  );
}

export default ShoppingList;
