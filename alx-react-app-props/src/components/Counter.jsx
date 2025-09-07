import React, { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0); // state مبدئي = 0

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <p style={{ fontSize: "18px" }}>Current Count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: "5px", padding: "8px 15px" }}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: "5px", padding: "8px 15px" }}
      >
        Decrement
      </button>

      <button
        onClick={() => setCount(0)}
        style={{ margin: "5px", padding: "8px 15px" }}
      >
        Reset
      </button>
    </div>
  );
}
