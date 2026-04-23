import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../shared/module.css'
import './customers.css'

export default function CustomerAdd() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', address: '', notes: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('New Customer:', form)
    navigate('/customers')
  }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Add Customer</h2>
        <button className="btn-secondary" onClick={() => navigate('/customers')}>← Back</button>
      </div>
      <form className="crm-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name *</label>
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Enter full name" />
          </div>
          <div className="form-group">
            <label>Phone *</label>
            <input name="phone" value={form.phone} onChange={handleChange} required placeholder="03XX-XXXXXXX" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input name="city" value={form.city} onChange={handleChange} placeholder="City" />
          </div>
        </div>
        <div className="form-group">
          <label>Address</label>
          <input name="address" value={form.address} onChange={handleChange} placeholder="Full address" />
        </div>
        <div className="form-group">
          <label>Notes</label>
          <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="Additional notes..." />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Save Customer</button>
          <button type="button" className="btn-secondary" onClick={() => navigate('/customers')}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
