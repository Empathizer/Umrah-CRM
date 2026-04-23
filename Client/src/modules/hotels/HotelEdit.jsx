import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../shared/module.css'
import './hotels.css'

export default function HotelEdit() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [form, setForm] = useState({ name: 'Makkah Grand Hotel', city: 'Makkah', category: '5 Star', contact: '0555-111111', address: '', pricePerNight: '15000' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); console.log('Updated Hotel:', { id, ...form }); navigate('/hotels') }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Edit Hotel #{id}</h2>
        <button className="btn-secondary" onClick={() => navigate('/hotels')}>← Back</button>
      </div>
      <form className="crm-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group"><label>Hotel Name *</label><input name="name" value={form.name} onChange={handleChange} required /></div>
          <div className="form-group"><label>City *</label>
            <select name="city" value={form.city} onChange={handleChange} required>
              <option>Makkah</option><option>Madinah</option><option>Jeddah</option><option>Taif</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Category</label>
            <select name="category" value={form.category} onChange={handleChange}>
              <option>5 Star</option><option>4 Star</option><option>3 Star</option><option>Economy</option>
            </select>
          </div>
          <div className="form-group"><label>Contact</label><input name="contact" value={form.contact} onChange={handleChange} /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Price Per Night (PKR)</label><input name="pricePerNight" type="number" value={form.pricePerNight} onChange={handleChange} /></div>
          <div className="form-group"><label>Address</label><input name="address" value={form.address} onChange={handleChange} /></div>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Update Hotel</button>
          <button type="button" className="btn-secondary" onClick={() => navigate('/hotels')}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
