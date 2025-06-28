import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // Using our stylesheet

// --- Main Hero Background ---
import bgImage from "../assets/background/landing-page-lcp.jpg";

// --- Character Images for the "About Us" section ---
// Make sure these paths are correct!
import kaeyaImg from "../assets/character-sprites/kaeya.png";
import jeanImg from "../assets/character-sprites/jean.png";
import keqingImg from "../assets/character-sprites/keqing.png";
import sucroseImg from "../assets/character-sprites/sucrose.png";

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <div className="logo">teyvat.vn</div>
        <nav className="nav-links">
          <a href="#how-to">How To Play</a>
          <a href="#about">About</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-content">
          <h1>Your story. Their world. Any universe.</h1>
          <p>
            Create custom Genshin Impact visual novel fanfics with endless
            possibilities — powered by Google Gemini ✦
          </p>
          <Link to="/characters" className="hero-button">
            → Choose Your Duo to Begin
          </Link>
        </div>
      </section>

      {/* This main tag creates the white content area with lots of padding */}
      <main className="main-content">
        {/* How To Play Section - Now a 2-column grid */}
        <section id="how-to" className="how-to-section">
          <div className="how-to-grid">
            {/* Left Column: Text */}
            <div className="how-to-text">
              <h2>How To Play</h2>
              <p>
                Dive into your own fan-made Genshin story in just a few steps:
              </p>
              <ol className="steps-list">
                <li>
                  <strong>Choose 2 Characters</strong> - Pick your Genshin duo
                  to star in the story.
                </li>
                <li>
                  <strong>Set the Scene</strong> - Type in any setting you can
                  imagine – no limits.
                </li>
                <li>
                  <strong>Generate & Play</strong> - Watch your AI-powered
                  visual novel unfold with dynamic dialogue and choices.
                </li>
                <li>
                  <strong>Branch the Story</strong> - Make decisions to shape
                  the plot – or regenerate for a new twist!
                </li>
              </ol>
            </div>

            {/* Right Column: Placeholder */}
            <div className="how-to-placeholder">
              <span>Screenshot of the story page in use</span>
            </div>
          </div>
        </section>

        {/* About Us Section - Now with character images */}
        <section id="about" className="about-section">
          <h2>About Us</h2>
          <p>
            Thanks for checking out our project! We're four UCF students from
            Computer Science, Engineering, IT, and Digital Media who teamed up
            to build something fun (and a little unhinged), just like us. Click
            our names to view our portfolios or GitHub profiles — we’d love to
            connect!
          </p>
          <p className="disclaimer">
            <em>teyvat.vn</em> is a non-commercial fan project, unaffiliated
            with Genshin Impact, HoYoverse, or miHoYo. All assets belong to
            their respective owners.
          </p>

          <div className="team-grid">
            <div className="team-member">
              <img src={kaeyaImg} alt="Amana's character" />
              <span>Amana</span>
            </div>
            <div className="team-member">
              <img src={jeanImg} alt="Dawn's character" />
              <span>Dawn</span>
            </div>
            <div className="team-member">
              <img src={keqingImg} alt="Lily's character" />
              <span>Lily</span>
            </div>
            <div className="team-member">
              <img src={sucroseImg} alt="Cami's character" />
              <span>Cami</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          Built for <strong>GemiKnights</strong> 2025. Powered by Google Gemini.
        </p>
      </footer>
    </div>
  );
}
