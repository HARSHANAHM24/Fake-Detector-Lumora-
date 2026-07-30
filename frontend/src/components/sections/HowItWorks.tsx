import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">

      <div className="how-it-works-header">

        <p className="section-tag">
          ✨ Simple. Transparent. Understandable.
        </p>

        <h2>
          How Lumora Works
        </h2>

        <p className="section-description">
          From a claim to a clear understanding,
          Lumora helps you investigate information
          step by step.
        </p>

      </div>

      <div className="steps-container">

        <div className="step-card">

          <div className="step-number">
            1
          </div>

          <h3>
            Submit
          </h3>

          <p>
            Enter a claim or upload an image
            or video you want to investigate.
          </p>

        </div>

        <div className="step-card">

          <div className="step-number">
            2
          </div>

          <h3>
            Investigate
          </h3>

          <p>
            Lumora researches the claim using
            relevant information and trusted sources.
          </p>

        </div>

        <div className="step-card">

          <div className="step-number">
            3
          </div>

          <h3>
            Analyze Evidence
          </h3>

          <p>
            Evidence is compared and analyzed
            to understand the credibility of the claim.
          </p>

        </div>

        <div className="step-card">

          <div className="step-number">
            4
          </div>

          <h3>
            Understand
          </h3>

          <p>
            Receive a clear result with evidence,
            sources, and a credibility score.
          </p>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;