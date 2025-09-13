import useRecipeStore from "./recipeStore";

export default function SearchBar() {
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(event) => setSearchTerm(event.target.value)}
      style={{
        width: "100%",
        padding: 8,
        border: "1px solid #ddd",
        borderRadius: 6,
        marginBottom: 12,
      }}
    />
  );
}
