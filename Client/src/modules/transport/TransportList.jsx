import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../shared/module.css'
import './transport.css'

const initialData = [
  { id: 1, company: 'Al-Haramain Transport', type: 'Bus', capacity: 50, contact: '0555-333333' },
  { id: 2, company: 'Makkah Taxi Co.', type: 'Van', capacity: 14, contact: '0555-444444' },
]

export default function TransportList() {
  const [items, setItems] = useState(initialData)
  const navigate = useNavigate()
  const handleDelete = (id) => { if (window.confirm('Delete this transport?')) setItems(items.filter((i) => i.id !== id)) }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Transport</h2>
        <button className="btn-primary" onClick={() => navigate('/transport/add')}>+ Add Transport</button>
      </div>
      <table className="data-table">
        <thead><tr><th>#</th><th>Company</th><th>Type</th><th>Capacity</th><th>Contact</th><th>Actions</th></tr></thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td><td>{item.company}</td><td>{item.type}</td><td>{item.capacity}</td><td>{item.contact}</td>
              <td>
                <button className="btn-edit" onClick={() => navigate(`/transport/edit/${item.id}`)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
