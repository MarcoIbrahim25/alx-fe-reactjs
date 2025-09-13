import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

export default function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  function handleDelete() {
    deleteRecipe(id);
    navigate("/");
  }

  return <button onClick={handleDelete}>Delete Recipe</button>;
}
