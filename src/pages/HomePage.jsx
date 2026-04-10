import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Features from '../components/Features'
import About from '../components/About'
import FAQ from '../components/FAQ'
import Waitlist from '../components/Waitlist'

export default function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
    return () => clearTimeout(t)
  }, [hash])

  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <About />
      <FAQ />
      <Waitlist />
    </>
  )
}
