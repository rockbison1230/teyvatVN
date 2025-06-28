import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() !== "") {
      localStorage.setItem("currentUser", username.trim());
      navigate("/generate"); // or wherever you want to start
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-3 rounded bg-gray-800 text-white w-64 mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
      >
        Continue
      </button>
    </div>
  );
}
