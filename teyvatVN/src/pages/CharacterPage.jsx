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
  { name: "Fischl", 
    image: fischlImg,
    element: "Electro",
     personality: "Dramatic, Imaginative",
     likes: ["Sucrose", "Mona"],
     dislikes: ["Rosaria (doesn't take her theatrics seriously)"],
     quote: "I am Oz, the eternal Night Raven." },
     { name: "Jean", 
    image: jeanImg,
  element: "Anemo",
     personality: "Kind, Dedicated",
     likes: ["Lisa", "Amber"],
     dislikes: ["Diluc (sometimes)", "Barbara (sibling rivalry)"],
     quote: "I must protect everyone." },
  {name: "Kaeya",
  image: kaeyaImg,
  element: "Cryo",
  personality: "Charming, Sly",
  likes: ["Albedo", "Jean", "Eula"],
  dislikes: ["Diluc"],
  quote: "It’ll be more fun to go together."
},
  { name: "Lisa", image: lisaImg,
    element: "Electro",
     personality: "Smart, Flirtatious",
     likes: ["Kaeya", "Mona"],
     dislikes: ["Venti (too lazy for her taste)"],
     quote: "A good library is a treasure to be enjoyed..."
   },
  { name: "Mona", image: monaImg,
    element: "Hydro",
     personality: "Proud, Insightful",
     likes: ["Albedo", "Fischl"],
     dislikes: ["Kaeya (doesn't trust his motives)"],
     quote: "I'll see what the stars have in store for you."
   },
  { name: "Noelle", image: noelleImg,
    element: "Geo",
     personality: "Hardworking, Loyal",
     likes: ["Jean", "Barbara"],
     dislikes: ["Kaeya (too laid-back for her)"],
     quote: "Such fair weather. Why don't we do a bit of sunny work?"
   },
  { name: "Rosaria", image: rosariaImg,
    element: "Cryo",
    personality: "Blunt, Private",
    likes: ["Eula", "Kaeya"],
    dislikes: ["Barbara", "Amber"],
    quote: "Let's forgo the formalities. I'm here to finish a job.",
  },
  { name: "Sucrose", image: sucroseImg,
    element: "Anemo",
    personality: "Shy, Intelligent",
    likes: ["Albedo", "Fischl"],
    dislikes: ["Lisa"],
    quote: "Let's begin the experiment!"
   },

  { name: "Venti", image: ventiImg ,
element: "Anemo",
    personality: "Playful, Free-spirited",
    likes: ["Amber", "Fischl"],
    dislikes: ["Lisa (doesn't enjoy her nagging"],
    quote: "Winds will guide you on your journey."
   },
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
