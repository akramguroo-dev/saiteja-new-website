import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Careers", to: "/careers" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={closeMenu}>
        <span className="brand-mark">S</span>

        <span>
          <strong>Saiteja</strong>
          <small>INFOTECH</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {NAV_LINKS.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>

      <Link className="header-cta" to="/contact">
        Let's Talk
        <ArrowRight size={16} />
      </Link>

      <button
        type="button"
        className="menu-toggle"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <Link key={link.to} to={link.to} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}

        <Link className="mobile-cta" to="/contact" onClick={closeMenu}>
          Let's Talk
          <ArrowRight size={16} />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
