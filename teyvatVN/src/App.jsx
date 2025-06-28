import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage.jsx";
import CharacterPage from "./pages/CharacterPage.jsx";

import TestScenePage from "./pages/TestScenePage"; // Make sure this file exists
import PromptInputPage from "./pages/prompt_input_page.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import StoryPage from "./pages/StoryPage.jsx";

import { CharacterProvider } from "./context/CharacterContext.jsx";

function App() {
  return (
    <Router>
      <CharacterProvider>
        <Routes>
          {/*
          The root path '/' initially shows the LoadingPage.
          LoadingPage will then redirect to /landing after a delay.

                 <Route path="/" element={<LoadingPage />} /> add this once loading page finish, and change landing path
                 to /landing

        */}
          {/* Initial loading page */}
          <Route path="/" element={<loading.html/>} />
          {/* Main landing */}
          <Route path="/landing" element={<LandingPage />} />

          {/* Test route */}
          <Route path="/test_scene" element={<TestScenePage />} />
          <Route path="/characters" element={<CharacterPage />} />
          <Route path="/generate" element={<PromptInputPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/story" element={<StoryPage />} />

          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex flex-col items-center justify-center bg-red-800 text-white text-3xl">
                <h1>404 - Page Not Found</h1>
                <p className="text-xl mt-4">
                  The URL you requested does not exist.
                </p>
              </div>
            }
          />
        </Routes>
      </CharacterProvider>
    </Router>
  );
}

export default App;
