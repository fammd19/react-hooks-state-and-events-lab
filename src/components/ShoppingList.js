import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [filterBy, setFilterBy] = useState("All")

  const itemsToDisplay = items.filter((item) => {
    return filterBy === "All" ? true : filterBy === item.category
    })

  function filterList (event) {
    setFilterBy(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={filterList} name="filter">
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
