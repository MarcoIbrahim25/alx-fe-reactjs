import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
import FavoriteToggleButton from "./FavoriteToggleButton";

export default function RecipeDetails() {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p>
        <strong>ID:</strong> {recipe.id}
      </p>
      <FavoriteToggleButton id={recipeId} />
      <EditRecipeForm id={recipeId} />
      <DeleteRecipeButton id={recipeId} />
    </div>
  );
}
