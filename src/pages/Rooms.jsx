import RoomCard from '../components/RoomCard.jsx'
import { rooms } from '../data.js'

export default function Rooms() {
  return (
    <section className="wrap py-16">
      <h1 className="text-4xl sm:text-5xl">Rooms and bungalows</h1>
      <p className="mt-3 max-w-xl text-ink/70">Every stay includes breakfast, Wi-Fi and access to the pool.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {rooms.map(r => <RoomCard key={r.slug} room={r} />)}
      </div>
    </section>
  )
}
