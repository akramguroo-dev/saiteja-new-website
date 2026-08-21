import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

const FOOTER_LINKS = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Careers', href: '/careers' },
    { label: 'FAQ', href: '/faq' },
  ],
  Connect: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'LinkedIn', href: '#' },
    { label: 'WhatsApp', href: '#' },
  ],
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand footer-logo" href="/">
            <span className="brand-mark">S</span>

            <span>
              <strong>Saiteja</strong>
              <small>INFOTECH</small>
            </span>
          </a>

          <p>
            Technology, talent and digital solutions designed to help
            ambitious businesses move forward.
          </p>

          <a className="footer-contact-link" href="mailto:saitejainfotechprivatelimited@gmail.com">
            <Mail size={16} />
            saitejainfotechprivatelimited@gmail.com
          </a>
        </div>

        <div className="footer-links">
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="footer-column">
              <h3>{heading}</h3>

              {links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                  {link.label === 'LinkedIn' && (
                    <ArrowUpRight size={14} />
                  )}
                </a>
              ))}
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
          © {new Date().getFullYear()} Saiteja Infotech Private Limited.
          All rights reserved.
        </span>

        <div>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer