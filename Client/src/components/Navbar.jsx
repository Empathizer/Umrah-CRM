import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const modules = [
  { label: 'Customers', path: '/customers' },
  { label: 'Care Off', path: '/careoff' },
  { label: 'Hotels', path: '/hotels' },
  { label: 'Transport', path: '/transport' },
  { label: 'Flights', path: '/flights' },
  { label: 'Groups', path: '/groups' },
  { label: 'Bookings', path: '/bookings' },
  { label: 'Reports', path: '/reports' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span>Umrah CRM</span>
      </div>
      <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {modules.map((mod) => (
          <li key={mod.path}>
            <Link
              to={mod.path}
              className={location.pathname.startsWith(mod.path) ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {mod.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
