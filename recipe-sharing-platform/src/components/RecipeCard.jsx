import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transform transition duration-300 overflow-hidden">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{recipe.title}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {recipe.summary}
        </p>
        <Link
          to={`/recipes/${recipe.id}`}
          className="mt-3 inline-block px-4 py-2 text-sm rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
        >
          View Recipe
        </Link>
      </div>
    </article>
  );
}
