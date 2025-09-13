import useRecipeStore from "./recipeStore";

export default function FavoriteToggleButton({ id }) {
  const favorites = useRecipeStore((s) => s.favorites);
  const addFavorite = useRecipeStore((s) => s.addFavorite);
  const removeFavorite = useRecipeStore((s) => s.removeFavorite);

  const isFav = favorites.includes(id);

  return (
    <button
      onClick={() => (isFav ? removeFavorite(id) : addFavorite(id))}
      style={{
        marginTop: 8,
        padding: "6px 12px",
        borderRadius: 6,
        border: "none",
        background: isFav ? "#b45309" : "#10b981",
        color: "#fff",
        cursor: "pointer",
        fontWeight: 600,
      }}
    >
      {isFav ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}
