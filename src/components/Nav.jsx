import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#coursework', label: 'Coursework' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__mark">
          D<span className="nav__mark-dot">.</span>
        </a>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <button
          className="nav__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          border-bottom: 1px solid transparent;
          transition: border-color 0.25s ease, background 0.25s ease;
        }
        .nav--scrolled {
          border-color: var(--line);
          background: rgba(14, 18, 32, 0.86);
          backdrop-filter: blur(10px);
        }
        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }
        .nav__mark {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          text-decoration: none;
          color: var(--paper);
        }
        .nav__mark-dot { color: var(--amber); }
        .nav__links {
          display: flex;
          gap: 32px;
          font-family: var(--font-mono);
          font-size: 0.85rem;
        }
        .nav__links a {
          text-decoration: none;
          color: var(--muted);
          transition: color 0.15s ease;
        }
        .nav__links a:hover { color: var(--paper); }
        .nav__toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .nav__toggle span {
          width: 22px;
          height: 2px;
          background: var(--paper);
        }
        .nav__mobile {
          display: none;
        }
        @media (max-width: 720px) {
          .nav__links { display: none; }
          .nav__toggle { display: flex; }
          .nav__mobile {
            display: flex;
            flex-direction: column;
            gap: 2px;
            background: var(--bg-panel);
            border-bottom: 1px solid var(--line);
          }
          .nav__mobile a {
            padding: 14px 28px;
            text-decoration: none;
            color: var(--paper);
            font-family: var(--font-mono);
            font-size: 0.9rem;
            border-top: 1px solid var(--line);
          }
        }
      `}</style>
    </header>
  )
}
