import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <article className="bg-white rounded-2xl border shadow-sm overflow-hidden transition hover:shadow-md hover:-translate-y-0.5">
      <img src={recipe.image} alt={recipe.title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{recipe.title}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{recipe.summary}</p>
        <div className="mt-3">
          <Link
            to={`/recipes/${recipe.id}`}
            className="px-4 py-2 text-sm font-medium rounded-xl bg-emerald-600 text-white hover:bg-emerald-700"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </article>
  );
}
