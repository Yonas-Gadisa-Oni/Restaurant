import "../style/Navbar.css";

const navLinks = [
  { label: "HOME", href: "#" },
  { label: "MENU", href: "#menu" },
  { label: "ABOUT", href: "#about" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT", href: "#contact" },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          Maison Élian
        </a>

        <nav className="navbar-menu" aria-label="Main navigation">
          <div className="navbar-links">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`navbar-link ${
                  index === 0 ? "navbar-link-active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a href="#reservation" className="navbar-reserve">
            RESERVE
          </a>
        </nav>

        <button
          className="navbar-toggle"
          type="button"
          aria-label="Open navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;