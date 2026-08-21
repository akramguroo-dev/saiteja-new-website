import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa'
import logo from '../assets/Images/logo.jpg'
import '../css/footer.css'

const footerGroups = [
  {
    title: 'Services',
    links: [
      { text: 'Software Development', href: '#services' },
      { text: 'C2C Staffing Solutions', href: '#services' },
      { text: 'IT Consulting', href: '#services' },
      { text: 'Support & Maintenance', href: '#services' },
      { text: 'Cloud & DevOps', href: '#services' },
      { text: 'Cybersecurity Solutions', href: '#services' },
    ],
  },
  {
    title: 'Support',
    links: [
      { text: 'Help Center', href: '/help' },
      { text: 'FAQ', href: '/faq' },
      { text: 'Contact Us', href: '#contact' },
      { text: 'Technical Support', href: '/support' },
      { text: 'Privacy Policy', href: '/privacy' },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'About Us', href: '#about' },
      { text: 'Our Services', href: '#services' },
      { text: 'Careers', href: '#careers' },
      { text: 'Terms & Conditions', href: '/terms' },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Left Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Saiteja Infotech Logo" />
              <span className="footer-logo-text">SAITEJA INFOTECH</span>
            </div>
            <p className="footer-description">
              Empowering businesses with smart IT solutions and skilled professionals. Your trusted partner for software development, IT consulting, and C2C staffing services.
            </p>
            <div className="footer-contact">
              <p className="footer-email">
                info@saitejainfotechprivatelimited.com
              </p>
              <p className="footer-phone">
                +91 9686617096
              </p>
              <a href="https://wa.me/919686617096" className="footer-whatsapp">
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
              <div className="footer-address">
                <strong>Head Office</strong>
                <p>Tirupati, Hyderabad, Kurnool, India</p>
              </div>
            </div>
          </div>

          {/* Middle Sections */}
          {footerGroups.map((group) => (
            <div key={group.title} className="footer-column">
              <h3 className="footer-column-title">{group.title}</h3>
              <ul className="footer-links">
                {group.links.map((link) => (
                  <li key={link.text}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 SAITEJA INFOTECH PRIVATE LIMITED. All Rights Reserved.
          </p>
          <div className="footer-social">
            <span className="footer-social-text">Follow Us On</span>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com/people/Saiteja-Infotech-Private-Limited/61575798075215/?rdid=ku0EA19rhXPkdnC7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F187iw4f3on%2F" aria-label="Facebook" className="social-icon">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/saiteja_infotech_pvt_ltd" aria-label="Instagram" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/saiteja-infotech-private-limited/" aria-label="LinkedIn" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com/@saitejainfotechpvtltd" aria-label="YouTube" className="social-icon">
                <FaYoutube />
              </a>
              <a href="https://t.me/+RbtUQKbaKD1hYTY" aria-label="Telegram" className="social-icon">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
