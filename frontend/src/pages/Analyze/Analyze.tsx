import "./Analyze.css";

function Analyze() {
  return (
    <main className="analyze-page">

      <section className="analyze-hero">

        <p className="analyze-tag">
          🔎 Evidence Investigation
        </p>

        <h1>
          What would you like to investigate?
        </h1>

        <p className="analyze-description">
          Explore claims, images, videos, and URLs with
          evidence-based investigation.
        </p>

      </section>

      <section className="investigation-box">

        <div className="input-section">

          <label htmlFor="investigation-input">
            Enter a claim or information
          </label>

          <textarea
            id="investigation-input"
            placeholder="Paste a claim, statement, URL, or any information you want to investigate..."
          />

        </div>

        <button
          type="button"
          className="investigate-button"
        >
          🔍 Investigate
        </button>

        <div className="upload-divider">
          <span>OR</span>
        </div>

        <div className="upload-options">

          <button
            type="button"
            className="upload-card"
          >
            <span className="upload-icon">📷</span>

            <span className="upload-title">
              Upload Image
            </span>

            <span className="upload-description">
              Investigate an image
            </span>
          </button>

          <button
            type="button"
            className="upload-card"
          >
            <span className="upload-icon">🎥</span>

            <span className="upload-title">
              Upload Video
            </span>

            <span className="upload-description">
              Investigate a video
            </span>
          </button>

        </div>

      </section>

    </main>
  );
}

export default Analyze;