import { Link, useParams } from "react-router-dom";
import data from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find(r => String(r.id) === String(id));

  if (!recipe) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-gray-600">Recipe not found.</p>
        <Link to="/" className="text-emerald-700 underline mt-2 inline-block">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-5xl mx-auto px-4 py-10 grid gap-6 lg:grid-cols-2">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-80 object-cover rounded-2xl"
      />
      <div>
        <h1 className="text-3xl font-bold">{recipe.title}</h1>
        <p className="mt-2 text-gray-600">{recipe.summary}</p>

        {/* Placeholder for future fields (time, servings, ingredients, steps) */}
        <div className="mt-6 flex gap-3">
          <Link
            to="/"
            className="px-4 py-2 rounded-xl border text-gray-700 hover:bg-gray-100"
          >
            ← Back
          </Link>
        </div>
      </div>
    </article>
  );
}
