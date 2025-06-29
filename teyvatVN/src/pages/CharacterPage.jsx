import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCharacters } from "../context/CharacterContext";
import "./characterPage.css";

// --- FIXED: Paths now point to the renamed 'character-sprites' folder ---
import albedoImg from "../assets/character-sprites/albedo.webp";
import amberImg from "../assets/character-sprites/amber.webp";
import barbaraImg from "../assets/character-sprites/barbara.webp";
import dahliaImg from "../assets/character-sprites/dahlia.webp";
import dilucImg from "../assets/character-sprites/diluc.webp";
import eulaImg from "../assets/character-sprites/eula.webp";
import fischlImg from "../assets/character-sprites/fischl.webp";
import jeanImg from "../assets/character-sprites/jean.png";
import kaeyaImg from "../assets/character-sprites/kaeya.png";
import keqingImg from "../assets/character-sprites/keqing.png";
import lisaImg from "../assets/character-sprites/lisa.webp";
import monaImg from "../assets/character-sprites/mona.webp";
import noelleImg from "../assets/character-sprites/noelle.webp";
import rosariaImg from "../assets/character-sprites/rosaria.webp";
import sucroseImg from "../assets/character-sprites/sucrose.png";
import ventiImg from "../assets/character-sprites/venti.webp";

// The rest of your component code...

// Create a data structure with all character info
const allCharacters = [
  { name: "Albedo", image: albedoImg },
  { name: "Amber", image: amberImg },
  { name: "Barbara", image: barbaraImg },
  { name: "Dahlia", image: dahliaImg },
  { name: "Diluc", image: dilucImg },
  { name: "Eula", image: eulaImg },
  { name: "Fischl", image: fischlImg },
  { name: "Jean", image: jeanImg },
  { name: "Kaeya", image: kaeyaImg },
  { name: "Keqing", image: keqingImg },
  { name: "Lisa", image: lisaImg },
  { name: "Mona", image: monaImg },
  { name: "Noelle", image: noelleImg },
  { name: "Rosaria", image: rosariaImg },
  { name: "Sucrose", image: sucroseImg },
  { name: "Venti", image: ventiImg },
];


function CharacterPage() {
  // --- In React, we use "state" to manage data ---
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // --- Hooks for navigation and global state ---
  const navigate = useNavigate();
  const { setSelectedCharacters } = useCharacters(); // From CharacterContext

  const handleToggleSelection = (character) => {
    if (selected.find((c) => c.name === character.name)) {
      // Deselect character
      setSelected((prev) => prev.filter((c) => c.name !== character.name));
    } else if (selected.length < 2) {
      // Select character
      setSelected((prev) => [...prev, character]);
    } else {
      alert("You can only select up to 2 characters.");
    }
  };

  const handleContinue = () => {
    if (selected.length === 2) {
      setSelectedCharacters(selected); // Save the choice to the global context

      // used for finding the current characters selected so that I can use them in the scene selection
      // console.log("the selected characters are: 0 ")
      // console.log(selected[0])
      // console.log("the selected characters are: 1 ")
      // console.log(selected[1])
      // temp for Dawn to hold the current characters in character1 and character2
      // 🔐 Save prompt and result to localStorage
      localStorage.setItem("character1", selected[0]);
      localStorage.setItem("character2", selected[1]);

      navigate("/story"); // Navigate to the story page
    } else {
      alert("Please select exactly 2 characters to continue.");
    }
  };

  // Filter characters based on the search term
  const filteredCharacters = allCharacters.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- This is the JSX that React renders to the screen ---
  return (
    
    <div className="character-page-container">
      
      <h1 className="page-title">Characters</h1>
      <p className="page-description">
        Pick two characters to star in your story. Click a card to view their
        profile — then select your favorites to begin the journey.
      </p>

      <div className="topbar">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a character..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="selection-tray">
          <div id="selectedIcons" className="selected-icons">
            {selected.map((char) => (
              <img
                key={char.name}
                src={char.image}
                alt={char.name}
                className="selected-icon-img"
              />
            ))}
          </div>
          <span id="selectedCount">{selected.length}/2 Selected</span>
          <button
            id="continueBtn"
            onClick={handleContinue}
            disabled={selected.length !== 2}
          >
            Continue
          </button>
        </div>
      </div>

      <div id="characterGrid" className="character-grid">
        {filteredCharacters.map((character) => (
          <div
            key={character.name}
            className={`character-card ${
              selected.find((c) => c.name === character.name) ? "selected" : ""
            }`}
            onClick={() => handleToggleSelection(character)}
          >
            <img src={character.image} alt={character.name} />
            <div className="character-name">{character.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterPage;
