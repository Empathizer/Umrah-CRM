import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../shared/module.css'
import './bookings.css'

export default function BookingEdit() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [form, setForm] = useState({ customer: 'Ahmed Ali', agent: 'Ali Travels', package: 'Ramadan Package 2025', bookingDate: '2025-01-01', totalAmount: '250000', paidAmount: '100000', status: 'Confirmed', passportNo: 'AB1234567', notes: '' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); console.log('Updated Booking:', { id, ...form }); navigate('/bookings') }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Edit Booking #{id}</h2>
        <button className="btn-secondary" onClick={() => navigate('/bookings')}>← Back</button>
      </div>
      <form className="crm-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group"><label>Customer *</label><input name="customer" value={form.customer} onChange={handleChange} required /></div>
          <div className="form-group"><label>Care Off Agent</label><input name="agent" value={form.agent} onChange={handleChange} /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Package *</label><input name="package" value={form.package} onChange={handleChange} required /></div>
          <div className="form-group"><label>Booking Date *</label><input name="bookingDate" type="date" value={form.bookingDate} onChange={handleChange} required /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Total Amount (PKR)</label><input name="totalAmount" type="number" value={form.totalAmount} onChange={handleChange} /></div>
          <div className="form-group"><label>Paid Amount (PKR)</label><input name="paidAmount" type="number" value={form.paidAmount} onChange={handleChange} /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Passport No</label><input name="passportNo" value={form.passportNo} onChange={handleChange} /></div>
          <div className="form-group"><label>Status</label>
            <select name="status" value={form.status} onChange={handleChange}>
              <option>Pending</option><option>Confirmed</option><option>Cancelled</option>
            </select>
          </div>
        </div>
        <div className="form-group"><label>Notes</label><textarea name="notes" value={form.notes} onChange={handleChange} rows={3} /></div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Update Booking</button>
          <button type="button" className="btn-secondary" onClick={() => navigate('/bookings')}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
