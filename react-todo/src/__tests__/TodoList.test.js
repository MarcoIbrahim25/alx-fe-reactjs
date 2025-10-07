import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

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
  const li = screen.getByText("Write tests").closest("li");
  expect(li).toBeInTheDocument();
  const delBtn = within(li).getByRole("button", { name: /delete-/i });
  fireEvent.click(delBtn);
  expect(screen.queryByText("Write tests")).not.toBeInTheDocument();
});
