import { NavLink, Link } from 'react-router-dom'

// Top navigation pill. To add a page, add a route in App.jsx and an
// entry here. Labels are safe to edit.
const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
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
    </nav>
  )
}
