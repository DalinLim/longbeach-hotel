import { Link } from 'react-router-dom'
import { img } from '../data.js'

export default function Dining({ venue }) {
  return (
    <>
      <section className="wrap py-16">
        <h1 className="text-4xl sm:text-5xl">{venue.title}</h1>
        <p className="mt-3 max-w-xl text-lg text-ink/70">{venue.lead}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {venue.hero.map(id => <img key={id} src={img(id, 1000)} alt="" className="aspect-[16/10] w-full rounded-2xl object-cover" />)}
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="wrap py-12">
          <h2 className="text-2xl">Opening hours</h2>
          <ul className="mt-4 space-y-1 text-white/80">{venue.hours.map(h => <li key={h}>{h}</li>)}</ul>
        </div>
      </section>

      <section className="wrap space-y-16 py-16">
        {venue.features.map((f, i) => (
          <div key={f.title} className="grid items-center gap-8 md:grid-cols-2">
            <img src={img(f.image, 900)} alt={f.title} loading="lazy" className={`aspect-[4/3] w-full rounded-2xl object-cover ${i % 2 ? 'md:order-2' : ''}`} />
            <div>
              <h2 className="text-3xl">{f.title}</h2>
              <p className="mt-3 text-lg leading-relaxed text-ink/80">{f.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-sun/20 py-14 text-center">
        <p className="wrap">{venue.note}</p>
        <Link to="/booking" className="btn btn-primary mt-6">Book a stay</Link>
      </section>
    </>
  )
}
