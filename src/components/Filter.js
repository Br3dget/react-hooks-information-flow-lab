// src/components/Filter.js
import React from 'react';

function Filter({ onCategoryChange }) {
  // Ensure `onCategoryChange` is a function before using it
  function handleChange(event) {
    if (typeof onCategoryChange === 'function') {
      onCategoryChange(event.target.value);
    } else {
      console.error("onCategoryChange prop is not a function");
    }
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">All</option>
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
        {/* Add other categories as needed */}
      </select>
    </div>
  );
}

export default Filter;


