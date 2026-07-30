import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">🌸</span>
            <span>Lumora</span>
          </div>

          <p>
            Illuminate every claim with transparent evidence,
            trusted sources, and understandable explanations.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-link-group">
            <h3>Explore</h3>

            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer-link-group">
            <h3>Project</h3>

            <a
              href="https://github.com/HARSHANAHM24/Fake-Detector-Lumora-"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span>Documentation</span>
            <span>Privacy</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Lumora. Built to make online information
          easier to understand.
        </p>
      </div>
    </footer>
  );
}

export default Footer;