import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./loading.css";
import quillImage from "../assets/images/quill.png"; // adjust path if needed

export default function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/landing");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      <img src={quillImage} alt="Quill" className="quill-image" />
      <h1 className="loading-text">Rewrite the lore, your way!</h1>
    </div>
  );
}
