import { useState } from "react";
import { useCharacters } from "../context/CharacterContext";
import { generateStory } from "../api/generateStory";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiRefreshCcw } from "react-icons/fi";
import "./StoryPage.css";
import bg1 from "../assets/background/favonius-cathedral.jpg";
import bg2 from "../assets/background/mondstadt-night.webp";
import bg3 from "../assets/background/statue-of-seven-day.png";

function StoryPage() {
  const [prompt, setPrompt] = useState("");
  const [selectedBackground, setSelectedBackground] = useState(null);
  const [generatedStory, setGeneratedStory] = useState("");

  const navigate = useNavigate();
  const charactersContext = useCharacters();
  const selectedCharacters = charactersContext?.selectedCharacters || [];

  const character1 = localStorage.getItem("character1");
  const character2 = localStorage.getItem("character2");

  const backgrounds = [
    { name: "Favonius Cathedral", src: bg1 },
    { name: "Statue of Seven", src: bg3 },
    { name: "Mondstadt Fountain", src: bg2 }, 
  ];

const handleGenerateStory = async () => {
  try {
    const story = await generateStory({
      prompt,
      characters: selectedCharacters,
      background: selectedBackground,
    });

    setGeneratedStory(story);
  } catch (err) {
    console.error("Error generating story:", err);
    setGeneratedStory("An error occurred while generating the story.");
  }
};
const generateStoryApiCall = async () => {
    //setPrompt("");
    console.log("Story logging information so that it can do the api calls in the backend")
    console.log("prompt is ", prompt)
    console.log("char1 is ", character1)
    console.log("char2 is ", character2)
    console.log("background is ", selectedBackground)
    

    //send api call with these data as it is. todo later
    await fetch("https://script-deferred-sg-anthony.trycloudflare.com/api/dawn/chapter3", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: prompt,
        char1: character1,
        char2: character2,
        background: selectedBackground,
      }),
    });
  };

  const handleSave = () => {
    console.log("Story saved!");
  };

  const handleClear = () => {
    setPrompt("");
    console.log("Prompt cleared!");
  };

  const handleReset = () => {
    navigate("/characters"); // sends user back to character selection
  };

  return (
    <div className="bg-gray-100 text-black min-h-screen px-8 pb-12">
      {/* Header */}
      <header className="pt-6">
        <h1 className="text-4xl font-bold mb-2 text-left">Story</h1>
        <p className="text-md text-left text-gray-700 max-w-2xl">
          Here’s where the magic happens. Drop your duo anywhere you want.
          Mondstadt? College? Outer space? It’s your story — you decide!
        </p>
      </header>

      {/* Prompt */}
      <section className="mt-8 flex justify-center">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="What kind of story do you want to tell?"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full px-4 py-3 pr-12 rounded border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none"
          />
          <FiArrowRight className="absolute top-3.5 right-4 text-xl text-gray-600" />
        </div>
      </section>

      {/* Background Toggles */}
      <section className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        {backgrounds.map((bg, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedBackground(bg.src)}
            className={`px-4 py-2 rounded border transition ${
              selectedBackground === bg.src
                ? "bg-indigo-500 text-white border-indigo-500"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          >
            {bg.name}
          </button>
        ))}
      </section>

      {/* Background Preview + Sprites */}
      {selectedBackground && (
        <section className="mt-10 text-center">
          <h3 className="text-lg font-semibold mb-4">Background Preview</h3>
          <div className="relative inline-block w-full max-w-4xl rounded overflow-hidden shadow-lg">
            <img
              src={selectedBackground}
              alt="Selected Background"
              className="w-full h-auto"
            />
            {/* Character overlays */}
            {selectedCharacters.map((char, index) => (
              <img
                key={index}
                src={`/${char.sprite_name}`}
                alt={char.name}
                className={`absolute bottom-4 ${index === 0 ? "left-6" : "right-6"} w-32 h-auto`}
                style={{ zIndex: 10 }}
              />
            ))}
          </div>
        </section>
      )}

      {/* Generated Story */}
      {generatedStory && (
        <section className="mt-10 max-w-3xl mx-auto bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Generated Story</h3>
          <p className="whitespace-pre-wrap">{generatedStory}</p>
        </section>
      )}

      {/* Action Buttons */}
      <section className="mt-12 text-center space-x-4">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Save Story
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Clear Prompt
        </button>
        <button
          onClick={generateStoryApiCall}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Generate Story!
        </button>
      </section>

      {/* Bottom Reset */}
      <footer className="mt-16 text-center text-gray-700">
        <span>Want a fresh start? </span>
        <button
          onClick={handleReset}
          className="inline-flex items-center text-indigo-600 underline font-medium hover:text-indigo-800"
        >
          Reset <FiRefreshCcw className="ml-2" />
        </button>
      </footer>
    </div>
  );
}

export default StoryPage;
