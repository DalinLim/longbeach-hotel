import { Link } from 'react-router-dom'
import { img } from '../data.js'

export default function RoomCard({ room }) {
  return (
    <Link to={`/rooms/${room.slug}`} className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/10">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={img(room.image, 800)} alt={room.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="text-xl">{room.name}</h3>
        <p className="mt-1 text-sm text-ink/70">{room.tagline}</p>
        <p className="mt-3 text-xs font-semibold text-sea">Sleeps {room.sleeps} · {room.bed}</p>
      </div>
    </Link>
  )
}
