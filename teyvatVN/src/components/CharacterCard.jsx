import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCharacters } from "../context/CharacterContext";

// Character images
import albedo from "../assets/character sprites/albedo.webp";
import amber from "../assets/character sprites/amber.webp";
import barbara from "../assets/character sprites/barbara.webp";
import dahlia from "../assets/character sprites/dahlia.webp";
import diluc from "../assets/character sprites/diluc.webp";
import eula from "../assets/character sprites/eula.webp";
import fischl from "../assets/character sprites/fischl.webp";
import jean from "../assets/character sprites/jean.png";
import kaeya from "../assets/character sprites/kaeya.png";
import keqing from "../assets/character sprites/keqing.png";
import lisa from "../assets/character sprites/lisa.webp";
import mona from "../assets/character sprites/mona.webp";
import noelle from "../assets/character sprites/noelle.webp";
import rosaria from "../assets/character sprites/rosaria.webp";
import sucrose from "../assets/character sprites/sucrose.png";
import venti from "../assets/character sprites/venti.webp";

const characters = [
  { name: "Amber", image: amber },
  { name: "Albedo", image: albedo },
  { name: "Barbara", image: barbara },
  { name: "Dahlia", image: dahlia },
  { name: "Diluc", image: diluc },
  { name: "Eula", image: eula },
  { name: "Fischl", image: fischl },
  { name: "Jean", image: jean },
  { name: "Kaeya", image: kaeya },
  { name: "Keqing", image: keqing },
  { name: "Lisa", image: lisa },
  { name: "Mona", image: mona },
  { name: "Noelle", image: noelle },
  { name: "Rosaria", image: rosaria },
  { name: "Sucrose", image: sucrose },
  { name: "Venti", image: venti },
];

export default function CharacterPage() {
  const { selectedCharacters, setSelectedCharacters } = useCharacters();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSelect = (char) => {
    const exists = selectedCharacters.some((c) => c.name === char.name);
    if (exists) {
      setSelectedCharacters(selectedCharacters.filter((c) => c.name !== char.name));
    } else if (selectedCharacters.length < 2) {
      setSelectedCharacters([...selectedCharacters, char]);
    } else {
      alert("You can only select 2 characters.");
    }
  };

  const handleRemove = (name) => {
    setSelectedCharacters(selectedCharacters.filter((c) => c.name !== name));
  };

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen flex flex-col text-gray-900">
      {/* Header */}
      <header className="bg-[#1c1b3a] text-white p-4 flex justify-between items-center">
        <span className="text-lg font-semibold">teyvat.vn</span>
        <nav className="space-x-4 text-sm">
          <Link to="/">Home</Link>
          <Link to="/characters">Characters</Link>
          <Link to="/story">Story</Link>
        </nav>
      </header>

      {/* Search + Selected */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 pt-4 pb-2 border-b border-gray-200">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search characters..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-[#C7C3C3] px-3 py-2 rounded bg-white text-sm w-full sm:w-64"
        />

        {/* Selected characters bar */}
        <div className="flex items-center gap-2 ml-auto flex-wrap">
          {selectedCharacters.map((char) => (
            <div key={char.name} className="relative w-10 h-10 border border-[#C7C3C3] rounded overflow-hidden">
              <img src={char.image} alt={char.name} className="w-full h-full object-contain" />
              <button
                onClick={() => handleRemove(char.name)}
                className="absolute -top-1 -right-1 bg-white text-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center shadow"
              >
                ×
              </button>
            </div>
          ))}
          <span className="text-sm text-gray-600">{selectedCharacters.length}/2</span>
        </div>
      </div>

      {/* Main content */}
      <main className="w-full max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-2">Characters</h1>
        <p className="mb-6 text-gray-700">
          Pick two characters to star in your story. Click an icon to select them —
          then{" "}
          <span
            className={`${
              selectedCharacters.length === 2
                ? "font-bold underline cursor-pointer text-indigo-700"
                : "text-gray-400"
            }`}
            onClick={() => selectedCharacters.length === 2 && navigate("/story")}
          >
            continue
          </span>{" "}
          your adventure!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredCharacters.map((char) => (
            <div
              key={char.name}
              onClick={() => handleSelect(char)}
              className={`cursor-pointer border border-[#C7C3C3] rounded-md overflow-hidden shadow-sm ${
                selectedCharacters.some((c) => c.name === char.name) ? "ring-2 ring-indigo-400" : ""
              }`}
            >
              <div className="w-full h-32 bg-white flex items-center justify-center p-2">
                <img
                  src={char.image}
                  alt={char.name}
                  className="h-full object-contain transition-transform duration-200 hover:scale-105"
                />
              </div>
              <div className="bg-[#A7B7E4] text-center py-1 font-medium text-sm">{char.name}</div>
            </div>
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
