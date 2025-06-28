// src/pages/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center p-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
          }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Elevate Your Experience
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Discover a new level of productivity and creativity with our
            cutting-edge solutions.
          </p>
          {/* Link to the Story page */}
          <Link
            to="/story"
            className="px-8 py-4 bg-teal-400 text-gray-900 font-bold rounded-full text-lg shadow-lg hover:bg-teal-300 transform hover:scale-105 transition duration-300 ease-in-out animate-pop-in"
          >
            Explore the Story
          </Link>
        </div>
      </section>

      {/* Features Section (or similar content) */}
      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Powerful Features for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <div className="text-5xl text-blue-600 mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-3">Blazing Fast</h3>
              <p className="text-gray-600">
                Experience unparalleled speed and efficiency in every task you
                perform.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <div className="text-5xl text-green-600 mb-4">💡</div>
              <h3 className="text-2xl font-semibold mb-3">
                Intelligent Design
              </h3>
              <p className="text-gray-600">
                Intuitive interface designed to enhance your workflow
                seamlessly.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <div className="text-5xl text-purple-600 mb-4">🔒</div>
              <h3 className="text-2xl font-semibold mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">
                Your data is safe with us, protected by industry-leading
                security protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-indigo-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 max-w-xl mx-auto">
            Join thousands of satisfied users and transform your digital
            experience today.
          </p>
          <button className="px-10 py-5 bg-teal-400 text-gray-900 font-bold rounded-full text-xl shadow-lg hover:bg-teal-300 transform hover:scale-105 transition duration-300 ease-in-out">
            Sign Up For Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center text-sm">
        <div className="container mx-auto px-6">
          &copy; {new Date().getFullYear()} Your Project Name. All rights
          reserved.
          <p className="mt-2">
            <a href="#" className="hover:text-white mx-2">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:text-white mx-2">
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
