import { NavLink, Link } from 'react-router-dom'
import { site } from '../content/site'

const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
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
      <a href={`mailto:${site.email}`} className="nav-contact">
        Contact
      </a>
    </nav>
  )
}
