import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../shared/module.css'
import './bookings.css'

const initialData = [
  { id: 1, bookingNo: 'BK-001', customer: 'Ahmed Ali', package: 'Ramadan Package 2025', agent: 'Ali Travels', amount: 250000, status: 'Confirmed' },
  { id: 2, bookingNo: 'BK-002', customer: 'Sara Khan', package: 'Economy Umrah Jan', agent: 'Noor Agency', amount: 180000, status: 'Pending' },
]

const statusColors = { Confirmed: '#22c55e', Pending: '#f59e0b', Cancelled: '#000000' }

export default function BookingList() {
  const [items, setItems] = useState(initialData)
  const navigate = useNavigate()
  const handleDelete = (id) => { if (window.confirm('Delete this booking?')) setItems(items.filter((i) => i.id !== id)) }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Bookings</h2>
        <button className="btn-primary" onClick={() => navigate('/bookings/add')}>+ Add Booking</button>
      </div>
      <table className="data-table">
        <thead><tr><th>#</th><th>Booking No</th><th>Customer</th><th>Package</th><th>Agent</th><th>Amount (PKR)</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td><td>{item.bookingNo}</td><td>{item.customer}</td><td>{item.package}</td><td>{item.agent}</td>
              <td>{item.amount.toLocaleString()}</td>
              <td><span style={{ color: statusColors[item.status], fontWeight: 600 }}>{item.status}</span></td>
              <td>
                <button className="btn-edit" onClick={() => navigate(`/bookings/edit/${item.id}`)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
