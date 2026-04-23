import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../shared/module.css'
import './groups.css'

export default function GroupAdd() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', type: '', duration: '', departureDate: '', returnDate: '', seats: '', price: '', hotel: '', flight: '', description: '' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); console.log('New Group:', form); navigate('/groups') }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Add Group / Package</h2>
        <button className="btn-secondary" onClick={() => navigate('/groups')}>← Back</button>
      </div>
      <form className="crm-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group"><label>Package Name *</label><input name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Ramadan Package 2025" /></div>
          <div className="form-group"><label>Type *</label>
            <select name="type" value={form.type} onChange={handleChange} required>
              <option value="">Select Type</option>
              <option>Umrah</option><option>Hajj</option><option>Ziyarat</option><option>Custom</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Duration</label><input name="duration" value={form.duration} onChange={handleChange} placeholder="e.g. 15 Days" /></div>
          <div className="form-group"><label>Total Seats</label><input name="seats" type="number" value={form.seats} onChange={handleChange} placeholder="0" /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Departure Date</label><input name="departureDate" type="date" value={form.departureDate} onChange={handleChange} /></div>
          <div className="form-group"><label>Return Date</label><input name="returnDate" type="date" value={form.returnDate} onChange={handleChange} /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Price Per Person (PKR)</label><input name="price" type="number" value={form.price} onChange={handleChange} placeholder="0" /></div>
          <div className="form-group"><label>Hotel</label><input name="hotel" value={form.hotel} onChange={handleChange} placeholder="Hotel name" /></div>
        </div>
        <div className="form-group"><label>Flight</label><input name="flight" value={form.flight} onChange={handleChange} placeholder="Flight details" /></div>
        <div className="form-group"><label>Description</label><textarea name="description" value={form.description} onChange={handleChange} rows={3} placeholder="Package details..." /></div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Save Group</button>
          <button type="button" className="btn-secondary" onClick={() => navigate('/groups')}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
