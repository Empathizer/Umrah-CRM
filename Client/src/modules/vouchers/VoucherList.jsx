import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../shared/module.css'
import './vouchers.css'

const initialData = [
  { id: 1, voucherNo: 'VCH-001', customer: 'Ahmed Ali', passport: 'AB1234567', arrival: '2025-02-01', departure: '2025-02-15', hotel: 'Makkah Grand', status: 'Active' },
  { id: 2, voucherNo: 'VCH-002', customer: 'Sara Khan', passport: 'CD9876543', arrival: '2025-03-10', departure: '2025-03-25', hotel: 'Madinah Palace', status: 'Active' },
]

const statusColor = { Active: '#22c55e', Cancelled: '#000' }

export default function VoucherList() {
  const [items, setItems] = useState(initialData)
  const navigate = useNavigate()
  const handleDelete = (id) => { if (window.confirm('Delete this voucher?')) setItems(items.filter((i) => i.id !== id)) }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>🎫 Vouchers</h2>
        <button className="btn-primary" onClick={() => navigate('/vouchers/add')}>+ Add Voucher</button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>#</th><th>Voucher No</th><th>Customer</th><th>Passport</th>
            <th>Arrival</th><th>Departure</th><th>Hotel</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td><strong>{item.voucherNo}</strong></td>
              <td>{item.customer}</td>
              <td>{item.passport}</td>
              <td>{item.arrival}</td>
              <td>{item.departure}</td>
              <td>{item.hotel}</td>
              <td><span style={{ color: statusColor[item.status], fontWeight: 600 }}>{item.status}</span></td>
              <td>
                <button className="btn-edit" onClick={() => navigate(`/vouchers/edit/${item.id}`)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
