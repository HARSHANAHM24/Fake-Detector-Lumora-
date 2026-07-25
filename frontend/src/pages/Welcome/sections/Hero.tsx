import "./Hero.css";

import Button from "../../../components/ui/Button";

function Hero() {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-tag">
          🌸 AI-Powered Evidence Investigation
        </p>

        <h1>
          Discover Truth
          <br />
          with Confidence
        </h1>

        <p className="hero-description">
          Verify claims, images and videos using
          explainable AI, trusted sources and
          transparent reasoning.
        </p>

        <div className="hero-buttons">

          <Button>
            Start Investigation
          </Button>

          <Button
            variant="secondary"
            onClick={scrollToFeatures}
          >
            Learn More
          </Button>

        </div>

      </div>

      <div className="hero-right">

        <div className="lumi-card">

          <div className="lumi-avatar">
            🤖
          </div>

          <h2>Lumi</h2>

          <p>
            Hello!
            <br />
            I'm your AI research companion.
            <br />
            Let's discover the truth together.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;