import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../shared/module.css'
import './hotels.css'

const initialData = [
  { id: 1, name: 'Makkah Grand Hotel', city: 'Makkah', category: '5 Star', contact: '0555-111111' },
  { id: 2, name: 'Madinah Palace', city: 'Madinah', category: '4 Star', contact: '0555-222222' },
]

export default function HotelList() {
  const [items, setItems] = useState(initialData)
  const navigate = useNavigate()
  const handleDelete = (id) => { if (window.confirm('Delete this hotel?')) setItems(items.filter((i) => i.id !== id)) }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Hotels</h2>
        <button className="btn-primary" onClick={() => navigate('/hotels/add')}>+ Add Hotel</button>
      </div>
      <table className="data-table">
        <thead><tr><th>#</th><th>Hotel Name</th><th>City</th><th>Category</th><th>Contact</th><th>Actions</th></tr></thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td><td>{item.name}</td><td>{item.city}</td><td>{item.category}</td><td>{item.contact}</td>
              <td>
                <button className="btn-edit" onClick={() => navigate(`/hotels/edit/${item.id}`)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
