// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your Landing page component
import Landing from "./pages/LandingPage.jsx"; // Make sure the path is correct

// --- Placeholder Components for other routes ---
// (You or your teammate will replace these with actual components later)
function Page1() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 text-white text-3xl">
      <h1>This is Page 1! (Placeholder)</h1>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-500 text-white text-3xl">
      <h1>Welcome to the Dashboard!</h1>
    </div>
  );
}
// --- End Placeholder Components ---

function App() {
  return (
    // BrowserRouter wraps your entire application to enable routing
    <Router>
      {/*
        Routes renders the first <Route> that matches the current URL.
        Think of it like a switch statement for your routes.
      */}
      <Routes>
        {/* Route for your Landing page. */}
        <Route path="/" element={<Landing />} />

        {/* Example Route for Page 1 */}
        <Route path="/page1" element={<Page1 />} />

        {/* Example Route for a Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/*
          Optional: A catch-all route for 404 Not Found pages.
          This should be the last route.
        */}
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
