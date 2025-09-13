import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: "",
  favorites: [],
  recommendations: [],

  addRecipe: (recipe) => set((s) => ({ recipes: [...s.recipes, recipe] })),

  deleteRecipe: (id) =>
    set((s) => ({
      recipes: s.recipes.filter((r) => r.id !== id),
      filteredRecipes: s.filteredRecipes.filter((r) => r.id !== id),
      favorites: s.favorites.filter((fid) => fid !== id),
      recommendations: s.recommendations.filter((r) => r.id !== id),
    })),

  updateRecipe: (id, updates) =>
    set((s) => {
      const upd = (r) => (r.id === id ? { ...r, ...updates } : r);
      return {
        recipes: s.recipes.map(upd),
        filteredRecipes: s.filteredRecipes.map(upd),
        recommendations: s.recommendations.map(upd),
      };
    }),

  setRecipes: (recipes) => set({ recipes }),

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const term = get().searchTerm.toLowerCase();
    const src = get().recipes;
    const filtered = term
      ? src.filter((r) => (r.title || "").toLowerCase().includes(term))
      : [];
    set({ filteredRecipes: filtered });
  },

  addFavorite: (recipeId) =>
    set((s) =>
      s.favorites.includes(recipeId)
        ? s
        : { favorites: [...s.favorites, recipeId] }
    ),

  removeFavorite: (recipeId) =>
    set((s) => ({ favorites: s.favorites.filter((id) => id !== recipeId) })),

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const favSet = new Set(favorites);
    const pool = recipes.filter((r) => !favSet.has(r.id));

    const favored = recipes.filter((r) => favSet.has(r.id));
    const favoredTokens = new Set(
      favored
        .flatMap((r) =>
          String(r.title || "")
            .toLowerCase()
            .split(/\s+/)
        )
        .filter(Boolean)
    );

    const scored = pool.map((r) => {
      const tokens = String(r.title || "")
        .toLowerCase()
        .split(/\s+/);
      const overlap = tokens.some((t) => favoredTokens.has(t));
      const score = (overlap ? 1 : 0) + Math.random() * 0.5;
      return { item: r, score };
    });

    scored.sort((a, b) => b.score - a.score);
    set({ recommendations: scored.slice(0, 5).map((x) => x.item) });
  },
}));

export default useRecipeStore;
