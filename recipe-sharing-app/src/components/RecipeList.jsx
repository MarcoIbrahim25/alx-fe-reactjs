// src/components/RecipeList.jsx
import useRecipeStore from "./recipeStore";

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  if (!recipes.length) {
    return (
      <p style={{ color: "#555" }}>
        No recipes yet… Add your first recipe using the form above 👆
      </p>
    );
  }

  return (
    <div style={{ textAlign: "left" }}>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            padding: "12px",
            marginBottom: "10px",
            border: "1px solid #e5e5e5",
            borderRadius: 8,
            background: "#fafafa",
          }}
        >
          <h3 style={{ margin: "0 0 6px", fontWeight: 600 }}>{recipe.title}</h3>
          <p style={{ margin: 0, color: "#444" }}>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}
