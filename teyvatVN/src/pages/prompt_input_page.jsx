import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function PromptInputPage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  
    useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
    navigate("/login");
    }
    }, [navigate]);


  const handleGenerate = () => {
  const mockOutput = {
    title: "Generated Scene Title",
    characters: ["CharacterA", "CharacterB"],
    backgrounds: ["Background1", "Background2"],
    setting_narration: "A vivid scene description appears here.",
    segments: [
      {
        type: "dialogue",
        speaker: "CharacterA",
        expression_action: "(smirking)",
        line: "We finally meet again.",
      },
      {
        type: "narration",
        text: "The wind howls in the distance.",
      },
    ],
  };

  // 🔐 Save prompt and result to localStorage
  localStorage.setItem("latestPrompt", prompt);
  localStorage.setItem("latestResult", JSON.stringify(mockOutput));

  setResult(mockOutput);
};



  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">Prompt Generator</h2>

      <textarea
        className="w-full h-40 p-3 border rounded bg-gray-800 text-white"
        placeholder="Enter your story prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
      >
        Generate
      </button>

      {result && (
        <div className="mt-6 p-4 bg-gray-900 text-green-400 rounded overflow-auto text-sm whitespace-pre-wrap max-h-96">
          {JSON.stringify(result, null, 2)}
        </div>
      )}
    </div>
  );
}
