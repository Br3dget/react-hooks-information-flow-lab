import React, { useState } from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState('all');

  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList category={category} onCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;

