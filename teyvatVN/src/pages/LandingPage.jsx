import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="bg-gray-100 text-black min-h-screen px-6 pb-12">
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
      <section className="text-center mt-4">
        <img
          src="/your-hero-image.jpg"
          alt="Hero"
          className="w-full h-auto rounded-md"
        />
        <h1 className="text-3xl mt-4 font-semibold">
          Your story. Their world. Any universe.
        </h1>
        <p className="mt-2">
          Create custom Genshin Impact visual novel fanfics with endless
          possibilities — powered by Google Gemini ✦
        </p>
        <button className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          ➤ Choose Your Duo to Begin
        </button>
      </section>

      {/* How to Play */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">How To Play</h2>
        <ol className="list-decimal list-inside mt-2 space-y-2">
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
      <section id="about" className="mt-12">
        <h2 className="text-2xl font-bold">About Us</h2>
        <p className="mt-2">
          We’re four UCF students who teamed up to build something fun (and a
          little unhinged). Click our names to view our portfolios or GitHub
          profiles — we’d love to connect!
        </p>
        {/* Character icons or contributor images go here */}
      </section>

      {/* Footer */}
      <footer className="mt-12 text-xs text-center text-gray-600">
        Built for <strong>GemiKnights</strong> 2025. Powered by Google Gemini.
      </footer>
    </div>
  );
}

export default LandingPage;
