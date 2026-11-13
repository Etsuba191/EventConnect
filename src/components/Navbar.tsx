
import { NavLink, Link } from 'react-router-dom'

type NavbarProps = {
  menuOpen: boolean
  onMenuToggle: () => void
  onNavigate: () => void
}

function Navbar({ menuOpen, onMenuToggle, onNavigate }: NavbarProps) {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <span className="logo-icon">▦</span>
        <span>
          Event<span className="logo-highlight">Connect</span>
        </span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={onMenuToggle}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="primary-navigation" className={`nav-links${menuOpen ? ' menu-open' : ''}`} onClick={onNavigate}>
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/events">
          Events
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>
      </nav>

      <Link to="/events" className="nav-button" onClick={onNavigate}>
        Get Started ↗
      </Link>
    </header>
  )
}

export default Navbar
