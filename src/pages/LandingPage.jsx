import { Link } from "react-router";
import websiteLogo from "../assets/website-logo.png";

const Destinations = [
  { name: "Barcelona", emoji: "🏖️", tag: "Mediterranean charm" },
  { name: "Amsterdam", emoji: "🚲", tag: "Canals & culture" },
  { name: "Paris", emoji: "🗼", tag: "Timeless romance" },
  { name: "Rome", emoji: "🏛️", tag: "Ancient wonders" },
  { name: "Santorini", emoji: "🌅", tag: "Island sunsets" },
  { name: "Prague", emoji: "🏰", tag: "Fairytale streets" },
  { name: "Vienna", emoji: "🎻", tag: "Classical elegance" },
  { name: "Reykjavik", emoji: "❄️", tag: "Nordic adventures" },
  { name: "Dubrovnik", emoji: "⚓", tag: "Adriatic escapes" },
  { name: "Interlaken", emoji: "⛰️", tag: "Alpine scenery" },
];

const Features = [
  {
    icon: "🏡",
    title: "Unique stays",
    desc: "From city apartments to beachfront villas — find a home that fits your trip.",
  },
  {
    icon: "🔒",
    title: "Safe & secure",
    desc: "Every listing is reviewed. Your booking is protected end-to-end.",
  },
  {
    icon: "💬",
    title: "Talk to hosts",
    desc: "Message hosts directly and get local tips before you even arrive.",
  },
];

function LandingPage() {
  return (
    <div className="landing">
      <section className="landing-hero">
        <div className="landing-hero-overlay" />
        <div className="landing-hero-content">
          <img src={websiteLogo} alt="AirADB logo" className="landing-logo" />
          <h1 className="landing-headline">Find your next perfect stay</h1>
          <p className="landing-sub">
            Thousands of unique homes across Europe and beyond — handpicked for
            every kind of traveller.
          </p>
          <Link to="/listings" className="landing-cta">
            Explore listings
          </Link>
        </div>
      </section>

      <section className="landing-features">
        <h2 className="landing-section-title">Why AirADB?</h2>
        <div className="landing-features-grid">
          {Features.map((f) => (
            <div key={f.title} className="landing-feature-card">
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-destinations">
        <h2 className="landing-section-title">Popular destinations</h2>
        <div className="landing-dest-grid">
          {Destinations.map((d) => (
            <Link to="/listings" key={d.name} className="landing-dest-card">
              <span className="dest-emoji">{d.emoji}</span>
              <div>
                <p className="dest-name">{d.name}</p>
                <p className="dest-tag">{d.tag}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="landing-host-cta">
        <div className="landing-host-inner">
          <h2>Have a space to share?</h2>
          <p>Join hundreds of hosts earning with AirADB. It's free to list.</p>
          <Link to="/host/new" className="landing-host-btn">
            Add a Listing
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
