import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../shared/module.css'
import './careoff.css'

export default function CareOffAdd() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', contact: '', phone: '', email: '', city: '', commission: '' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); console.log('New Agent:', form); navigate('/careoff') }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Add Care Off Agent</h2>
        <button className="btn-secondary" onClick={() => navigate('/careoff')}>← Back</button>
      </div>
      <form className="crm-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group"><label>Agency Name *</label><input name="name" value={form.name} onChange={handleChange} required placeholder="Agency name" /></div>
          <div className="form-group"><label>Contact Person *</label><input name="contact" value={form.contact} onChange={handleChange} required placeholder="Contact person" /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Phone *</label><input name="phone" value={form.phone} onChange={handleChange} required placeholder="03XX-XXXXXXX" /></div>
          <div className="form-group"><label>Email</label><input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>City</label><input name="city" value={form.city} onChange={handleChange} placeholder="City" /></div>
          <div className="form-group"><label>Commission %</label><input name="commission" type="number" value={form.commission} onChange={handleChange} placeholder="0" /></div>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Save Agent</button>
          <button type="button" className="btn-secondary" onClick={() => navigate('/careoff')}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
