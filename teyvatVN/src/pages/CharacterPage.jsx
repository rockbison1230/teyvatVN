import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCharacters } from "../context/CharacterContext";
import "./CharacterPage.css";

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

const allCharacters = [
  { name: "Albedo",
     image: albedoImg,
    element: "Geo",
     personality: "Curious, Calm",
     likes: ["Sucrose", "Mona"],
     dislikes: ["Venti (too unpredicatable for his tastes)"],
     quote: "Oh? My latest experiments show promising results."},

  { name: "Amber",
     image: amberImg,
    element: "Pyro",
     personality: "Cheerful, Brave",
     likes: ["Jean", "Kaeya"],
     dislikes: ["Rosaria (conflicting attitudes)"],
     quote: "When I'm teaching you to glide, I feel like I can go even faster than usual..."},
  
     { name: "Barbara", 
      image: barbaraImg,
      element: "Hydro",
      personality: "Optimistic, Caring",
      likes: ["Jean", "Noelle"],
      dislikes: ["Rosaria (clashes with her worldview)"],
      quote:  "Tada! Barbara is here~ Leave the healing to me!"},
    
      { name: "Dahlia", 
        image: dahliaImg,
        element: "Hydro",
       personality: "Graceful, Kind",
        likes: ["Barbara", "Lisa"],
        dislikes: ["Diluc (finds him too cold)"],
        quote: "My music heals the souls of all who listen." },

  { name: "Diluc",
     image: dilucImg,
     element: "Pyro",
     personality: "Stoic, Protective",
     likes: ["Kaeya", "Lisa", "Jean"],
     dislikes: ["Kaeya (it's complicated)"],
     quote: "In the dark, I see the truth."
    },
  { name: "Eula", 
    image: eulaImg,
    element: "Cryo",
    personality: "Blunt, Loyal",
    likes: ["Kaeya"],
    dislikes: ["Diluc"],
    quote: "My thanks...and apology.",
  },
  { name: "Fischl", image: fischlImg },
  { name: "Jean", image: jeanImg },
  {
    name: "Kaeya",
    image: kaeyaImg,
    element: "Cryo",
    personality: "Charming, Sly",
    likes: ["Albedo", "Jean", "Eula"],
    dislikes: ["Diluc"],
    quote: "It’ll be more fun to go together.",
  },
  { name: "Keqing", image: keqingImg },
  { name: "Lisa", image: lisaImg },
  { name: "Mona", image: monaImg },
  { name: "Noelle", image: noelleImg },
  { name: "Rosaria", image: rosariaImg },
  { name: "Sucrose", image: sucroseImg },
  { name: "Venti", image: ventiImg },
];

export default function CharacterPage() {
  // --- FIXED: All hooks and state-related functions are now inside the component ---
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalCharacter, setModalCharacter] = useState(null);

  const navigate = useNavigate();
  const { setSelectedCharacters } = useCharacters();

  const handleOpenModal = (character) => {
    setModalCharacter(character);
  };

  const handleCloseModal = () => {
    setModalCharacter(null);
  };

  const handleToggleSelection = (character) => {
    if (selected.find((c) => c.name === character.name)) {
      setSelected((prev) => prev.filter((c) => c.name !== character.name));
    } else if (selected.length < 2) {
      setSelected((prev) => [...prev, character]);
    } else {
      alert("You can only select up to 2 characters.");
    }
    handleCloseModal(); // Close modal after selection
  };

  const handleClearSearch = () => setSearchTerm("");
  const handleDeselect = (name) =>
    setSelected((prev) => prev.filter((c) => c.name !== name));

  const handleStartOver = () => setSelected([]);

  const handleContinue = () => {
    if (selected.length === 2) {
      setSelectedCharacters(selected);
      navigate("/story");
    } else {
      alert("Please select exactly 2 characters to continue.");
    }
  };

  const filteredCharacters = allCharacters.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            className="search-input"
            placeholder="Search for a character..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <span className="clear-search" onClick={handleClearSearch}>
              ×
            </span>
          )}
        </div>

        <div className="selected-bar">
          {selected.map((char) => (
            <div key={char.name} className="selected-avatar">
              <img src={char.image} alt={char.name} />
              <span
                onClick={() => handleDeselect(char.name)}
                className="deselect-x"
              >
                ×
              </span>
            </div>
          ))}
          <span className="selected-count">{selected.length}/2</span>
          <button className="start-over" onClick={handleStartOver}>
            ⟳
          </button>
        </div>
      </div>

      <div className="character-grid">
        {filteredCharacters.map((char) => (
          <div
            key={char.name}
            className={`character-card ${
              selected.find((c) => c.name === char.name) ? "selected" : ""
            }`}
            onClick={() => handleOpenModal(char)}
          >
            <img src={char.image} alt={char.name} />
            <div className="character-name">{char.name}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalCharacter && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              ×
            </button>
            <h2 className="modal-name">{modalCharacter.name}</h2>
            {modalCharacter.quote && (
              <p className="modal-quote">“{modalCharacter.quote}”</p>
            )}
            {modalCharacter.element && (
              <p>
                <strong>Element:</strong> {modalCharacter.element}
              </p>
            )}
            {modalCharacter.personality && (
              <p>
                <strong>Personality:</strong> {modalCharacter.personality}
              </p>
            )}
            {modalCharacter.likes && (
              <p>♡: {modalCharacter.likes.join(", ")}</p>
            )}
            {modalCharacter.dislikes && (
              <p>⚔: {modalCharacter.dislikes.join(", ")}</p>
            )}
            <img
              className="modal-image"
              src={modalCharacter.image}
              alt={modalCharacter.name}
            />
            <button
              className="select-button"
              onClick={() => handleToggleSelection(modalCharacter)}
            >
              {selected.find((c) => c.name === modalCharacter.name)
                ? "Deselect"
                : "Select for Duo"}
            </button>
          </div>
        </div>
      )}

      <div className="continue">
        Duo selected? Hit <span onClick={handleContinue}>continue</span> and let
        the adventure begin!
      </div>
    </div>
  );
}
