import { useState } from "react";

const demo = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Write tests", completed: true },
];

export default function Todolist() {
  const [todos, setTodos] = useState(demo);
  const [text, setText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    setTodos((list) => [
      { id: Date.now(), text: t, completed: false },
      ...list,
    ]);
    setText("");
  };

  const toggleTodo = (id) =>
    setTodos((list) =>
      list.map((td) =>
        td.id === id ? { ...td, completed: !td.completed } : td
      )
    );

  const deleteTodo = (id) =>
    setTodos((list) => list.filter((td) => td.id !== id));

  return (
    <div>
      <h2>Todolist</h2>
      <form onSubmit={addTodo} aria-label="add-form">
        <input
          aria-label="todo-input"
          placeholder="Add a new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <label>
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTodo(t.id)}
                aria-label={`toggle-${t.id}`}
              />
              <span
                data-testid={`text-${t.id}`}
                style={{
                  textDecoration: t.completed ? "line-through" : "none",
                }}
              >
                {t.text}
              </span>
            </label>
            <button
              aria-label={`delete-${t.id}`}
              onClick={() => deleteTodo(t.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
