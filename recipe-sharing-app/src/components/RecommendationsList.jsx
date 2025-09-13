import useRecipeStore from "./recipeStore";

export default function RecommendationsList() {
  const recommendations = useRecipeStore((s) => s.recommendations);
  const generate = useRecipeStore((s) => s.generateRecommendations);

  return (
    <div style={{ textAlign: "left", marginTop: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <h2 style={{ margin: "8px 0 12px", flex: 1 }}>Recommended for you</h2>
        <button
          onClick={generate}
          style={{
            padding: "6px 12px",
            borderRadius: 6,
            border: "none",
            background: "#2563eb",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Refresh
        </button>
      </div>

      {!recommendations.length ? (
        <p>No recommendations yet.</p>
      ) : (
        recommendations.map((r) => (
          <div
            key={r.id}
            style={{
              padding: "12px",
              marginBottom: "10px",
              border: "1px solid #e5e5e5",
              borderRadius: 8,
              background: "#eef2ff",
            }}
          >
            <h3 style={{ margin: "0 0 6px" }}>{r.title}</h3>
            <p style={{ margin: 0, color: "#444" }}>{r.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
