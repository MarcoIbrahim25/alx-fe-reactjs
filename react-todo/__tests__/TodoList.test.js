import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../src/components/TodoList";

function setup() {
  render(<TodoList />);
}

test("initial render shows demo todos", () => {
  setup();
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Write tests")).toBeInTheDocument();
});

test("can add a new todo", () => {
  setup();
  const input = screen.getByLabelText("todo-input");
  const form = screen.getByLabelText("add-form");
  fireEvent.change(input, { target: { value: "New task" } });
  fireEvent.submit(form);
  expect(screen.getByText("New task")).toBeInTheDocument();
});

test("can toggle a todo between completed and not completed", () => {
  setup();
  const item = screen.getByText("Learn React");
  const liSpan = item;
  const checkbox = screen.getAllByRole("checkbox")[0];
  expect(liSpan).toHaveStyle({ textDecoration: "none" });
  fireEvent.click(checkbox);
  expect(liSpan).toHaveStyle({ textDecoration: "line-through" });
});

test("can delete a todo", () => {
  setup();
  const toDelete = screen.getByText("Write tests");
  const deleteBtn = screen.getByLabelText(/delete-/i);
  fireEvent.click(deleteBtn);
  expect(screen.queryByText("Write tests")).not.toBeInTheDocument();
});
