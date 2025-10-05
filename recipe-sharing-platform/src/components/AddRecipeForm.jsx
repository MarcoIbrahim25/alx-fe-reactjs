import { useState } from "react";

export default function AddRecipeForm() {
  const [form, setForm] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Title is required";
    const ing = form.ingredients
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
    const stp = form.steps
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
    if (ing.length < 2) e.ingredients = "Add at least two ingredients";
    if (stp.length < 1) e.steps = "Add at least one step";
    return { e, ing, stp };
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { e, ing, stp } = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    const payload = {
      id: Date.now(),
      title: form.title.trim(),
      ingredients: ing,
      steps: stp,
    };
    console.log("Submitted recipe:", payload);
    alert("Recipe submitted (check console).");
    setForm({ title: "", ingredients: "", steps: "" });
  };

  const Field = ({ label, name, textarea = false, placeholder }) => (
    <label className="block">
      <span className="block text-sm font-medium">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          value={form[name]}
          onChange={handleChange}
          rows={5}
          placeholder={placeholder}
          autoComplete="off"
          className="mt-1 w-full rounded-xl border bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={form[name]}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete="off"
          className="mt-1 w-full rounded-xl border bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      )}
      {errors[name] && (
        <span className="text-sm text-red-600">{errors[name]}</span>
      )}
    </label>
  );

  return (
    <section className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl md:text-3xl font-bold">Add New Recipe</h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          <Field
            label="Title"
            name="title"
            placeholder="e.g., Spaghetti Carbonara"
          />
          <Field
            label="Ingredients (one per line)"
            name="ingredients"
            textarea
            placeholder={"200g spaghetti\n2 eggs\n..."}
          />
          <Field
            label="Preparation Steps (one per line)"
            name="steps"
            textarea
            placeholder={"Boil pasta\nMix sauce\n..."}
          />
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setForm({ title: "", ingredients: "", steps: "" })}
              className="px-5 py-2 rounded-xl border text-gray-700 hover:bg-gray-100"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
