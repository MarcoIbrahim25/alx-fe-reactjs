import { useEffect, useState } from "react";
import useRecipeStore from "./recipeStore";

export default function EditRecipeForm({ id }) {
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title || "");
      setDescription(recipe.description || "");
    }
  }, [recipe]);

  function handleSubmit(e) {
    e.preventDefault();
    updateRecipe(id, { title: title.trim(), description: description.trim() });
  }

  if (!recipe) return null;

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
      <div style={{ marginBottom: 8 }}>
        <label
          htmlFor="edit-title"
          style={{ display: "block", marginBottom: 4 }}
        >
          Title
        </label>
        <input
          id="edit-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: 8,
            border: "1px solid #ddd",
            borderRadius: 6,
          }}
        />
      </div>
      <div style={{ marginBottom: 8 }}>
        <label
          htmlFor="edit-desc"
          style={{ display: "block", marginBottom: 4 }}
        >
          Description
        </label>
        <textarea
          id="edit-desc"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
        Save Changes
      </button>
    </form>
  );
}
