import { Link, useParams } from 'react-router-dom'
import RoomCard from '../components/RoomCard.jsx'
import { rooms, img } from '../data.js'

export default function RoomDetail() {
  const { slug } = useParams()
  const room = rooms.find(r => r.slug === slug)
  if (!room) return <div className="wrap py-32 text-center"><h1 className="text-3xl">Room not found</h1><Link to="/rooms" className="btn btn-ghost mt-6">Back to rooms</Link></div>

  return (
    <>
      <img src={img(room.image, 1800)} alt={room.name} className="h-[50vh] min-h-[320px] w-full object-cover" />
      <div className="wrap grid gap-12 py-14 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-4xl sm:text-5xl">{room.name}</h1>
          <p className="mt-2 text-lg text-sea">{room.tagline}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">{room.desc}</p>
          <h2 className="mt-10 text-2xl">Amenities</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {room.amenities.map(a => <li key={a} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sun" />{a}</li>)}
          </ul>
        </div>
        <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/10">
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-ink/60">Sleeps</dt><dd className="font-semibold">{room.sleeps}</dd></div>
            <div className="flex justify-between"><dt className="text-ink/60">Bed</dt><dd className="font-semibold">{room.bed}</dd></div>
            <div className="flex justify-between"><dt className="text-ink/60">View</dt><dd className="font-semibold">{room.view}</dd></div>
          </dl>
          <Link to={`/booking?room=${room.slug}`} className="btn btn-primary mt-6 w-full">Book this room</Link>
        </aside>
      </div>
      <div className="wrap grid gap-4 pb-14 sm:grid-cols-3">
        {room.gallery.map(id => <img key={id} src={img(id, 700)} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />)}
      </div>
      <section className="bg-ink py-16">
        <div className="wrap">
          <h2 className="mb-8 text-2xl text-white">Other rooms</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {rooms.filter(r => r.slug !== slug).map(r => <RoomCard key={r.slug} room={r} />)}
          </div>
        </div>
      </section>
    </>
  )
}
