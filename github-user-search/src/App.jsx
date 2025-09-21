import { useState } from "react";
import { searchUsers } from "./services/github";
import UserCard from "./components/UserCard";

export default function App() {
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const onSearch = async (e) => {
    e.preventDefault();
    if (!q.trim()) return;
    setLoading(true);
    setError("");
    try {
      const data = await searchUsers(q.trim());
      setResults(data.items ?? []);
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 720, margin: "30px auto", padding: 16 }}>
      <h1>GitHub User Search</h1>
      <form onSubmit={onSearch} style={{ display: "flex", gap: 8 }}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search GitHub users…"
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 8,
            border: "1px solid #ddd",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ padding: "10px 16px" }}
        >
          {loading ? "Searching…" : "Search"}
        </button>
      </form>

      {error && <p style={{ color: "crimson" }}>{error}</p>}

      <div style={{ display: "grid", gap: 10, marginTop: 16 }}>
        {results.map((u) => (
          <UserCard key={u.id} user={u} />
        ))}
      </div>
    </div>
  );
}
