import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MouseStars from './MouseStars'

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <div className="jb-page">
      <div className="jb-topbar" role="note">
        <span className="jb-topbar__pulse" aria-hidden="true" />
        <p>
          <strong>Peer-to-peer prediction markets</strong> — challenge people, not the
          house.{' '}
          <a href="/#why-my-pari">How MyPari works</a>
        </p>
      </div>

      <Header menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((o) => !o)} />

      <main>
        <Outlet />
      </main>

      <Footer />

      <MouseStars />
    </div>
  )
}
