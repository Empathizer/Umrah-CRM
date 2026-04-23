import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../shared/module.css'
import './customers.css'

const initialData = [
  { id: 1, name: 'Ahmed Ali', phone: '0300-1234567', email: 'ahmed@example.com', city: 'Karachi' },
  { id: 2, name: 'Sara Khan', phone: '0321-7654321', email: 'sara@example.com', city: 'Lahore' },
]

export default function CustomerList() {
  const [customers, setCustomers] = useState(initialData)
  const navigate = useNavigate()

  const handleDelete = (id) => {
    if (window.confirm('Delete this customer?')) {
      setCustomers(customers.filter((c) => c.id !== id))
    }
  }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Customers</h2>
        <button className="btn-primary" onClick={() => navigate('/customers/add')}>+ Add Customer</button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>#</th><th>Name</th><th>Phone</th><th>Email</th><th>City</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c, i) => (
            <tr key={c.id}>
              <td>{i + 1}</td>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>{c.email}</td>
              <td>{c.city}</td>
              <td>
                <button className="btn-edit" onClick={() => navigate(`/customers/edit/${c.id}`)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
