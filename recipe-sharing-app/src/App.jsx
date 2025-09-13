import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

export default function App() {
  return (
    <BrowserRouter>
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
            width: 620,
            maxWidth: "100%",
            background: "#fff",
            padding: 20,
            borderRadius: 12,
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h1 style={{ marginTop: 0, marginBottom: 16, textAlign: "center" }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Recipe Sharing App
            </Link>
          </h1>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar />
                  <AddRecipeForm />
                  <RecipeList />
                  <FavoritesList />
                  <RecommendationsList />
                </>
              }
            />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
