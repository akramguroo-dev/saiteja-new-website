import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home">
          <span className="brand-mark">S</span>
          <span>
            <strong>Saiteja</strong>
            <small>INFOTECH</small>
          </span>
        </a>

        <nav>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Let's Talk <ArrowRight size={16} />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div id="mobile-nav" className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="mobile-cta" href="#contact" onClick={() => setIsOpen(false)}>
          Let's Talk <ArrowRight size={16} />
        </a>
      </div>
    </>
  )
}

export default Navbar