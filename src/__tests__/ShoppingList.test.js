import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";

const testData = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Cookies", category: "Dessert" },
];

test("displays all items when initially rendered", async () => {
  const { container } = render(<ShoppingList items={testData} />);
  await waitFor(() => container.querySelector(".Items"));
  expect(container.querySelector(".Items").children).toHaveLength(testData.length);
});

test("displays only items that match the selected category", async () => {
  const { container } = render(<ShoppingList items={testData} />);

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Dairy" },
  });

  await waitFor(() => container.querySelector(".Items"));
  expect(container.querySelector(".Items").children).toHaveLength(2);

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Dessert" },
  });

  await waitFor(() => container.querySelector(".Items"));
  expect(container.querySelector(".Items").children).toHaveLength(1);
});
