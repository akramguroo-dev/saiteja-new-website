import { Menu, X, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="/" onClick={closeMenu}>
        <span className="brand-mark">S</span>

        <span>
          <strong>Saiteja</strong>
          <small>INFOTECH</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="/contact">
        Let's Talk
        <ArrowRight size={16} />
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}

        <a className="mobile-cta" href="/contact" onClick={closeMenu}>
          Let's Talk
          <ArrowRight size={16} />
        </a>
      </div>
    </header>
  )
}

export default Navbar