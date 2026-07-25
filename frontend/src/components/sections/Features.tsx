import "./Features.css";

function Features() {
  return (
    <section
      id="features"
      className="features"
    >

      <h2>
        What Can Lumora Investigate?
      </h2>

      <div className="features-grid">

        <div className="feature-card">

          <h3>
            🔍 Claim Investigation
          </h3>

          <p>
            Analyze claims and compare them
            with relevant evidence.
          </p>

        </div>

        <div className="feature-card">

          <h3>
            🖼️ Image Verification
          </h3>

          <p>
            Investigate the context and
            authenticity of images.
          </p>

        </div>

        <div className="feature-card">

          <h3>
            🎥 Video Investigation
          </h3>

          <p>
            Analyze video content and
            investigate misleading claims.
          </p>

        </div>

        <div className="feature-card">

          <h3>
            📚 Evidence Timeline
          </h3>

          <p>
            Understand how a claim appeared,
            spread, and evolved over time.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;