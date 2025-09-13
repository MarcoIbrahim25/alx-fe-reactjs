import useRecipeStore from "./recipeStore";

export default function FavoritesList() {
  const favorites = useRecipeStore((s) => s.favorites);
  const recipes = useRecipeStore((s) => s.recipes);

  const items = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  if (!items.length) return <p>No favorites yet.</p>;

  return (
    <div style={{ textAlign: "left" }}>
      <h2 style={{ margin: "8px 0 12px" }}>My Favorites</h2>
      {items.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            padding: "12px",
            marginBottom: "10px",
            border: "1px solid #e5e5e5",
            borderRadius: 8,
            background: "#fff8f1",
          }}
        >
          <h3 style={{ margin: "0 0 6px" }}>{recipe.title}</h3>
          <p style={{ margin: 0, color: "#444" }}>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}
