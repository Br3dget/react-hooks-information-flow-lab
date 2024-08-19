import React from 'react';
import Filter from './Filter';
import Item from './Item';

function ShoppingList({ category, onCategoryChange }) {
  const items = [
    { name: 'Apples', category: 'produce', inCart: false },
    { name: 'Bread', category: 'bakery', inCart: false },
    { name: 'Milk', category: 'dairy', inCart: false },
  ];

  const filteredItems = items.filter((item) => {
    if (category === 'all') return true;
    return item.category === category;
  });

  const handleAddToCart = (item) => {
    
    item.inCart = true;
  };

  return (
    <div>
      <Filter onCategoryChange={onCategoryChange} />
      <ul>
        {filteredItems.map((item) => (
          <Item
            key={item.name}
            item={item}
            onAddToCart={() => handleAddToCart(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;



