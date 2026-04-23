import { useState } from 'react'
import './dashboard.css'

const statCards = [
  {
    title: 'Vouchers',
    value: 128,
    icon: '🎫',
    bg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
  },
  {
    title: 'Hujjaj',
    value: 340,
    icon: '🕋',
    bg: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=400&q=80',
  },
  {
    title: 'Hotels',
    value: 24,
    icon: '🏨',
    bg: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80',
  },
  {
    title: 'Invoices',
    value: 87,
    icon: '🧾',
    bg: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80',
  },
]

const makkahData = {
  checkin:  { today: 42, tomorrow: 38 },
  checkout: { today: 29, tomorrow: 35 },
}

const madinahData = {
  checkin:  { today: 31, tomorrow: 27 },
  checkout: { today: 22, tomorrow: 19 },
}

const ksaData = {
  arrivals:   { today: 56, tomorrow: 61 },
  departures: { today: 48, tomorrow: 53 },
}

const SAR_RATE = 75.4

export default function Dashboard() {
  const [pkr, setPkr] = useState('')
  const [sar, setSar] = useState('')

  const handlePkrChange = (e) => {
    const val = e.target.value
    setPkr(val)
    setSar(val ? (parseFloat(val) / SAR_RATE).toFixed(2) : '')
  }

  const handleSarChange = (e) => {
    const val = e.target.value
    setSar(val)
    setPkr(val ? (parseFloat(val) * SAR_RATE).toFixed(2) : '')
  }

  return (
    <div className="dashboard-page">

      {/* ── Row 1: Stat Cards ── */}
      <div className="dash-section-title">Overview</div>
      <div className="stat-cards-row">
        {statCards.map((card) => (
          <div
            key={card.title}
            className="stat-card"
            style={{ backgroundImage: `url(${card.bg})` }}
          >
            <div className="stat-card-overlay" />
            <div className="stat-card-content">
              <span className="stat-icon">{card.icon}</span>
              <div className="stat-value">{card.value}</div>
              <div className="stat-title">{card.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Row 2: Makkah + KSA ── */}
      <div className="dash-section-title">Makkah &amp; KSA Status</div>
      <div className="info-cards-row">

        <div className="info-card makkah-card">
          <div className="info-card-header"><span>🕌</span> Makkah Check-in</div>
          <div className="info-card-body">
            <div className="day-stat">
              <span className="day-label">Today</span>
              <span className="day-value">{makkahData.checkin.today}</span>
            </div>
            <div className="day-divider" />
            <div className="day-stat">
              <span className="day-label">Tomorrow</span>
              <span className="day-value">{makkahData.checkin.tomorrow}</span>
            </div>
          </div>
        </div>

        <div className="info-card makkah-card">
          <div className="info-card-header"><span>🕌</span> Makkah Check-out</div>
          <div className="info-card-body">
            <div className="day-stat">
              <span className="day-label">Today</span>
              <span className="day-value">{makkahData.checkout.today}</span>
            </div>
            <div className="day-divider" />
            <div className="day-stat">
              <span className="day-label">Tomorrow</span>
              <span className="day-value">{makkahData.checkout.tomorrow}</span>
            </div>
          </div>
        </div>

        <div className="info-card ksa-card">
          <div className="info-card-header"><span>✈️</span> KSA Arrivals</div>
          <div className="info-card-body">
            <div className="day-stat">
              <span className="day-label">Today</span>
              <span className="day-value">{ksaData.arrivals.today}</span>
            </div>
            <div className="day-divider" />
            <div className="day-stat">
              <span className="day-label">Tomorrow</span>
              <span className="day-value">{ksaData.arrivals.tomorrow}</span>
            </div>
          </div>
        </div>

        <div className="info-card ksa-card">
          <div className="info-card-header"><span>✈️</span> KSA Departures</div>
          <div className="info-card-body">
            <div className="day-stat">
              <span className="day-label">Today</span>
              <span className="day-value">{ksaData.departures.today}</span>
            </div>
            <div className="day-divider" />
            <div className="day-stat">
              <span className="day-label">Tomorrow</span>
              <span className="day-value">{ksaData.departures.tomorrow}</span>
            </div>
          </div>
        </div>

      </div>

      {/* ── Row 3: Madinah + Conversion ── */}
      <div className="dash-section-title">Madinah &amp; Currency</div>
      <div className="info-cards-row">

        <div className="info-card madinah-card">
          <div className="info-card-header"><span>🌙</span> Madinah Check-in</div>
          <div className="info-card-body">
            <div className="day-stat">
              <span className="day-label">Today</span>
              <span className="day-value">{madinahData.checkin.today}</span>
            </div>
            <div className="day-divider" />
            <div className="day-stat">
              <span className="day-label">Tomorrow</span>
              <span className="day-value">{madinahData.checkin.tomorrow}</span>
            </div>
          </div>
        </div>

        <div className="info-card madinah-card">
          <div className="info-card-header"><span>🌙</span> Madinah Check-out</div>
          <div className="info-card-body">
            <div className="day-stat">
              <span className="day-label">Today</span>
              <span className="day-value">{madinahData.checkout.today}</span>
            </div>
            <div className="day-divider" />
            <div className="day-stat">
              <span className="day-label">Tomorrow</span>
              <span className="day-value">{madinahData.checkout.tomorrow}</span>
            </div>
          </div>
        </div>

        <div className="info-card conversion-card">
          <div className="info-card-header"><span>💱</span> Conversion Rate</div>
          <div className="conversion-rate-display">
            1 SAR = <strong>{SAR_RATE}</strong> PKR
          </div>
          <div className="conversion-inputs">
            <div className="conv-field">
              <label>PKR</label>
              <input
                type="number"
                placeholder="Enter PKR"
                value={pkr}
                onChange={handlePkrChange}
              />
            </div>
            <div className="conv-equals">=</div>
            <div className="conv-field">
              <label>SAR</label>
              <input
                type="number"
                placeholder="Enter SAR"
                value={sar}
                onChange={handleSarChange}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
