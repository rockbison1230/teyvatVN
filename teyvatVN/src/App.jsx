// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your actual page components
//import LoadingPage from "./pages/LoadingPage.jsx";
import LandingPage from "./pages/LandingPage.jsx"; // Make sure to use LandingPage
//import StoryPage from "./pages/StoryPage.jsx"; // Import the StoryPage
import TestScenePage from "./pages/TestScenePage.js";

function App() {
  return (
    <Router>
      <Routes>
        {/*
          The root path '/' initially shows the LoadingPage.
          LoadingPage will then redirect to /landing after a delay.

                 <Route path="/" element={<LoadingPage />} /> add this once loading page finish, and change landing path
                 to /landing

        */}

        {/* The explicit path for your main landing content */}
        <Route path="/" element={<LandingPage />} />

        {/* The path for your story content 
        
         <Route path="/story" element={<StoryPage />} />*/}

        {/* Catch-all for any unknown paths */}
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
        <Route path="/test_scene" element={<TestScenePage />} />
      </Routes>
      
    </Router>
  );
}

export default App;
