import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import allData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = allData.find((r) => String(r.id) === String(id));
    setRecipe(found || null);
  }, [id]);

  if (!recipe) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="text-gray-600">Recipe not found.</p>
        <Link to="/" className="text-emerald-700 underline mt-2 inline-block">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover rounded-xl shadow"
        />

        <div className="bg-white rounded-xl shadow p-5">
          <h1 className="text-3xl font-bold">{recipe.title}</h1>
          <p className="mt-3 text-gray-600">{recipe.summary}</p>

          <div className="mt-6">
            <Link
              to="/"
              className="inline-block px-4 py-2 rounded-lg border hover:bg-gray-50"
            >
              ← Back
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <section className="bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-semibold">Ingredients</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            {recipe.ingredients?.map((item, idx) => (
              <li key={idx} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-semibold">Steps</h2>
          <ol className="mt-3 list-decimal pl-6 space-y-2">
            {recipe.steps?.map((step, idx) => (
              <li key={idx} className="text-gray-700">
                {step}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}
