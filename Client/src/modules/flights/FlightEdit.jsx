import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../shared/module.css'
import './flights.css'

export default function FlightEdit() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [form, setForm] = useState({ airline: 'PIA', flightNo: 'PK-743', from: 'Karachi', to: 'Jeddah', date: '2025-01-15', departureTime: '08:00', arrivalTime: '12:00', seats: '200', pricePerSeat: '80000' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); console.log('Updated Flight:', { id, ...form }); navigate('/flights') }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Edit Flight #{id}</h2>
        <button className="btn-secondary" onClick={() => navigate('/flights')}>← Back</button>
      </div>
      <form className="crm-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group"><label>Airline *</label><input name="airline" value={form.airline} onChange={handleChange} required /></div>
          <div className="form-group"><label>Flight No *</label><input name="flightNo" value={form.flightNo} onChange={handleChange} required /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>From *</label><input name="from" value={form.from} onChange={handleChange} required /></div>
          <div className="form-group"><label>To *</label><input name="to" value={form.to} onChange={handleChange} required /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Date *</label><input name="date" type="date" value={form.date} onChange={handleChange} required /></div>
          <div className="form-group"><label>Departure Time</label><input name="departureTime" type="time" value={form.departureTime} onChange={handleChange} /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Arrival Time</label><input name="arrivalTime" type="time" value={form.arrivalTime} onChange={handleChange} /></div>
          <div className="form-group"><label>Total Seats</label><input name="seats" type="number" value={form.seats} onChange={handleChange} /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Price Per Seat (PKR)</label><input name="pricePerSeat" type="number" value={form.pricePerSeat} onChange={handleChange} /></div>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Update Flight</button>
          <button type="button" className="btn-secondary" onClick={() => navigate('/flights')}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
