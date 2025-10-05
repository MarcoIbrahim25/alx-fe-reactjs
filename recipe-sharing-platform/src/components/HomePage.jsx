import { useEffect, useState } from "react";
import data from "../data.json";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <section className="container mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Discover Recipes</h1>
        <p className="text-gray-600 mt-1">
          Browse tasty ideas and get inspired.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transform transition duration-300 overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600 mt-2 line-clamp-2">
                {recipe.summary}
              </p>
              <button className="mt-3 inline-block px-4 py-2 text-sm rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
