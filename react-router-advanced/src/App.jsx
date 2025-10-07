import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div style={{ padding: 20, display: "grid", gap: 12 }}>
          <nav style={{ display: "flex", gap: 12 }}>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/profile">Profile</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="posts/:id" element={<BlogPost />} />
            <Route path="login" element={<Login />} />

            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            >
              <Route index element={<ProfileDetails />} />
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
