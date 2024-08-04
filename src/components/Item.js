import React from "react";

function Item({ item }) {
  return (
    <li>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
    </li>
  );
}

export default Item;


