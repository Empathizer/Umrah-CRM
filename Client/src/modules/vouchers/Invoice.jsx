import { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import './invoice.css'

export default function Invoice() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const invoiceRef = useRef()

  if (!state) {
    navigate('/vouchers')
    return null
  }

  const { voucherNo, invoiceNo, createdDate, ...data } = state

  const handleDownload = async () => {
    const element = invoiceRef.current
    const canvas = await html2canvas(element, { scale: 2, useCORS: true })
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save(`${invoiceNo}.pdf`)
  }

  return (
    <div className="invoice-page">

      {/* Action Bar */}
      <div className="invoice-actions">
        <button className="btn-back" onClick={() => navigate('/vouchers')}>← Back to Vouchers</button>
        <button className="btn-download" onClick={handleDownload}>⬇ Download PDF</button>
      </div>

      {/* ── Printable Invoice ── */}
      <div className="invoice-wrapper" ref={invoiceRef}>

        {/* Header */}
        <div className="inv-header">
          <div className="inv-brand">
            <div className="inv-logo">🕋</div>
            <div>
              <div className="inv-company">Umrah CRM</div>
              <div className="inv-tagline">Hajj & Umrah Services</div>
            </div>
          </div>
          <div className="inv-meta">
            <div className="inv-title">VOUCHER INVOICE</div>
            <table className="inv-meta-table">
              <tbody>
                <tr><td>Invoice No</td><td><strong>{invoiceNo}</strong></td></tr>
                <tr><td>Voucher No</td><td><strong>{voucherNo}</strong></td></tr>
                <tr><td>Date</td><td>{createdDate}</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="inv-divider" />

        {/* Customer */}
        <div className="inv-section">
          <div className="inv-section-title">👤 Customer Information</div>
          <div className="inv-grid">
            <div className="inv-field"><span>Full Name</span><strong>{data.customerName || '—'}</strong></div>
            <div className="inv-field"><span>Phone</span><strong>{data.customerPhone || '—'}</strong></div>
            <div className="inv-field"><span>Passport No</span><strong>{data.passportNo || '—'}</strong></div>
            <div className="inv-field"><span>Nationality</span><strong>{data.nationality || '—'}</strong></div>
          </div>
        </div>

        {/* KSA Arrival */}
        <div className="inv-section">
          <div className="inv-section-title">🛬 KSA Arrival</div>
          <div className="inv-grid">
            <div className="inv-field"><span>Flight No</span><strong>{data.arrivalFlight || '—'}</strong></div>
            <div className="inv-field"><span>Airport</span><strong>{data.arrivalAirport || '—'}</strong></div>
            <div className="inv-field"><span>Date</span><strong>{data.arrivalDate || '—'}</strong></div>
            <div className="inv-field"><span>Time</span><strong>{data.arrivalTime || '—'}</strong></div>
          </div>
        </div>

        {/* KSA Departure */}
        <div className="inv-section">
          <div className="inv-section-title">🛫 KSA Departure</div>
          <div className="inv-grid">
            <div className="inv-field"><span>Flight No</span><strong>{data.departureFlight || '—'}</strong></div>
            <div className="inv-field"><span>Airport</span><strong>{data.departureAirport || '—'}</strong></div>
            <div className="inv-field"><span>Date</span><strong>{data.departureDate || '—'}</strong></div>
            <div className="inv-field"><span>Time</span><strong>{data.departureTime || '—'}</strong></div>
          </div>
        </div>

        {/* Transport */}
        <div className="inv-section">
          <div className="inv-section-title">🚌 Transport</div>
          <div className="inv-grid">
            <div className="inv-field"><span>Company</span><strong>{data.transportCompany || '—'}</strong></div>
            <div className="inv-field"><span>Vehicle Type</span><strong>{data.vehicleType || '—'}</strong></div>
            <div className="inv-field"><span>Route</span><strong>{data.transportRoute || '—'}</strong></div>
            <div className="inv-field"><span>Driver</span><strong>{data.driverName || '—'}</strong></div>
            <div className="inv-field"><span>Driver Phone</span><strong>{data.driverPhone || '—'}</strong></div>
          </div>
        </div>

        {/* Hotels */}
        <div className="inv-section">
          <div className="inv-section-title">🏨 Hotel Details</div>
          <div className="inv-hotels">
            <div className="inv-hotel-card">
              <div className="inv-hotel-label">🕌 Makkah</div>
              <div className="inv-field"><span>Hotel</span><strong>{data.makkahHotel || '—'}</strong></div>
              <div className="inv-field"><span>Room Type</span><strong>{data.makkahRoomType || '—'}</strong></div>
              <div className="inv-field"><span>Check-in</span><strong>{data.makkahCheckin || '—'}</strong></div>
              <div className="inv-field"><span>Check-out</span><strong>{data.makkahCheckout || '—'}</strong></div>
            </div>
            <div className="inv-hotel-card">
              <div className="inv-hotel-label">🌙 Madinah</div>
              <div className="inv-field"><span>Hotel</span><strong>{data.madinahHotel || '—'}</strong></div>
              <div className="inv-field"><span>Room Type</span><strong>{data.madinahRoomType || '—'}</strong></div>
              <div className="inv-field"><span>Check-in</span><strong>{data.madinahCheckin || '—'}</strong></div>
              <div className="inv-field"><span>Check-out</span><strong>{data.madinahCheckout || '—'}</strong></div>
            </div>
          </div>
        </div>

        {/* Notes */}
        {data.notes && (
          <div className="inv-section">
            <div className="inv-section-title">📝 Notes</div>
            <div className="inv-notes">{data.notes}</div>
          </div>
        )}

        {/* Footer */}
        <div className="inv-footer">
          <div>Thank you for choosing Umrah CRM Services</div>
          <div className="inv-footer-stamp">✓ Verified</div>
        </div>

      </div>
    </div>
  )
}
