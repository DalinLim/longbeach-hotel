import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { hotel } from '../data.js'

const links = [
  { to: '/rooms', label: 'Rooms' },
  { to: '/restaurant', label: 'Restaurant' },
  { to: '/bar', label: 'Bar' },
]

export default function Layout() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  useEffect(() => { window.scrollTo(0, 0); setOpen(false) }, [pathname])

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors hover:text-sea ${isActive ? 'text-sea' : 'text-ink'}`

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-sand/95 backdrop-blur">
        <div className="wrap flex items-center justify-between py-3">
          <Link to="/" aria-label={`${hotel.name} home`}><img src="/logo.png" alt={hotel.full} className="h-12 w-auto" /></Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {links.map(l => <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>)}
            <Link to="/booking" className="btn btn-primary">Book now</Link>
          </nav>
          <button className="rounded-lg border border-ink/20 px-3 py-2 text-sm font-semibold md:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
        {open && (
          <nav className="wrap flex flex-col gap-4 pb-5 md:hidden" aria-label="Mobile">
            {links.map(l => <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>)}
            <Link to="/booking" className="btn btn-primary">Book now</Link>
          </nav>
        )}
      </header>
      <main><Outlet /></main>
      <footer className="bg-ink text-white">
        <div className="wrap grid gap-8 py-12 md:grid-cols-3">
          <div>
            <p className="font-display text-xl">{hotel.full}</p>
            <p className="mt-2 text-sm text-white/70">Seaview rooms, bungalows, a restaurant and a bar.</p>
          </div>
          <ul className="space-y-2 text-sm text-white/80">
            {links.map(l => <li key={l.to}><Link className="hover:text-sun" to={l.to}>{l.label}</Link></li>)}
            <li><Link className="hover:text-sun" to="/booking">Book a stay</Link></li>
          </ul>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a className="hover:text-sun" href={`mailto:${hotel.email}`}>{hotel.email}</a></li>
            <li>{hotel.phone}</li>
          </ul>
        </div>
        <p className="border-t border-white/10 py-5 text-center text-xs text-white/60">© {new Date().getFullYear()} {hotel.full}</p>
      </footer>
    </>
  )
}
