import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Rooms from './pages/Rooms.jsx'
import RoomDetail from './pages/RoomDetail.jsx'
import Dining from './pages/Dining.jsx'
import Booking from './pages/Booking.jsx'
import { dining } from './data.js'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<RoomDetail />} />
        <Route path="/restaurant" element={<Dining venue={dining.restaurant} />} />
        <Route path="/bar" element={<Dining venue={dining.bar} />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<div className="wrap py-32 text-center"><h1 className="text-4xl">Page not found</h1></div>} />
      </Route>
    </Routes>
  )
}
