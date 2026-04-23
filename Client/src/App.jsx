import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './modules/dashboard/Dashboard'
import CustomerList from './modules/customers/CustomerList'
import CustomerAdd from './modules/customers/CustomerAdd'
import CustomerEdit from './modules/customers/CustomerEdit'
import CareOffList from './modules/careoff/CareOffList'
import CareOffAdd from './modules/careoff/CareOffAdd'
import CareOffEdit from './modules/careoff/CareOffEdit'
import HotelList from './modules/hotels/HotelList'
import HotelAdd from './modules/hotels/HotelAdd'
import HotelEdit from './modules/hotels/HotelEdit'
import TransportList from './modules/transport/TransportList'
import TransportAdd from './modules/transport/TransportAdd'
import TransportEdit from './modules/transport/TransportEdit'
import FlightList from './modules/flights/FlightList'
import FlightAdd from './modules/flights/FlightAdd'
import FlightEdit from './modules/flights/FlightEdit'
import GroupList from './modules/groups/GroupList'
import GroupAdd from './modules/groups/GroupAdd'
import GroupEdit from './modules/groups/GroupEdit'
import BookingList from './modules/bookings/BookingList'
import BookingAdd from './modules/bookings/BookingAdd'
import BookingEdit from './modules/bookings/BookingEdit'
import Reports from './modules/reports/Reports'
import VoucherAdd from './modules/vouchers/VoucherAdd'
import VoucherList from './modules/vouchers/VoucherList'
import Invoice from './modules/vouchers/Invoice'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <div className="app-main">
          <Topbar />
          <div className="app-content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vouchers" element={<VoucherList />} />
          <Route path="/vouchers/add" element={<VoucherAdd />} />
          <Route path="/vouchers/invoice" element={<Invoice />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/customers/add" element={<CustomerAdd />} />
          <Route path="/customers/edit/:id" element={<CustomerEdit />} />
          <Route path="/careoff" element={<CareOffList />} />
          <Route path="/careoff/add" element={<CareOffAdd />} />
          <Route path="/careoff/edit/:id" element={<CareOffEdit />} />
          <Route path="/hotels" element={<HotelList />} />
          <Route path="/hotels/add" element={<HotelAdd />} />
          <Route path="/hotels/edit/:id" element={<HotelEdit />} />
          <Route path="/transport" element={<TransportList />} />
          <Route path="/transport/add" element={<TransportAdd />} />
          <Route path="/transport/edit/:id" element={<TransportEdit />} />
          <Route path="/flights" element={<FlightList />} />
          <Route path="/flights/add" element={<FlightAdd />} />
          <Route path="/flights/edit/:id" element={<FlightEdit />} />
          <Route path="/groups" element={<GroupList />} />
          <Route path="/groups/add" element={<GroupAdd />} />
          <Route path="/groups/edit/:id" element={<GroupEdit />} />
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/bookings/add" element={<BookingAdd />} />
          <Route path="/bookings/edit/:id" element={<BookingEdit />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
