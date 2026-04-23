import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../shared/module.css'
import './transport.css'

export default function TransportEdit() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [form, setForm] = useState({ company: 'Al-Haramain Transport', type: 'Bus', capacity: '50', contact: '0555-333333', route: 'Makkah - Madinah', pricePerSeat: '5000' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); console.log('Updated Transport:', { id, ...form }); navigate('/transport') }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Edit Transport #{id}</h2>
        <button className="btn-secondary" onClick={() => navigate('/transport')}>← Back</button>
      </div>
      <form className="crm-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group"><label>Company Name *</label><input name="company" value={form.company} onChange={handleChange} required /></div>
          <div className="form-group"><label>Vehicle Type *</label>
            <select name="type" value={form.type} onChange={handleChange} required>
              <option>Bus</option><option>Van</option><option>Car</option><option>Coaster</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Capacity (Seats)</label><input name="capacity" type="number" value={form.capacity} onChange={handleChange} /></div>
          <div className="form-group"><label>Contact</label><input name="contact" value={form.contact} onChange={handleChange} /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Route</label><input name="route" value={form.route} onChange={handleChange} /></div>
          <div className="form-group"><label>Price Per Seat (PKR)</label><input name="pricePerSeat" type="number" value={form.pricePerSeat} onChange={handleChange} /></div>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Update Transport</button>
          <button type="button" className="btn-secondary" onClick={() => navigate('/transport')}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
