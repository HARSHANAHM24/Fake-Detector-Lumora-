import "./InvestigationResult.css";

interface InvestigationResultProps {
  claim: string;
}

function InvestigationResult({
  claim,
}: InvestigationResultProps) {
  return (
    <section className="investigation-result">

      <div className="result-header">
        <div>
          <p className="result-label">
            🔎 Investigation Result
          </p>

          <h2>
            Analysis Preview
          </h2>
        </div>

        <span className="demo-badge">
          DEMO
        </span>
      </div>


      <div className="claim-section">

        <p className="result-section-label">
          Investigated Claim
        </p>

        <div className="claim-box">
          "{claim}"
        </div>

      </div>


      <div className="assessment-section">

        <div className="assessment-card">

          <p className="result-section-label">
            Assessment
          </p>

          <div className="assessment-status">
            <span className="assessment-icon">
              ⚠️
            </span>

            <div>
              <strong>
                Analysis Preview
              </strong>

              <p>
                This is a demonstration result.
                The real AI investigation will be
                connected to the backend later.
              </p>
            </div>
          </div>

        </div>


        <div className="score-card">

          <p className="result-section-label">
            Credibility Score
          </p>

          <div className="score-value">
            72
            <span>/100</span>
          </div>

          <div className="score-bar">
            <div className="score-progress"></div>
          </div>

          <p className="score-note">
            Demo value — not an actual investigation result.
          </p>

        </div>

      </div>


      <div className="evidence-section">

        <p className="result-section-label">
          Evidence Summary
        </p>

        <p className="evidence-text">
          Lumora will eventually analyze the submitted
          claim, identify supporting and contradicting
          evidence, compare information across sources,
          and generate an explanation for the final
          assessment.
        </p>

      </div>


      <div className="sources-section">

        <p className="result-section-label">
          Sources
        </p>

        <div className="source-list">

          <div className="source-item">
            <span className="source-number">
              1
            </span>

            <div>
              <strong>
                Evidence source
              </strong>

              <p>
                Source information will appear here
                after backend integration.
              </p>
            </div>
          </div>


          <div className="source-item">
            <span className="source-number">
              2
            </span>

            <div>
              <strong>
                Verification source
              </strong>

              <p>
                Additional supporting information
                will appear here.
              </p>
            </div>
          </div>


          <div className="source-item">
            <span className="source-number">
              3
            </span>

            <div>
              <strong>
                Context source
              </strong>

              <p>
                Contextual evidence will appear here.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default InvestigationResult;