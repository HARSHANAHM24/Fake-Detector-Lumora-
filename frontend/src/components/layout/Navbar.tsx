import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">🌸</span>
        <span className="logo-text">Lumora</span>
      </div>

      <ul className="navbar-links">
        <li>Discover</li>
        <li>Investigate</li>
        <li>History</li>
        <li>About</li>
      </ul>

      <div className="navbar-actions">
        <button className="login-btn">Login</button>
        <button className="github-btn">GitHub</button>
      </div>
    </nav>
  );
}

export default Navbar;