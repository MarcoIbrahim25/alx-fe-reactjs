// src/App.jsx
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import "./App.css";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f5f7fb",
        padding: 16,
      }}
    >
      <div
        style={{
          width: 480,
          maxWidth: "100%",
          background: "#fff",
          padding: 20,
          borderRadius: 12,
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: 16, textAlign: "center" }}>
          Recipe Sharing App
        </h1>
        <AddRecipeForm />
        <RecipeList />
      </div>
    </div>
  );
}
