import React from 'react';
import { render } from '@testing-library/react';
import ShoppingList from '../components/ShoppingList';

const testData = [
  { name: 'Apple', category: 'fruit' },
  { name: 'Carrot', category: 'vegetable' },
 
];

test("displays all items when initially rendered", () => {
  const { container } = render(<ShoppingList items={testData} />);
  expect(container.querySelector(".Items").children).toHaveLength(testData.length);
});




