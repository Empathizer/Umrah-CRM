import { useState } from 'react'
import './Topbar.css'

export default function Topbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="topbar">
      <div className="topbar-logo">
        <span className="logo-icon">🕋</span>
        <span className="logo-text">Umrah <strong>CRM</strong></span>
      </div>

      <div className="topbar-right">
        <div className="topbar-profile" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <div className="profile-avatar">A</div>
          <div className="profile-info">
            <span className="profile-name">Admin</span>
            <span className="profile-role">Super Admin</span>
          </div>
          <span className="profile-arrow">▾</span>
        </div>

        {dropdownOpen && (
          <div className="profile-dropdown">
            <div className="dropdown-item">👤 My Profile</div>
            <div className="dropdown-item">⚙️ Settings</div>
            <div className="dropdown-divider" />
            <div className="dropdown-item logout">🚪 Logout</div>
          </div>
        )}
      </div>
    </header>
  )
}
