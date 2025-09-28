import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css"; // make sure Tailwind is imported here

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="flex space-x-4 mb-6">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="w-16 hover:scale-110 transition"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="w-16 hover:rotate-12 transition"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Vite + React + Tailwind
      </h1>
      <div className="card bg-white shadow rounded p-6 text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="bg-gray-200 px-1 rounded">src/App.jsx</code> and
          save to test HMR
        </p>
      </div>
      <p className="mt-6 text-gray-500 italic">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
