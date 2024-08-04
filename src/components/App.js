import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([
    
  ]);

  function handleDarkModeClick() {
    setDarkMode((prevMode) => !prevMode);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const filteredItems = items.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList
        items={filteredItems}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default App;

