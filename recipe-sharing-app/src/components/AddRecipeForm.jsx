// src/components/AddRecipeForm.jsx
import { useState } from "react";
import useRecipeStore from "../store/recipeStore";

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    addRecipe({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    });

    setTitle("");
    setDescription("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginBottom: 16, textAlign: "left" }}
    >
      <div style={{ marginBottom: 8 }}>
        <label htmlFor="title" style={{ display: "block", marginBottom: 4 }}>
          Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Enter recipe title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            width: "100%",
            padding: 8,
            border: "1px solid #ddd",
            borderRadius: 6,
          }}
        />
      </div>

      <div style={{ marginBottom: 8 }}>
        <label htmlFor="desc" style={{ display: "block", marginBottom: 4 }}>
          Description
        </label>
        <textarea
          id="desc"
          placeholder="Enter recipe description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          style={{
            width: "100%",
            padding: 8,
            border: "1px solid #ddd",
            borderRadius: 6,
            resize: "vertical",
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          padding: "8px 14px",
          borderRadius: 6,
          border: "none",
          background: "#2563eb",
          color: "#fff",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        Add Recipe
      </button>
    </form>
  );
}
