import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return (
    <div>
      <h3>Post ID: {id}</h3>
      <p>This is a dynamic route.</p>
    </div>
  );
}
