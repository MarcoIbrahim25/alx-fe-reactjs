import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe) => set((s) => ({ recipes: [...s.recipes, recipe] })),
  deleteRecipe: (id) =>
    set((s) => ({ recipes: s.recipes.filter((r) => r.id !== id) })),
  updateRecipe: (id, updates) =>
    set((s) => ({
      recipes: s.recipes.map((r) => (r.id === id ? { ...r, ...updates } : r)),
    })),
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
