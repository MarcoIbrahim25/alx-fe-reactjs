import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: "",
  addRecipe: (recipe) => set((s) => ({ recipes: [...s.recipes, recipe] })),
  deleteRecipe: (id) =>
    set((s) => ({
      recipes: s.recipes.filter((r) => r.id === id),
      filteredRecipes: s.filteredRecipes.filter((r) => r.id !== id),
    })),
  updateRecipe: (id, updates) =>
    set((s) => {
      const recipes = s.recipes.map((r) =>
        r.id === id ? { ...r, ...updates } : r
      );
      const filteredRecipes = s.filteredRecipes.map((r) =>
        r.id === id ? { ...r, ...updates } : r
      );
      return { recipes, filteredRecipes };
    }),
  setRecipes: (recipes) => set({ recipes }),
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  filterRecipes: () => {
    const term = get().searchTerm.toLowerCase();
    const source = get().recipes;
    const filtered = term
      ? source.filter((r) => (r.title || "").toLowerCase().includes(term))
      : [];
    set({ filteredRecipes: filtered });
  },
}));

export default useRecipeStore;
