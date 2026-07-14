import { NavLink, Link } from 'react-router-dom'
import { useTheme } from '../theme/ThemeContext'

// Top navigation pill. To add a page, add a route in App.jsx and an
// entry here. Labels are safe to edit.
const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}

export default function Nav() {
  const { theme, toggle } = useTheme()

  return (
    <nav className="nav">
      <Link to="/" className="nav-mark" aria-label="Home">
        CK<span>✳</span>
      </Link>
      {links.map((l) => (
        <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
          {l.label}
        </NavLink>
      ))}
      <button
        className="theme-toggle"
        onClick={toggle}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
    </nav>
  )
}
