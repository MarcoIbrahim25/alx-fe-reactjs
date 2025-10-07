import { Link } from "react-router-dom";

export default function Blog() {
  const ids = [1, 2, 3, 42];
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {ids.map((id) => (
          <li key={id}>
            <Link to={`/blog/${id}`}>Open Post {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
