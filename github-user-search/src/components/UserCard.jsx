export default function UserCard({ user }) {
  return (
    <a
      href={user.html_url}
      target="_blank"
      rel="noreferrer"
      className="user-card"
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
        padding: "10px",
        border: "1px solid #eee",
        borderRadius: "10px",
      }}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        width="48"
        height="48"
        style={{ borderRadius: "50%" }}
      />
      <div>
        <div style={{ fontWeight: 600 }}>{user.login}</div>
        <div style={{ fontSize: 12, color: "#666" }}>{user.html_url}</div>
      </div>
    </a>
  );
}
