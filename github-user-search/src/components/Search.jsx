import { useState } from "react";
import { fetchUserData, searchUsersAdvanced } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);
    try {
      if (username && !location && !minRepos) {
        const user = await fetchUserData(username);
        setResults([user]);
      } else {
        const data = await searchUsersAdvanced({
          query: username,
          location,
          minRepos,
        });
        setResults(data.items || []);
        if (!data.items || data.items.length === 0)
          setError("Looks like we cant find the user");
      }
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">GitHub User Search</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4"
      >
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border rounded-lg px-3 py-2"
        />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border rounded-lg px-3 py-2"
        />
        <input
          type="number"
          min="0"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min repos"
          className="border rounded-lg px-3 py-2"
        />
        <button
          type="submit"
          className="bg-black text-white rounded-lg px-4 py-2 hover:opacity-90"
          disabled={loading}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid gap-3">
        {results.map((user) => (
          <a
            key={user.id}
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 border rounded-xl p-3 hover:bg-gray-50"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              width="56"
              height="56"
              className="rounded-full"
            />
            <div>
              <div className="font-semibold">{user.login}</div>
              {user.name && <div className="text-sm">{user.name}</div>}
              <div className="text-xs text-gray-600">{user.html_url}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
