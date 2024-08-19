import React from 'react';

function Filter({ onCategoryChange }) {
  const categories = ['all', 'produce', 'bakery', 'dairy'];

  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default Filter;


