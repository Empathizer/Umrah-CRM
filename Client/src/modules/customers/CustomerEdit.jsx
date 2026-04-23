import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../shared/module.css'
import './customers.css'

export default function CustomerEdit() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [form, setForm] = useState({ name: 'Ahmed Ali', phone: '0300-1234567', email: 'ahmed@example.com', city: 'Karachi', address: '', notes: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Updated Customer:', { id, ...form })
    navigate('/customers')
  }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Edit Customer #{id}</h2>
        <button className="btn-secondary" onClick={() => navigate('/customers')}>← Back</button>
      </div>
      <form className="crm-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name *</label>
            <input name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone *</label>
            <input name="phone" value={form.phone} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>City</label>
            <input name="city" value={form.city} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label>Address</label>
          <input name="address" value={form.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Notes</label>
          <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Update Customer</button>
          <button type="button" className="btn-secondary" onClick={() => navigate('/customers')}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
