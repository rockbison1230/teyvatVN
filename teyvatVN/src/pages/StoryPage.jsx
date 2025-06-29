import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowRight, FiRefreshCcw } from "react-icons/fi";
import "./StoryPage.css";

// Assuming you have this context set up
// import { useCharacters } from "../context/CharacterContext";

// Import your assets
import quillIcon from "../assets/images/quill.png";
import bg1 from "../assets/background/favonius-cathedral.jpg";
import bg2 from "../assets/background/mondstadt-night.webp";
import bg3 from "../assets/background/statue-of-seven-day.png";
// Import the main page background
import pageBg from "../assets/background/goodNews.jpg";

export default function StoryPage() {
  const [prompt, setPrompt] = useState("");
  const [selectedBackground, setSelectedBackground] = useState(null);
  const [generatedStory, setGeneratedStory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // This is a placeholder for your character data from context
  const selectedCharacters = [
    {
      name: "Kaeya",
      sprite_name: "kaeya.png",
      image: "/src/assets/character-sprites/kaeya.png",
    }, // Example path
    {
      name: "Jean",
      sprite_name: "jean.png",
      image: "/src/assets/character-sprites/jean.png",
    },
  ];

  const backgrounds = [
    { name: "Favonius Cathedral", src: bg1 },
    { name: "Mondstadt Night", src: bg2 },
    { name: "Statue of the Seven", src: bg3 },
  ];

  const handleGenerate = async () => {
    if (!prompt || !selectedBackground) {
      alert("Please choose a background and enter a story prompt!");
      return;
    }
    // ... API call logic would go here ...
    console.log("Generating story...");
  };

  const handleReset = () => {
    navigate("/characters");
  };

  const handleSave = () => {
    console.log("Story Saved!");
  };

  return (
    <div
      className="story-page-container"
      style={{ backgroundImage: `url(${pageBg})` }}
    >
      {/* Header */}
      <header className="story-page-header">
        <div className="logo">teyvat.vn</div>
        <nav className="story-nav-links">
          <Link to="/landing">Home</Link>
          <Link to="/characters">Characters</Link>
          <Link to="/story">Story</Link>
        </nav>
      </header>

      {/* White container for all the main content */}
      <div className="story-content-container">
        <main className="story-content-wrapper">
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

          <section className="story-prompt-section">
            <h3>Write your Prompt</h3>
            <div className="prompt-input-wrapper">
              <input
                type="text"
                placeholder="e.g., A sudden rainstorm during a heated argument..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="prompt-input"
              />
              <button
                onClick={handleGenerate}
                className="prompt-submit-button"
                disabled={isLoading}
              >
                <FiArrowRight />
              </button>
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
            {selectedBackground &&
              selectedCharacters &&
              selectedCharacters.map((char, index) => (
                <img
                  key={char.name}
                  src={char.image}
                  alt={char.name}
                  className={`character-sprite pos-${index + 1}`}
                />
              ))}
          </section>

          {isLoading && (
            <div className="loading-indicator">Generating your story...</div>
          )}
          {generatedStory && (
            <pre className="story-output">{generatedStory}</pre>
          )}

          <section className="action-buttons">
            <button
              onClick={handleSave}
              className="action-button save"
              disabled={!generatedStory || isLoading}
            >
              Save Story
            </button>
          </section>

          <section className="reset-section">
            <h2>Want a fresh start?</h2>
            <button onClick={handleReset} className="reset-button">
              <span>Reset</span>
              <FiRefreshCcw />
            </button>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="story-footer">
        <div className="story-footer-content">
          <div className="footer-text">
            <p>
              Built for <strong>GemiKnights</strong> 2025. Powered by Google
              Gemini.
            </p>
            <p>
              Quill pen SVG by Kangrif from{" "}
              <a
                href="https://thenounproject.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Noun Project
              </a>{" "}
              (CC BY 3.0).
            </p>
          </div>
          <img src={quillIcon} alt="Quill Icon" className="footer-quill" />
        </div>
      </footer>
    </div>
  );
}
