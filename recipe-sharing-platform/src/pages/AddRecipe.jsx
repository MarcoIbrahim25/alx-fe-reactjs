import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddRecipe() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    summary: "",
    image: "",
  });
  const [errors, setErrors] = useState({});

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Title is required";
    if (!form.summary.trim()) e.summary = "Summary is required";
    if (!form.image.trim()) {
      e.image = "Image URL is required";
    } else if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i.test(form.image)) {
      e.image = "Please provide a valid image URL (jpg, png, gif, webp)";
    }
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    // For this task we just log + navigate (persistence comes later)
    const newRecipe = {
      id: Date.now(),
      title: form.title.trim(),
      summary: form.summary.trim(),
      image: form.image.trim(),
    };
    console.log("Submitted recipe:", newRecipe);
    alert("Recipe submitted! (Check the console.)");

    navigate("/"); // back to Home
  };

  const Field = ({ label, name, type="text", textarea=false, placeholder }) => (
    <label className="block">
      <span className="block text-sm font-medium">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          value={form[name]}
          onChange={onChange}
          rows={4}
          placeholder={placeholder}
          className="mt-1 w-full rounded-xl border bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={form[name]}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-1 w-full rounded-xl border bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      )}
      {errors[name] && <span className="text-sm text-red-600">{errors[name]}</span>}
    </label>
  );

  return (
    <section className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold">Add New Recipe</h1>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <Field label="Title" name="title" placeholder="e.g., Spaghetti Carbonara" />
        <Field
          label="Summary"
          name="summary"
          textarea
          placeholder="Short description of the recipe..."
        />
        <Field
          label="Image URL"
          name="image"
          placeholder="https://example.com/recipe.jpg"
        />

        {/* Live preview */}
        {form.image && !errors.image && (
          <div className="mt-2">
            <span className="block text-sm text-gray-500 mb-1">Image preview:</span>
            <img
              src={form.image}
              alt="preview"
              className="w-full h-56 object-cover rounded-xl border"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-5 py-2 rounded-xl border text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
