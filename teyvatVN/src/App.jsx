import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingPage from "./pages/LoadingPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import TestScenePage from "./pages/TestScenePage"; // Make sure this file exists

function App() {
  return (
    <Router>
      <Routes>
        {/* Root: loading screen */}
        <Route path="/" element={<LoadingPage />} />

        {/* Main landing */}
        <Route path="/landing" element={<LandingPage />} />

        {/* Test route */}
        <Route path="/test_scene" element={<TestScenePage />} />

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
    </Router>
  );
}

export default App;
