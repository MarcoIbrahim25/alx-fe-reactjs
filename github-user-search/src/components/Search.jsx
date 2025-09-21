import { useState } from "react";
import { searchUsersAdvanced } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 10;

  const buildParams = () => ({
    query: username,
    location,
    minRepos: minRepos === "" ? "" : Number(minRepos),
    page,
    perPage,
  });

  const runSearch = async (targetPage) => {
    const params = { ...buildParams(), page: targetPage };
    if (
      !params.query.trim() &&
      !params.location.trim() &&
      params.minRepos === ""
    )
      return;
    setLoading(true);
    setError("");
    try {
      const data = await searchUsersAdvanced(params);
      setResults((prev) =>
        targetPage === 1 ? data.items : [...prev, ...data.items]
      );
      setTotal(data.total_count || 0);
      setPage(targetPage);
      if ((data.total_count || 0) === 0)
        setError("Looks like we cant find the user");
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    setError("");
    setResults([]);
    setTotal(0);
    await runSearch(1);
  };

  const loadMore = async () => {
    await runSearch(page + 1);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">
        GitHub User Search (Advanced)
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4"
      >
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username (e.g. torvalds)"
          className="border rounded-lg px-3 py-2"
        />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (e.g. Egypt)"
          className="border rounded-lg px-3 py-2"
        />
        <input
          type="number"
          min="0"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min repos (e.g. 10)"
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

      {loading && <p className="mb-2">Loading...</p>}
      {error && <p className="mb-2 text-red-600">{error}</p>}

      {total > 0 && (
        <p className="text-sm text-gray-600 mb-3">
          Results: <span className="font-semibold">{total}</span>
        </p>
      )}

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
              <div className="text-xs text-gray-600">{user.html_url}</div>
            </div>
          </a>
        ))}
      </div>

      {results.length > 0 && results.length < total && (
        <div className="mt-4">
          <button
            onClick={loadMore}
            className="border rounded-lg px-4 py-2 hover:bg-gray-50"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
}
