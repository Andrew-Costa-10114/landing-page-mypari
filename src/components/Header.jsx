import { Link } from 'react-router-dom'

export default function Header({ menuOpen, onMenuToggle }) {
  return (
    <header
      className={`jb-header${menuOpen ? ' jb-header--open' : ''}`}
    >
      <Link to="/" className="jb-logo" aria-label="MyPari home">
        <img
          className="jb-logo__img"
          src="/logo-mypari.png"
          alt=""
          width={270}
          height={72}
        />
      </Link>

      <nav id="mobile-nav" className="jb-nav" aria-label="Main">
        <Link to="/#why-my-pari">Why MyPari</Link>
        <Link to="/#about">About</Link>
        <Link to="/#faq">FAQ</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <div className="jb-header__actions">
        <Link to="/#waitlist" className="jb-btn jb-btn--primary">
          Join waitlist
        </Link>
      </div>

      <button
        type="button"
        className="jb-menu-btn"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={onMenuToggle}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
