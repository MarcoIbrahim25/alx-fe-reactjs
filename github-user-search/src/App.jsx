import { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);
    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "30px auto", padding: 16 }}>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div
          style={{
            marginTop: 20,
            padding: 16,
            border: "1px solid #ddd",
            borderRadius: 10,
          }}
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <h2>{user.login}</h2>
          <p>{user.name}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
