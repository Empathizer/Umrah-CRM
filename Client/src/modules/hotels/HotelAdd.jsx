import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../shared/module.css'
import './hotels.css'

export default function HotelAdd() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', city: '', category: '', contact: '', address: '', pricePerNight: '' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); console.log('New Hotel:', form); navigate('/hotels') }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Add Hotel</h2>
        <button className="btn-secondary" onClick={() => navigate('/hotels')}>← Back</button>
      </div>
      <form className="crm-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group"><label>Hotel Name *</label><input name="name" value={form.name} onChange={handleChange} required placeholder="Hotel name" /></div>
          <div className="form-group"><label>City *</label>
            <select name="city" value={form.city} onChange={handleChange} required>
              <option value="">Select City</option>
              <option>Makkah</option><option>Madinah</option><option>Jeddah</option><option>Taif</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Category</label>
            <select name="category" value={form.category} onChange={handleChange}>
              <option value="">Select Category</option>
              <option>5 Star</option><option>4 Star</option><option>3 Star</option><option>Economy</option>
            </select>
          </div>
          <div className="form-group"><label>Contact</label><input name="contact" value={form.contact} onChange={handleChange} placeholder="Phone number" /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Price Per Night (PKR)</label><input name="pricePerNight" type="number" value={form.pricePerNight} onChange={handleChange} placeholder="0" /></div>
          <div className="form-group"><label>Address</label><input name="address" value={form.address} onChange={handleChange} placeholder="Hotel address" /></div>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Save Hotel</button>
          <button type="button" className="btn-secondary" onClick={() => navigate('/hotels')}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
