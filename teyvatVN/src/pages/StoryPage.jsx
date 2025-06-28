import { useState } from "react";
import { useCharacters } from "../context/CharacterContext"; 
import { generateStory } from "../api/generateStory";
import "./StoryPage.css";


function StoryPage() {
  const [prompt, setPrompt] = useState("");
  const [selectedBackground, setSelectedBackground] = useState(null);

  const { selectedCharacters } = useCharacters(); // 

  const character1 = localStorage.getItem("character1");
  const character2 = localStorage.getItem("character2");
  // // used for finding the current characters selected so that I can use them in the scene selection
  // console.log("in storypage")
  // console.log("the selected characters are: 0 ")
  // console.log(character1)
  // console.log("the selected characters are: 1 ")
  // console.log(character2)

  const backgrounds = [
    {
      name: "Favonius Cathedral",
      src: "/favonius-cathedral.jpg",
    },
    {
      name: "Mondstadt Night",
      src: "..assets/background/mondstadt-night.jpg",
    },
    {
      name: "Statue of the Seven",
      src: "/statue-of-seven-day.png",
    },
  ];


const [generatedStory, setGeneratedStory] = useState("");

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
const generateStoyApiCall = async () => {
    //setPrompt("");
    console.log("Story logging information so that it can do the api calls in the backend")
    console.log("prompt is ", prompt)
    console.log("char1 is ", character1)
    console.log("char2 is ", character2)
    console.log("background is ", selectedBackground)
    

    //send api call with these data as it is. todo later
    await fetch("https://script-deferred-sg-anthony.trycloudflare.com/api/dawn/chapter3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
    // Implement save logic here
  };

  const handleClear = () => {
    setPrompt("");
    console.log("Story cleared!");
  };

  const handleReset = () => {
    setPrompt("");
    setSelectedBackground(null);
    setCharacters(dummySelectedCharacters);
    console.log("Page reset!");
  };

  return (
    <div className="bg-gray-100 text-black min-h-screen px-6 pb-12">
      {/* Title */}
      <header className="pt-6">
        <h1 className="text-3xl font-semibold text-center">Story</h1>
      </header>

      {/* Prompt Input */}
      <section className="mt-6 text-center">
        <input
          type="text"
          placeholder="Enter your story prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full max-w-xl px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {selectedBackground && (
          <button
            onClick={handleGenerateStory}
            className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Go! DO NOT PRESS ME JUST YET THIS BREAKS IT 
          </button>
        )}
      </section>

      {/* Background Selection */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-center mb-4">
          Choose Your Background
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {backgrounds.map((bg, index) => (
            <div
              key={index}
              onClick={() => setSelectedBackground(bg.src)}
              className={`cursor-pointer rounded overflow-hidden border-4 ${
                selectedBackground === bg.src
                  ? "border-indigo-500"
                  : "border-transparent"
              }`}
            >
              <img
                src={bg.src}
                alt={bg.name}
                className="w-full h-48 object-cover hover:opacity-80 transition"
              />
              <div className="text-center py-2 text-sm">{bg.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Preview Section */}
      {selectedBackground && (
        <section className="mt-10 text-center">
          <h3 className="text-lg font-semibold mb-4">Background Preview</h3>
          <div className="relative inline-block max-w-full rounded overflow-hidden shadow-lg">
            <img
              src={selectedBackground}
              alt={selectedBackground}
              className="w-full h-auto"
            />
            {/* Characters overlay */}
            {selectedCharacters.map((char, index) => (
              <img
                key={index}
                src={`/${char.sprite_name}.png`}
                alt={char.name}
                className={`absolute bottom-4 ${
                  index === 0 ? "left-10" : "right-10"
                } w-32 h-auto`}
              />
            ))}
          </div>
        </section>
      )}

      {generatedStory && (
  <section className="mt-10 max-w-3xl mx-auto bg-white p-4 rounded shadow">
    <h3 className="text-xl font-semibold mb-2">Generated Story</h3>
    <p className="whitespace-pre-wrap">{generatedStory}</p>
  </section>
)}

      {/* Bottom Buttons */}
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
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset Page
        </button>
        <button
          // this is so that it sends the api call to the backend to do the story generation
          onClick={generateStoyApiCall}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Generate Story!
        </button>
      </section>
    </div>
  );
}

export default StoryPage;
