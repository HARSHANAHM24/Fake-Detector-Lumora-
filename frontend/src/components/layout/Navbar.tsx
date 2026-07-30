import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((previousValue) => !previousValue);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    closeMenu();

    if (sectionId === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <button
        type="button"
        className="navbar-logo"
        onClick={() => scrollToSection("top")}
        aria-label="Go to the top of the Lumora page"
      >
        <span className="logo-icon">🌸</span>
        <span className="logo-text">Lumora</span>
      </button>

      <button
        type="button"
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="navbar-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        id="navbar-menu"
        className={`navbar-menu ${isMenuOpen ? "open" : ""}`}
      >
        <ul className="navbar-links">
          <li>
            <button
              type="button"
              className="nav-link"
              onClick={() => scrollToSection("top")}
            >
              Discover
            </button>
          </li>

          <li>
            <button
              type="button"
              className="nav-link"
              onClick={() => scrollToSection("features")}
            >
              Investigate
            </button>
          </li>

          <li>
            <button
              type="button"
              className="nav-link"
              onClick={closeMenu}
            >
              History
            </button>
          </li>

          <li>
            <button
              type="button"
              className="nav-link"
              onClick={() => scrollToSection("why-lumora")}
            >
              About
            </button>
          </li>
        </ul>

        <div className="navbar-actions">
          <button
            type="button"
            className="login-btn"
            onClick={closeMenu}
          >
            Login
          </button>

          <a
            className="github-btn"
            href="https://github.com/HARSHANAHM24/Fake-Detector-Lumora-"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;