import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

export default function RecipeList() {
  const recipes = useRecipeStore((s) => s.recipes);
  const filteredRecipes = useRecipeStore((s) => s.filteredRecipes);
  const searchTerm = useRecipeStore((s) => s.searchTerm);

  const toShow = searchTerm ? filteredRecipes : recipes;

  if (!toShow.length) {
    return (
      <p style={{ color: "#555" }}>
        {searchTerm
          ? "No matches found."
          : "No recipes yet… Add your first recipe using the form above 👆"}
      </p>
    );
  }

  return (
    <div style={{ textAlign: "left" }}>
      {toShow.map((recipe) => (
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
          <h3 style={{ margin: "0 0 6px", fontWeight: 600 }}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p style={{ margin: 0, color: "#444" }}>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}
