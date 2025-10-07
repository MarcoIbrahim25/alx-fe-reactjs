import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";

const URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts() {
  const res = await fetch(URL);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

async function createPost(newPost) {
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });
  if (!res.ok) throw new Error("Failed to create post");
  return res.json();
}

export default function PostsComponent() {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");

  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    "posts",
    fetchPosts,
    { staleTime: 60_000, cacheTime: 300_000, refetchOnWindowFocus: false }
  );

  const addPost = useMutation(createPost, {
    onMutate: async (newPost) => {
      await queryClient.cancelQueries("posts");
      const previous = queryClient.getQueryData("posts");
      const optimistic = { id: Math.random(), ...newPost };
      queryClient.setQueryData("posts", (old) => [optimistic, ...(old || [])]);
      return { previous };
    },
    onError: (_err, _vars, ctx) => {
      if (ctx?.previous) queryClient.setQueryData("posts", ctx.previous);
    },
    onSuccess: (created) => {
      queryClient.setQueryData("posts", (old) => [created, ...(old || [])]);
    },
    onSettled: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  const handleAdd = () => {
    if (!title.trim()) return;
    addPost.mutate({ title, body: "demo", userId: 1 });
    setTitle("");
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p style={{ color: "red" }}>{String(error)}</p>;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      <h2>React Query Demo</h2>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          placeholder="New post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ flex: 1 }}
        />
        <button onClick={handleAdd} disabled={addPost.isLoading}>
          {addPost.isLoading ? "Adding..." : "Add Post"}
        </button>
        <button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 8 }}>
        {(data || []).slice(0, 20).map((p) => (
          <li key={p.id} style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
            <strong>#{p.id}</strong> — {p.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
