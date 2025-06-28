// src/pages/CharacterPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard.jsx";

// 🧠 Direct image imports (Vite will bundle them)

import kaeyaPng from "../assets/character sprites/kaeya.png";
import keqingPng from "../assets/character sprites/keqing.png";
import sucrosePng from "../assets/character sprites/sucrose.png";
import jeanPng from "../assets/character sprites/jean.png";

const characters = [
  { name: "Kaeya", image: kaeyaPng, bio: "meoww" },
  { name: "Keqing", image: keqingPng, bio: "meow" },
  { name: "Sucrose", image: sucrosePng, bio: "meow" },
  { name: "Jean", image: jeanPng, bio: "meow" },
];

export default function CharacterPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="bg-[#1c1b3a] text-white p-4 flex justify-between items-center">
        <span className="text-lg font-semibold">teyvat.vn</span>
        <nav className="space-x-4 text-sm">
          <Link to="/">Home</Link>
          <Link to="/characters">Characters</Link>
          <Link to="/story">Story</Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="p-6 max-w-6xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-2">Characters</h1>
        <p className="mb-6 text-gray-700">
          Pick two characters to star in your story. Click a card to view their
          profile — then select your favorites to begin the journey.
        </p>

        {/* Selection slots */}
        <div className="flex gap-6 mb-8">
          <div className="flex-1 h-20 rounded-full border border-gray-300"></div>
          <div className="flex-1 h-20 rounded-full border border-gray-300"></div>
        </div>

        {/* Character grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {characters.map((char) => (
            <CharacterCard
              key={char.name}
              name={char.name}
              image={char.image}
              description={char.bio}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1c1b3a] text-white text-xs p-4 text-center">
        Built for <strong>GemiKnights</strong> 2025. Powered by Google Gemini.
      </footer>
    </div>
  );
}
