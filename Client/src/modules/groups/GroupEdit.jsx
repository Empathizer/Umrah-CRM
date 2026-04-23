import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../shared/module.css'
import './groups.css'

export default function GroupEdit() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [form, setForm] = useState({ name: 'Ramadan Package 2025', type: 'Umrah', duration: '15 Days', departureDate: '2025-03-01', returnDate: '2025-03-15', seats: '40', price: '250000', hotel: 'Makkah Grand Hotel', flight: 'PK-743', description: '' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); console.log('Updated Group:', { id, ...form }); navigate('/groups') }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Edit Group #{id}</h2>
        <button className="btn-secondary" onClick={() => navigate('/groups')}>← Back</button>
      </div>
      <form className="crm-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group"><label>Package Name *</label><input name="name" value={form.name} onChange={handleChange} required /></div>
          <div className="form-group"><label>Type *</label>
            <select name="type" value={form.type} onChange={handleChange} required>
              <option>Umrah</option><option>Hajj</option><option>Ziyarat</option><option>Custom</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Duration</label><input name="duration" value={form.duration} onChange={handleChange} /></div>
          <div className="form-group"><label>Total Seats</label><input name="seats" type="number" value={form.seats} onChange={handleChange} /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Departure Date</label><input name="departureDate" type="date" value={form.departureDate} onChange={handleChange} /></div>
          <div className="form-group"><label>Return Date</label><input name="returnDate" type="date" value={form.returnDate} onChange={handleChange} /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Price Per Person (PKR)</label><input name="price" type="number" value={form.price} onChange={handleChange} /></div>
          <div className="form-group"><label>Hotel</label><input name="hotel" value={form.hotel} onChange={handleChange} /></div>
        </div>
        <div className="form-group"><label>Flight</label><input name="flight" value={form.flight} onChange={handleChange} /></div>
        <div className="form-group"><label>Description</label><textarea name="description" value={form.description} onChange={handleChange} rows={3} /></div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Update Group</button>
          <button type="button" className="btn-secondary" onClick={() => navigate('/groups')}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
