import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../src/components/TodoList";

function setup() {
  render(<TodoList />);
}

test("renders initial demo todos", () => {
  setup();
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Write tests")).toBeInTheDocument();
});

test("adds a new todo", () => {
  setup();
  const input = screen.getByLabelText("todo-input");
  const form = screen.getByLabelText("add-form");
  fireEvent.change(input, { target: { value: "New task" } });
  fireEvent.submit(form);
  expect(screen.getByText("New task")).toBeInTheDocument();
});

test("toggles a todo completed state", () => {
  setup();
  const span = screen.getByText("Learn React");
  const checkbox = screen.getAllByRole("checkbox")[0];
  expect(span).toHaveStyle({ textDecoration: "none" });
  fireEvent.click(checkbox);
  expect(span).toHaveStyle({ textDecoration: "line-through" });
});

test("deletes a todo", () => {
  setup();
  const btn = screen.getByLabelText(/delete-/i);
  fireEvent.click(btn);
  expect(screen.queryByText("Write tests")).not.toBeInTheDocument();
});
