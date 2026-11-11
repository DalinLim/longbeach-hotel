import { Link } from 'react-router-dom'
import BookingBar from '../components/BookingBar.jsx'
import RoomCard from '../components/RoomCard.jsx'
import { rooms, dining, gallery, img } from '../data.js'

export default function Home() {
  return (
    <>
      <section className="relative">
        <img src={img('1584132967334-10e028bd69f7', 1800)} alt="Longbeach Hotel by the sea" className="h-[78vh] min-h-[480px] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
        <div className="wrap absolute inset-x-0 bottom-24 text-white lg:bottom-32">
          <h1 className="max-w-3xl text-4xl leading-tight sm:text-6xl">A quiet stay by the sea.</h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">Seaview rooms, private bungalows, a restaurant and a bar, all a short walk from the beach.</p>
        </div>
      </section>
      <div className="wrap relative z-10 -mt-14 lg:-mt-16"><BookingBar /></div>

      <section className="wrap py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl">Rooms and bungalows</h2>
            <p className="mt-2 text-ink/70">Pick the space that suits your stay.</p>
          </div>
          <Link to="/rooms" className="btn btn-ghost">See all rooms</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map(r => <RoomCard key={r.slug} room={r} />)}
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="wrap grid gap-10 py-20 md:grid-cols-2">
          {[dining.restaurant, dining.bar].map((v, i) => (
            <Link key={v.title} to={i === 0 ? '/restaurant' : '/bar'} className="group block">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                <img src={img(v.hero[0], 900)} alt={v.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mt-5 text-2xl">{v.title}</h3>
              <p className="mt-1 text-white/70">{v.lead}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="wrap"><h2 className="mb-8 text-3xl sm:text-4xl">Gallery</h2></div>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4">
          {gallery.map(id => (
            <img key={id} src={img(id, 700)} alt="" loading="lazy" className="h-72 w-80 flex-none snap-start rounded-2xl object-cover" />
          ))}
        </div>
      </section>
    </>
  )
}
