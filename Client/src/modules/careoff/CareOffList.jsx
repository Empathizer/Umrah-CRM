import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../shared/module.css'
import './careoff.css'

const initialData = [
  { id: 1, name: 'Ali Travels', contact: 'Ali Hassan', phone: '0300-1111111', city: 'Karachi' },
  { id: 2, name: 'Noor Agency', contact: 'Noor Ahmed', phone: '0321-2222222', city: 'Lahore' },
]

export default function CareOffList() {
  const [items, setItems] = useState(initialData)
  const navigate = useNavigate()

  const handleDelete = (id) => {
    if (window.confirm('Delete this agent?')) setItems(items.filter((i) => i.id !== id))
  }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Care Off (Agents)</h2>
        <button className="btn-primary" onClick={() => navigate('/careoff/add')}>+ Add Agent</button>
      </div>
      <table className="data-table">
        <thead>
          <tr><th>#</th><th>Agency Name</th><th>Contact Person</th><th>Phone</th><th>City</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td><td>{item.name}</td><td>{item.contact}</td><td>{item.phone}</td><td>{item.city}</td>
              <td>
                <button className="btn-edit" onClick={() => navigate(`/careoff/edit/${item.id}`)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
