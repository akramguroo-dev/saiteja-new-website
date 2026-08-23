import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const FOOTER_LINKS = {
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Careers", to: "/careers" },
    { label: "FAQ", to: "/faq" },
  ],

  Connect: [
    { label: "Contact Us", to: "/contact" },
    { label: "LinkedIn", href: "#" },
    { label: "WhatsApp", href: "#" },
  ],
};

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand footer-logo" to="/">
            <span className="brand-mark">S</span>

            <span>
              <strong>Saiteja</strong>
              <small>INFOTECH</small>
            </span>
          </Link>

          <p>
            Technology, talent and digital solutions designed to help ambitious
            businesses move forward.
          </p>

          <a
            className="footer-contact-link"
            href="mailto:saitejainfotechprivatelimited@gmail.com"
          >
            <Mail size={16} />
            saitejainfotechprivatelimited@gmail.com
          </a>
        </div>

        <div className="footer-links">
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="footer-column">
              <h3>{heading}</h3>

              {links.map((link) =>
                link.to ? (
                  <Link key={link.label} to={link.to}>
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.label} href={link.href}>
                    {link.label}
                    {link.label === "LinkedIn" && <ArrowUpRight size={14} />}
                  </a>
                ),
              )}
            </div>
          ))}
        </div>

        <div className="footer-details">
          <h3>Get in touch</h3>

          <a href="tel:+910000000000">
            <Phone size={16} />
            +91 XXXXX XXXXX
          </a>

          <div>
            <MapPin size={16} />

            <span>
              Saiteja Infotech Private Limited
              <br />
              India
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Saiteja Infotech Private Limited. All
          rights reserved.
        </span>

        <div>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
