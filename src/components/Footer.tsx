
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Link to="/" className="logo">
          <span className="logo-icon">▦</span>
          <span>
            Event<span className="logo-highlight">Connect</span>
          </span>
        </Link>

        <p>© 2026 EventConnect. All rights reserved.</p>
      </div>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="footer-social">
        <a
          href="https://github.com/Etsuba191/EventConnect"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          GH
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          in
        </a>
      </div>
    </footer>
  )
}

export default Footer
