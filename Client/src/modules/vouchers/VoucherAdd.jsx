import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../shared/module.css'
import './vouchers.css'

const emptyForm = {
  // Customer
  customerName: '',
  customerPhone: '',
  passportNo: '',
  nationality: '',
  // KSA Arrival
  arrivalFlight: '',
  arrivalDate: '',
  arrivalTime: '',
  arrivalAirport: '',
  // KSA Departure
  departureFlight: '',
  departureDate: '',
  departureTime: '',
  departureAirport: '',
  // Transport
  transportCompany: '',
  vehicleType: '',
  transportRoute: '',
  driverName: '',
  driverPhone: '',
  // Hotel
  makkahHotel: '',
  makkahCheckin: '',
  makkahCheckout: '',
  makkahRoomType: '',
  madinahHotel: '',
  madinahCheckin: '',
  madinahCheckout: '',
  madinahRoomType: '',
  // Notes
  notes: '',
}

export default function VoucherAdd() {
  const navigate = useNavigate()
  const [form, setForm] = useState(emptyForm)
  const [activeSection, setActiveSection] = useState(0)

  const sections = [
    { label: 'Customer', icon: '👤' },
    { label: 'KSA Arrival', icon: '🛬' },
    { label: 'KSA Departure', icon: '🛫' },
    { label: 'Transport', icon: '🚌' },
    { label: 'Hotel', icon: '🏨' },
  ]

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const voucherNo = `VCH-${Date.now().toString().slice(-6)}`
    const invoiceNo = `INV-${Date.now().toString().slice(-6)}`
    const createdDate = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
    navigate('/vouchers/invoice', { state: { voucherNo, invoiceNo, createdDate, ...form } })
  }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>🎫 Create New Voucher</h2>
        <button className="btn-secondary" onClick={() => navigate('/vouchers')}>← Back</button>
      </div>

      {/* Section Tabs */}
      <div className="voucher-tabs">
        {sections.map((sec, i) => (
          <button
            key={i}
            type="button"
            className={`voucher-tab ${activeSection === i ? 'active' : ''}`}
            onClick={() => setActiveSection(i)}
          >
            <span>{sec.icon}</span> {sec.label}
          </button>
        ))}
      </div>

      <form className="voucher-form" onSubmit={handleSubmit}>

        {/* ── Section 0: Customer ── */}
        {activeSection === 0 && (
          <div className="voucher-section">
            <div className="voucher-section-title">👤 Customer Information</div>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input name="customerName" value={form.customerName} onChange={handleChange} required placeholder="Customer full name" />
              </div>
              <div className="form-group">
                <label>Phone *</label>
                <input name="customerPhone" value={form.customerPhone} onChange={handleChange} required placeholder="03XX-XXXXXXX" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Passport No *</label>
                <input name="passportNo" value={form.passportNo} onChange={handleChange} required placeholder="Passport number" />
              </div>
              <div className="form-group">
                <label>Nationality</label>
                <input name="nationality" value={form.nationality} onChange={handleChange} placeholder="e.g. Pakistani" />
              </div>
            </div>
          </div>
        )}

        {/* ── Section 1: KSA Arrival ── */}
        {activeSection === 1 && (
          <div className="voucher-section">
            <div className="voucher-section-title">🛬 KSA Arrival Details</div>
            <div className="form-row">
              <div className="form-group">
                <label>Flight No</label>
                <input name="arrivalFlight" value={form.arrivalFlight} onChange={handleChange} placeholder="e.g. PK-743" />
              </div>
              <div className="form-group">
                <label>Arrival Airport</label>
                <select name="arrivalAirport" value={form.arrivalAirport} onChange={handleChange}>
                  <option value="">Select Airport</option>
                  <option>Jeddah (KAIA)</option>
                  <option>Madinah (PMIA)</option>
                  <option>Riyadh (KKIA)</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Arrival Date</label>
                <input name="arrivalDate" type="date" value={form.arrivalDate} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Arrival Time</label>
                <input name="arrivalTime" type="time" value={form.arrivalTime} onChange={handleChange} />
              </div>
            </div>
          </div>
        )}

        {/* ── Section 2: KSA Departure ── */}
        {activeSection === 2 && (
          <div className="voucher-section">
            <div className="voucher-section-title">🛫 KSA Departure Details</div>
            <div className="form-row">
              <div className="form-group">
                <label>Flight No</label>
                <input name="departureFlight" value={form.departureFlight} onChange={handleChange} placeholder="e.g. PK-744" />
              </div>
              <div className="form-group">
                <label>Departure Airport</label>
                <select name="departureAirport" value={form.departureAirport} onChange={handleChange}>
                  <option value="">Select Airport</option>
                  <option>Jeddah (KAIA)</option>
                  <option>Madinah (PMIA)</option>
                  <option>Riyadh (KKIA)</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Departure Date</label>
                <input name="departureDate" type="date" value={form.departureDate} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Departure Time</label>
                <input name="departureTime" type="time" value={form.departureTime} onChange={handleChange} />
              </div>
            </div>
          </div>
        )}

        {/* ── Section 3: Transport ── */}
        {activeSection === 3 && (
          <div className="voucher-section">
            <div className="voucher-section-title">🚌 Transport Details</div>
            <div className="form-row">
              <div className="form-group">
                <label>Transport Company</label>
                <input name="transportCompany" value={form.transportCompany} onChange={handleChange} placeholder="Company name" />
              </div>
              <div className="form-group">
                <label>Vehicle Type</label>
                <select name="vehicleType" value={form.vehicleType} onChange={handleChange}>
                  <option value="">Select Type</option>
                  <option>Bus</option>
                  <option>Van</option>
                  <option>Car</option>
                  <option>Coaster</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Route</label>
                <input name="transportRoute" value={form.transportRoute} onChange={handleChange} placeholder="e.g. Jeddah → Makkah → Madinah" />
              </div>
              <div className="form-group">
                <label>Driver Name</label>
                <input name="driverName" value={form.driverName} onChange={handleChange} placeholder="Driver full name" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Driver Phone</label>
                <input name="driverPhone" value={form.driverPhone} onChange={handleChange} placeholder="+966-XXXXXXXXX" />
              </div>
            </div>
          </div>
        )}

        {/* ── Section 4: Hotel ── */}
        {activeSection === 4 && (
          <div className="voucher-section">
            <div className="voucher-section-title">🕌 Makkah Hotel</div>
            <div className="form-row">
              <div className="form-group">
                <label>Hotel Name</label>
                <input name="makkahHotel" value={form.makkahHotel} onChange={handleChange} placeholder="Makkah hotel name" />
              </div>
              <div className="form-group">
                <label>Room Type</label>
                <select name="makkahRoomType" value={form.makkahRoomType} onChange={handleChange}>
                  <option value="">Select Room</option>
                  <option>Single</option>
                  <option>Double</option>
                  <option>Triple</option>
                  <option>Quad</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Check-in Date</label>
                <input name="makkahCheckin" type="date" value={form.makkahCheckin} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Check-out Date</label>
                <input name="makkahCheckout" type="date" value={form.makkahCheckout} onChange={handleChange} />
              </div>
            </div>

            <div className="voucher-section-title" style={{ marginTop: '16px' }}>🌙 Madinah Hotel</div>
            <div className="form-row">
              <div className="form-group">
                <label>Hotel Name</label>
                <input name="madinahHotel" value={form.madinahHotel} onChange={handleChange} placeholder="Madinah hotel name" />
              </div>
              <div className="form-group">
                <label>Room Type</label>
                <select name="madinahRoomType" value={form.madinahRoomType} onChange={handleChange}>
                  <option value="">Select Room</option>
                  <option>Single</option>
                  <option>Double</option>
                  <option>Triple</option>
                  <option>Quad</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Check-in Date</label>
                <input name="madinahCheckin" type="date" value={form.madinahCheckin} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Check-out Date</label>
                <input name="madinahCheckout" type="date" value={form.madinahCheckout} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group" style={{ marginTop: '8px' }}>
              <label>Additional Notes</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="Any special instructions or notes..." />
            </div>
          </div>
        )}

        {/* ── Navigation + Submit ── */}
        <div className="voucher-footer">
          <div className="voucher-nav-btns">
            {activeSection > 0 && (
              <button type="button" className="btn-secondary" onClick={() => setActiveSection(activeSection - 1)}>
                ← Previous
              </button>
            )}
            {activeSection < sections.length - 1 && (
              <button type="button" className="btn-primary" onClick={() => setActiveSection(activeSection + 1)}>
                Next →
              </button>
            )}
          </div>

          {activeSection === sections.length - 1 && (
            <button type="submit" className="btn-create-voucher">
              🎫 Create Voucher
            </button>
          )}
        </div>

      </form>
    </div>
  )
}
