import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../shared/module.css'
import './careoff.css'

export default function CareOffEdit() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [form, setForm] = useState({ name: 'Ali Travels', contact: 'Ali Hassan', phone: '0300-1111111', email: '', city: 'Karachi', commission: '5' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); console.log('Updated Agent:', { id, ...form }); navigate('/careoff') }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Edit Agent #{id}</h2>
        <button className="btn-secondary" onClick={() => navigate('/careoff')}>← Back</button>
      </div>
      <form className="crm-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group"><label>Agency Name *</label><input name="name" value={form.name} onChange={handleChange} required /></div>
          <div className="form-group"><label>Contact Person *</label><input name="contact" value={form.contact} onChange={handleChange} required /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Phone *</label><input name="phone" value={form.phone} onChange={handleChange} required /></div>
          <div className="form-group"><label>Email</label><input name="email" type="email" value={form.email} onChange={handleChange} /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>City</label><input name="city" value={form.city} onChange={handleChange} /></div>
          <div className="form-group"><label>Commission %</label><input name="commission" type="number" value={form.commission} onChange={handleChange} /></div>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Update Agent</button>
          <button type="button" className="btn-secondary" onClick={() => navigate('/careoff')}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
