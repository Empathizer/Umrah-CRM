import { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import './Sidebar.css'

const modules = [
  {
    label: 'Dashboard',
    icon: '🏠',
    base: '/dashboard',
    links: [],
  },
  {
    label: 'Vouchers',
    icon: '🎫',
    base: '/vouchers',
    links: [
      { label: 'Add Voucher', path: '/vouchers/add' },
      { label: 'Voucher List', path: '/vouchers' },
    ],
  },
  {
    label: 'Customers',
    icon: '👤',
    base: '/customers',
    links: [
      { label: 'Add Customer', path: '/customers/add' },
      { label: 'Customer List', path: '/customers' },
    ],
  },
  {
    label: 'Care Off (Agents)',
    icon: '🤝',
    base: '/careoff',
    links: [
      { label: 'Add Agent', path: '/careoff/add' },
      { label: 'Agent List', path: '/careoff' },
    ],
  },
  {
    label: 'Hotels',
    icon: '🏨',
    base: '/hotels',
    links: [
      { label: 'Add Hotel', path: '/hotels/add' },
      { label: 'Hotel List', path: '/hotels' },
    ],
  },
  {
    label: 'Transport',
    icon: '🚌',
    base: '/transport',
    links: [
      { label: 'Add Transport', path: '/transport/add' },
      { label: 'Transport List', path: '/transport' },
    ],
  },
  {
    label: 'Flights',
    icon: '✈️',
    base: '/flights',
    links: [
      { label: 'Add Flight', path: '/flights/add' },
      { label: 'Flight List', path: '/flights' },
    ],
  },
  {
    label: 'Groups / Packages',
    icon: '📦',
    base: '/groups',
    links: [
      { label: 'Add Group', path: '/groups/add' },
      { label: 'Group List', path: '/groups' },
    ],
  },
  {
    label: 'Bookings',
    icon: '📋',
    base: '/bookings',
    links: [
      { label: 'Add Booking', path: '/bookings/add' },
      { label: 'Booking List', path: '/bookings' },
    ],
  },
  {
    label: 'Reports',
    icon: '📊',
    base: '/reports',
    links: [
      { label: 'View Reports', path: '/reports' },
    ],
  },
]

export default function Sidebar() {
  const location = useLocation()
  const [openMenus, setOpenMenus] = useState(() => {
    const initial = {}
    modules.forEach((m) => {
      if (location.pathname.startsWith(m.base)) initial[m.base] = true
    })
    return initial
  })
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = (base) => {
    setOpenMenus((prev) => ({ ...prev, [base]: !prev[base] }))
  }

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {!collapsed && <span className="sidebar-brand">Umrah CRM</span>}
        <button className="sidebar-toggle" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? '»' : '«'}
        </button>
      </div>

      <nav className="sidebar-nav">
        {modules.map((mod) => {
          const isActive = location.pathname.startsWith(mod.base)
          const isOpen = openMenus[mod.base]

          return (
            <div key={mod.base} className="sidebar-module">
              <button
                className={`sidebar-module-btn ${isActive ? 'active' : ''}`}
                onClick={() => mod.links.length === 0 ? navigate(mod.base) : toggleMenu(mod.base)}
              >
                <span className="module-icon">{mod.icon}</span>
                {!collapsed && (
                  <>
                    <span className="module-label">{mod.label}</span>
                    {mod.links.length > 0 && (
                      <span className="module-arrow">{isOpen ? '▾' : '▸'}</span>
                    )}
                  </>
                )}
              </button>

              {!collapsed && isOpen && (
                <ul className="sidebar-submenu">
                  {mod.links.map((link) => (
                    <li key={link.path}>
                      <NavLink
                        to={link.path}
                        end={link.path === mod.base}
                        className={({ isActive }) => isActive ? 'submenu-link active' : 'submenu-link'}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
