import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

export default function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  function handleClick() {
    deleteRecipe(id);
    navigate("/");
  }

  return (
    <button
      onClick={handleClick}
      style={{
        marginTop: 12,
        padding: "8px 14px",
        borderRadius: 6,
        border: "none",
        background: "#ef4444",
        color: "#fff",
        cursor: "pointer",
        fontWeight: 600,
      }}
    >
      Delete Recipe
    </button>
  );
}
