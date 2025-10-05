import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import data from "../data.json"; // static mock data

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // mimic async fetch from local JSON
    // (with real API, replace with fetch(...) then setRecipes)
    setRecipes(data);
  }, []);

  return (
    <section className="container mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Discover Recipes</h1>
        <p className="text-gray-600 mt-1">
          Browse tasty ideas and get inspired.
        </p>
      </header>

      {/* Responsive grid: 1 / 2 / 3 cols */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>

      {recipes.length === 0 && (
        <p className="text-gray-500 mt-8">No recipes to show.</p>
      )}
    </section>
  );
}
