import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="bg-gray-100 text-black min-h-screen px-6 pb-12 font-sans">
      {/* Nav */}
      <nav className="flex justify-end space-x-4 text-sm pt-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <a href="#about" className="hover:underline">
          About
        </a>
      </nav>

      {/* Hero */}
      <section className="text-center mt-12">
        <h1 className="text-4xl font-bold mb-3">
          Your story. Their world. Any universe.
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
          Create custom Genshin Impact visual novel fanfics with endless
          possibilities — powered by Google Gemini ✦
        </p>
        <Link
          to="/characters"
          className="inline-block mt-2 px-6 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 transition"
        >
          ➤ Choose Your Duo to Begin
        </Link>
      </section>

      {/* How to Play */}
      <section className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-3">How To Play</h2>
        <ol className="list-decimal list-inside space-y-2 text-base text-gray-800">
          <li>
            <strong>Choose 2 Characters</strong> – Pick your Genshin duo to star
            in the story.
          </li>
          <li>
            <strong>Set the Scene</strong> – Type in any setting you can imagine
            — no limits.
          </li>
          <li>
            <strong>Generate & Play</strong> – Watch your AI-powered visual
            novel unfold.
          </li>
          <li>
            <strong>Branch the Story</strong> – Shape the plot or regenerate for
            twists!
          </li>
        </ol>
      </section>

      {/* About Us */}
      <section id="about" className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-3">About Us</h2>
        <p className="text-base text-gray-800">
          We’re four UCF students who teamed up to build something fun (and a
          little unhinged). Click our names to view our portfolios or GitHub
          profiles — we’d love to connect!
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-xs text-center text-gray-600 border-t border-gray-200 pt-4">
        Built for <strong>GemiKnights</strong> 2025. Powered by Google Gemini.
      </footer>
    </div>
  );
}

export default LandingPage;
