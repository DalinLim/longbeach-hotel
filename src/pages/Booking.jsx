import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { rooms } from '../data.js'

export default function Booking() {
  const [p] = useSearchParams()
  const [sent, setSent] = useState(false)
  const [f, setF] = useState({
    name: '', email: '', checkin: p.get('checkin') || '', checkout: p.get('checkout') || '',
    guests: p.get('guests') || '2', room: p.get('room') || rooms[0].slug,
  })
  const set = k => e => setF({ ...f, [k]: e.target.value })
  const room = rooms.find(r => r.slug === f.room)

  if (sent) return (
    <section className="wrap max-w-xl py-24 text-center">
      <h1 className="text-4xl">Request received</h1>
      <p className="mt-4 text-lg">Thank you, {f.name}. We would confirm {room?.name} for {f.checkin} to {f.checkout} by email at {f.email}.</p>
      <p className="mt-6 text-sm text-ink/60">This is a demo form. No information was sent or stored.</p>
    </section>
  )

  return (
    <section className="wrap max-w-2xl py-16">
      <h1 className="text-4xl sm:text-5xl">Book your stay</h1>
      <p className="mt-3 text-ink/70">Tell us when you would like to visit.</p>
      <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold sm:col-span-2">Full name<input className="field mt-1" required value={f.name} onChange={set('name')} /></label>
        <label className="text-sm font-semibold sm:col-span-2">Email<input className="field mt-1" type="email" required value={f.email} onChange={set('email')} /></label>
        <label className="text-sm font-semibold">Check-in<input className="field mt-1" type="date" required value={f.checkin} onChange={set('checkin')} /></label>
        <label className="text-sm font-semibold">Check-out<input className="field mt-1" type="date" required min={f.checkin} value={f.checkout} onChange={set('checkout')} /></label>
        <label className="text-sm font-semibold">Guests<input className="field mt-1" type="number" min="1" max="12" value={f.guests} onChange={set('guests')} /></label>
        <label className="text-sm font-semibold">Room
          <select className="field mt-1" value={f.room} onChange={set('room')}>
            {rooms.map(r => <option key={r.slug} value={r.slug}>{r.name}</option>)}
          </select>
        </label>
        <button className="btn btn-primary sm:col-span-2">Send request</button>
      </form>
    </section>
  )
}
