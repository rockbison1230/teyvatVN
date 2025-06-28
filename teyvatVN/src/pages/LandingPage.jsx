import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/background/landing-page-lcp.jpg";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900 font-solway">
      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full z-10 flex justify-between items-center px-6 py-4 text-white font-quattro">
        <div className="text-lg font-bold tracking-wide">teyvat.vn</div>
        <nav className="space-x-6 text-sm">
          <a href="#how-to" className="hover:underline">
            How To Play
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        className="h-screen w-full bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 font-quattro">
            Your story. Their world. Any universe.
          </h1>
          <p className="mb-4 font-solway">
            Create custom Genshin Impact visual novel fanfics with endless
            possibilities — powered by Google Gemini ✦
          </p>
          <Link
            to="/characters"
            className="text-white font-semibold hover:underline"
          >
            → Choose Your Duo to Begin
          </Link>
        </div>
      </section>

      {/* HOW TO PLAY */}
      <section
        id="how-to"
        className="pt-32 px-6 pb-20 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 font-quattro">
          How To Play
        </h2>
        <div className="text-left space-y-4 text-base">
          <div>
            <h3 className="font-semibold mb-1 font-quattro">
              1. Choose 2 Characters
            </h3>
            <p className="font-solway">
              Pick your Genshin duo to star in the story.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1 font-quattro">
              2. Set the Scene
            </h3>
            <p className="font-solway">
              Type in any setting you can imagine — no limits.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1 font-quattro">
              3. Generate & Play
            </h3>
            <p className="font-solway">
              Watch your AI-powered visual novel unfold with dynamic dialogue
              and choices.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1 font-quattro">
              4. Branch the Story
            </h3>
            <p className="font-solway">
              Make decisions to shape the plot — or regenerate for a new twist!
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-quattro">
          About Us
        </h2>
        <p className="text-base text-gray-700 mb-6 font-solway">
          We’re four UCF students who teamed up to build something fun (and a
          little unhinged). This project is built with React, Tailwind, and
          Gemini to explore AI storytelling in fandom.
        </p>
        <p className="text-sm italic text-gray-500 font-solway">
          <em>teyvat.vn</em> is a non-commercial fan project. All assets belong
          to their original creators.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-lg">
          <div className="font-quattro text-gray-800">Amana</div>
          <div className="font-solway text-gray-800">Dawn</div>
          <div className="font-quattro text-gray-800">Lily</div>
          <div className="font-solway text-gray-800">Cami</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-sm py-4 text-center">
        Built for <span className="font-semibold">GemiKnights</span> 2025.
        Powered by Google Gemini. <br />
        Quill pen SVG by Kangrif from{" "}
        <a
          className="underline"
          href="https://thenounproject.com/"
          target="_blank"
        >
          Noun Project
        </a>{" "}
        (CC BY 3.0).
      </footer>
    </div>
  );
}
