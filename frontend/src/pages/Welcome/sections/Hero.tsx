import "./Hero.css";

import Lumi from "../../../components/lumi/Lumi";

interface HeroProps {
  onStartInvestigation: () => void;
}

function Hero({
  onStartInvestigation,
}: HeroProps) {
  const handleLearnMore = () => {
    document.getElementById("features")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-badge">
          🌸 AI-Powered Evidence Investigation
        </div>

        <h1 className="hero-title">
          Discover Truth
          <br />
          with Confidence
        </h1>

        <p className="hero-description">
          Verify claims, images and videos using explainable AI,
          trusted sources and transparent reasoning.
        </p>

        <div className="hero-actions">

          <button
            type="button"
            className="hero-primary-btn"
            onClick={onStartInvestigation}
          >
            Start Investigation
          </button>

          <button
            type="button"
            className="hero-secondary-btn"
            onClick={handleLearnMore}
          >
            Learn More
          </button>

        </div>

      </div>


      <div className="hero-visual">

        <Lumi />

      </div>

    </section>
  );
}

export default Hero;