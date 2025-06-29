import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowRight, FiRefreshCcw } from "react-icons/fi";
import "./StoryPage.css";

// --- DYNAMIC IMPORTS ---
import { useCharacters } from "../context/CharacterContext";
import { characterDatabase } from "../data/characterData.js"; // Import our new database

// Import general assets
import quillIcon from "../assets/images/quill.png";
import pageBg from "../assets/background/goodNews.jpg";
import bg1 from "../assets/background/favonius-cathedral.jpg";
import bg2 from "../assets/background/mondstadt-night.webp";
import bg3 from "../assets/background/statue-of-seven-day.png";

export default function StoryPage() {
  const [prompt, setPrompt] = useState("");
  const [selectedBackground, setSelectedBackground] = useState(null);

  // State to hold the data objects for the two selected characters
  const [char1Data, setChar1Data] = useState(null);
  const [char2Data, setChar2Data] = useState(null);

  // State to track the currently active sprite for each character
  const [sprite1, setSprite1] = useState(null);
  const [sprite2, setSprite2] = useState(null);

  const navigate = useNavigate();
  // This gets the selected character objects, e.g., [{name: 'Kaeya', ...}, {name: 'Jean', ...}]
  const { selectedCharacters } = useCharacters();

  // This effect runs when the component loads to set up the dynamic data
  useEffect(() => {
    if (selectedCharacters && selectedCharacters.length === 2) {
      // Get the full data objects from our database using the names from context
      const firstCharData = characterDatabase[selectedCharacters[0].name];
      const secondCharData = characterDatabase[selectedCharacters[1].name];

      // Check if we found the data in our database
      if (firstCharData && secondCharData) {
        setChar1Data(firstCharData);
        setChar2Data(secondCharData);

        // Set the initial sprite to be the first one in their list (e.g., 'Neutral')
        setSprite1(Object.values(firstCharData.storySprites)[0]);
        setSprite2(Object.values(secondCharData.storySprites)[0]);
      } else {
        alert(
          "Character data not found! Please check your characterData.js file."
        );
        navigate("/characters");
      }
    } else {
      // If no characters are selected, redirect back to the selection page
      alert("Please select your characters first!");
      navigate("/characters");
    }
  }, [selectedCharacters, navigate]);

  const backgrounds = [
    { name: "Favonius Cathedral", src: bg1 },
    { name: "Mondstadt Night", src: bg2 },
    { name: "Statue of the Seven", src: bg3 },
  ];

  // (Your handleGenerate, handleReset, etc. functions would go here)

  return (
    <div
      className="story-page-container"
      style={{ backgroundImage: `url(${pageBg})` }}
    >
      <header className="story-page-header">
        <div className="logo">teyvat.vn</div>
        <nav className="story-nav-links">
          <Link to="/landing">Home</Link>
          <Link to="/characters">Characters</Link>
          <Link to="/story">Story</Link>
        </nav>
      </header>

      <div className="story-content-container">
        <main className="story-content-wrapper">
          {/* ... other sections like title, background selection ... */}
          <section className="story-title-section">
            <h1>Story</h1>
            <p>
              Here’s where the magic happens. Drop your duo anywhere you want.
              Mondstadt? College? Outer space? It’s your story — you decide!
            </p>
          </section>

          <section className="background-selection-section">
            <h3>Choose a Background</h3>
            <div className="background-grid">
              {backgrounds.map((bg) => (
                <div
                  key={bg.name}
                  className={`background-card ${
                    selectedBackground?.name === bg.name ? "selected" : ""
                  }`}
                  onClick={() => setSelectedBackground(bg)}
                >
                  <img src={bg.src} alt={bg.name} />
                  <span>{bg.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section
            className="visual-novel-ui"
            style={{
              backgroundImage: selectedBackground
                ? `url(${selectedBackground.src})`
                : "none",
            }}
          >
            {!selectedBackground && <span>Visual novel UI</span>}

            {/* Sprites are now rendered from dynamic state */}
            {selectedBackground && sprite1 && (
              <img
                src={sprite1}
                alt="Character 1"
                className="character-sprite pos-1"
              />
            )}
            {selectedBackground && sprite2 && (
              <img
                src={sprite2}
                alt="Character 2"
                className="character-sprite pos-2"
              />
            )}
          </section>

          {/* The Expression Switcher is now fully dynamic */}
          {selectedBackground && (
            <section className="expression-switcher">
              {char1Data && (
                <div className="character-controls">
                  <h4>{selectedCharacters[0].name}'s Expression</h4>
                  <div className="expression-buttons">
                    {Object.entries(char1Data.storySprites).map(
                      ([mood, src]) => (
                        <button
                          key={mood}
                          className={`expression-btn ${
                            sprite1 === src ? "active" : ""
                          }`}
                          onClick={() => setSprite1(src)}
                        >
                          {mood}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
              {char2Data && (
                <div className="character-controls">
                  <h4>{selectedCharacters[1].name}'s Expression</h4>
                  <div className="expression-buttons">
                    {Object.entries(char2Data.storySprites).map(
                      ([mood, src]) => (
                        <button
                          key={mood}
                          className={`expression-btn ${
                            sprite2 === src ? "active" : ""
                          }`}
                          onClick={() => setSprite2(src)}
                        >
                          {mood}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
            </section>
          )}

          <section className="story-prompt-section">
            {/* ... prompt input ... */}
          </section>

          <section className="reset-section">
            {/* ... reset button ... */}
          </section>
        </main>
      </div>

      <footer className="story-footer">{/* ... footer content ... */}</footer>
    </div>
  );
}
