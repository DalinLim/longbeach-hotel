import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BookingBar() {
  const nav = useNavigate()
  const [f, setF] = useState({ checkin: '', checkout: '', guests: '2', rooms: '1' })
  const set = k => e => setF({ ...f, [k]: e.target.value })
  const today = new Date().toISOString().slice(0, 10)

  return (
    <form
      onSubmit={e => { e.preventDefault(); nav('/booking?' + new URLSearchParams(f)) }}
      className="grid gap-3 rounded-2xl bg-white p-4 shadow-xl sm:grid-cols-2 lg:grid-cols-5"
    >
      <label className="text-xs font-semibold">Check-in
        <input className="field mt-1" type="date" min={today} value={f.checkin} onChange={set('checkin')} required />
      </label>
      <label className="text-xs font-semibold">Check-out
        <input className="field mt-1" type="date" min={f.checkin || today} value={f.checkout} onChange={set('checkout')} required />
      </label>
      <label className="text-xs font-semibold">Guests
        <input className="field mt-1" type="number" min="1" max="12" value={f.guests} onChange={set('guests')} />
      </label>
      <label className="text-xs font-semibold">Rooms
        <input className="field mt-1" type="number" min="1" max="8" value={f.rooms} onChange={set('rooms')} />
      </label>
      <button className="btn btn-primary self-end">Check availability</button>
    </form>
  )
}
