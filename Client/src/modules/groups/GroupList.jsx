import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../shared/module.css'
import './groups.css'

const initialData = [
  { id: 1, name: 'Ramadan Package 2025', type: 'Umrah', duration: '15 Days', price: 250000, seats: 40 },
  { id: 2, name: 'Economy Umrah Jan', type: 'Umrah', duration: '10 Days', price: 180000, seats: 60 },
]

export default function GroupList() {
  const [items, setItems] = useState(initialData)
  const navigate = useNavigate()
  const handleDelete = (id) => { if (window.confirm('Delete this group?')) setItems(items.filter((i) => i.id !== id)) }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Groups / Packages</h2>
        <button className="btn-primary" onClick={() => navigate('/groups/add')}>+ Add Group</button>
      </div>
      <table className="data-table">
        <thead><tr><th>#</th><th>Package Name</th><th>Type</th><th>Duration</th><th>Price (PKR)</th><th>Seats</th><th>Actions</th></tr></thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td><td>{item.name}</td><td>{item.type}</td><td>{item.duration}</td>
              <td>{item.price.toLocaleString()}</td><td>{item.seats}</td>
              <td>
                <button className="btn-edit" onClick={() => navigate(`/groups/edit/${item.id}`)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
