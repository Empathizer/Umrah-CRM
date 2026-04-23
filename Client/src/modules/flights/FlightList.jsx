import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../shared/module.css'
import './flights.css'

const initialData = [
  { id: 1, airline: 'PIA', flightNo: 'PK-743', from: 'Karachi', to: 'Jeddah', date: '2025-01-15', seats: 200 },
  { id: 2, airline: 'Emirates', flightNo: 'EK-601', from: 'Lahore', to: 'Dubai', date: '2025-01-20', seats: 300 },
]

export default function FlightList() {
  const [items, setItems] = useState(initialData)
  const navigate = useNavigate()
  const handleDelete = (id) => { if (window.confirm('Delete this flight?')) setItems(items.filter((i) => i.id !== id)) }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Flights</h2>
        <button className="btn-primary" onClick={() => navigate('/flights/add')}>+ Add Flight</button>
      </div>
      <table className="data-table">
        <thead><tr><th>#</th><th>Airline</th><th>Flight No</th><th>From</th><th>To</th><th>Date</th><th>Seats</th><th>Actions</th></tr></thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td><td>{item.airline}</td><td>{item.flightNo}</td><td>{item.from}</td><td>{item.to}</td><td>{item.date}</td><td>{item.seats}</td>
              <td>
                <button className="btn-edit" onClick={() => navigate(`/flights/edit/${item.id}`)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
