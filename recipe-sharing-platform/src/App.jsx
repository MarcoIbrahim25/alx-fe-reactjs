import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipe from "./pages/AddRecipe";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <nav className="sticky top-0 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link to="/" className="font-bold text-lg">
              🍳 Recipe <span className="text-emerald-600">Sharing</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link
                to="/"
                className="px-3 py-1.5 rounded-lg text-sm hover:bg-gray-100"
              >
                Home
              </Link>
              <Link
                to="/add"
                className="px-3 py-1.5 rounded-lg text-sm bg-emerald-600 text-white hover:bg-emerald-700"
              >
                Add Recipe
              </Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <main className="max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
            <Route path="/add" element={<AddRecipe />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t bg-white">
          <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Recipe Platform
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
