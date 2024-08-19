function Item({ item, onAddToCart }) {
  const handleClick = () => {
    onAddToCart();
  };

  return (
    <li className={item.inCart ? 'in-cart' : ''}>
      {item.name}
      <button onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

