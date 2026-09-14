import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('theme-dim', !dark)
  }, [dark])

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand">
          Sania Ghosh <span aria-hidden="true">✦</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDark((d) => !d)}
            aria-pressed={!dark}
            aria-label="Toggle dim theme"
            title="Toggle dim theme"
          >
            {dark ? '☾' : '☀'}
          </button>

          <button
            type="button"
            className="navbar__burger"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`navbar__mobile ${open ? 'is-open' : ''}`}
        aria-label="Mobile"
        hidden={!open}
      >
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
