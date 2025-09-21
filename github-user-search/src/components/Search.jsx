import { useState } from "react";

export default function Search({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    onSearch(username.trim()); // استدعاء الفنكشن اللي جاي من App
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username..."
        style={{
          flex: 1,
          padding: 10,
          borderRadius: 8,
          border: "1px solid #ddd",
        }}
      />
      <button type="submit" style={{ padding: "10px 16px" }}>
        Search
      </button>
    </form>
  );
}
