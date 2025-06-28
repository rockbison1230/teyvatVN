import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import quill from "../assets/images/quill.png";

export default function Loading() {
  const navigate = useNavigate();
  const [startFade, setStartFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartFade(true); // Start fade out
    }, 1500); // Trigger fade out at 1.5s

    return () => clearTimeout(timer);
  }, []);

  // Navigate once fade-out animation ends
  useEffect(() => {
    if (startFade) {
      const navTimer = setTimeout(() => {
        navigate("/landing");
      }, 1000); // match the fade duration

      return () => clearTimeout(navTimer);
    }
  }, [startFade, navigate]);

  return (
    <div
      className={`h-screen w-screen bg-gradient-to-b from-[#1A1D3B] to-[#424A91] flex flex-col items-center justify-center transition-opacity duration-1000 ${
        startFade ? "animate-fadeOut" : ""
      }`}
    >
      <img src={quill} alt="Quill" className="w-24 h-24 mb-4" />
      <h1 className="text-white text-4xl font-quattrocento text-center">
        Rewrite the lore, your way!
      </h1>
    </div>
  );
}
