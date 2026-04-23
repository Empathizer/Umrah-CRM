import '../shared/module.css'
import './reports.css'

export default function Reports() {
  const cards = [
    { title: 'Total Customers', value: '124', color: '#1d4ed8' },
    { title: 'Total Bookings', value: '87', color: '#22c55e' },
    { title: 'Confirmed Bookings', value: '65', color: '#0ea5e9' },
    { title: 'Pending Bookings', value: '22', color: '#f59e0b' },
    { title: 'Total Revenue (PKR)', value: '18,750,000', color: '#000000' },
    { title: 'Active Packages', value: '8', color: '#06b6d4' },
  ]

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Reports</h2>
      </div>
      <div className="reports-grid">
        {cards.map((card) => (
          <div key={card.title} className="report-card" style={{ borderLeft: `4px solid ${card.color}` }}>
            <div className="report-value" style={{ color: card.color }}>{card.value}</div>
            <div className="report-label">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
