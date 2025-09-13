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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="edit-title">Title</label>
        <input
          id="edit-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="edit-desc">Description</label>
        <textarea
          id="edit-desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button type="submit">Save Changes</button>
    </form>
  );
}
