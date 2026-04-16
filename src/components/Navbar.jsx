import { useState, useEffect } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Certifications', href: '#certifications' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>
          HF
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMobile}>{item.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="navbar-cta" onClick={closeMobile}>
              Contact
            </a>
          </li>
          {mobileOpen && (
            <li>
              <button 
                onClick={closeMobile}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--text-muted)', 
                  fontSize: '1rem',
                  cursor: 'pointer',
                  marginTop: '16px'
                }}
              >
                ✕ Close
              </button>
            </li>
          )}
        </ul>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
