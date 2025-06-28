import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import bgImage from "../assets/background/landing-page-lcp.jpg";

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">teyvat.vn</div>
        <nav className="nav-links">
          <a href="#how-to">How To Play</a>
          <a href="#about">About</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-content">
          <h1>Your story. Their world. Any universe.</h1>
          <p>
            Create custom Genshin Impact visual novel fanfics with endless
            possibilities — powered by Google Gemini ✦
          </p>
          <Link to="/characters">→ Choose Your Duo to Begin</Link>
        </div>
      </section>

      {/* How To Play */}
      <section id="how-to" className="how-to">
        <h2>How To Play</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Choose 2 Characters</h3>
            <p>Pick any Genshin duo to star in your story.</p>
          </div>
          <div className="step">
            <h3>2. Set the Scene</h3>
            <p>Describe any location or setup you can imagine.</p>
          </div>
          <div className="step">
            <h3>3. Generate & Play</h3>
            <p>Watch the AI create your story with dialogue and choices.</p>
          </div>
          <div className="step">
            <h3>4. Branch the Story</h3>
            <p>Make decisions to shape the plot or try new paths.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          We’re four UCF students who teamed up to build something fun (and a
          little unhinged). This project explores AI storytelling in fandom
          through React, CSS, and Gemini.
        </p>
        <div className="team">
          <span>Amana</span>
          <span>Dawn</span>
          <span>Lily</span>
          <span>Cami</span>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          Built for <strong>GemiKnights</strong> 2025. Powered by Google Gemini.
        </p>
      </footer>
    </div>
  );
}
