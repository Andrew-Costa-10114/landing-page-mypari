import { useCallback, useEffect, useRef, useState } from 'react'
import './MouseStars.css'

const SPAWN_MS = 42
const MAX_BURSTS = 42
const REMOVE_AFTER_MS = 2500
const STAR_MIN = 4
const STAR_MAX = 10
const GLYPHS = ['✦', '✧', '⋆', '★', '☆']

function randomBurst(x, y, id) {
  const n = STAR_MIN + Math.floor(Math.random() * (STAR_MAX - STAR_MIN + 1))
  const stars = Array.from({ length: n }, (_, i) => {
    const angle = Math.random() * Math.PI * 2
    const r = 4 + Math.random() * 18
    return {
      k: `${id}-${i}`,
      dx: Math.cos(angle) * r,
      dy: Math.sin(angle) * r,
      size: 6 + Math.random() * 8,
      rot: Math.random() * 360,
      glyph: GLYPHS[i % GLYPHS.length],
      delay: Math.random() * 0.12,
    }
  })
  return { id, x, y, stars }
}

export default function MouseStars() {
  const [bursts, setBursts] = useState([])
  const [enabled, setEnabled] = useState(true)
  const lastSpawn = useRef(0)
  const nextId = useRef(0)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setEnabled(!mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const spawn = useCallback((clientX, clientY) => {
    const t = performance.now()
    if (t - lastSpawn.current < SPAWN_MS) return
    lastSpawn.current = t
    const id = ++nextId.current
    setBursts((prev) => {
      const next = [...prev, randomBurst(clientX, clientY, id)]
      return next.length > MAX_BURSTS ? next.slice(-MAX_BURSTS) : next
    })
    window.setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== id))
    }, REMOVE_AFTER_MS)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined
    const onMove = (e) => spawn(e.clientX, e.clientY)
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [enabled, spawn])

  if (!enabled) return null

  return (
    <div className="mouse-stars" aria-hidden="true">
      {bursts.map((b) => (
        <div
          key={b.id}
          className="mouse-stars__burst"
          style={{ left: b.x, top: b.y }}
        >
          {b.stars.map((s) => (
            <span
              key={s.k}
              className="mouse-stars__particle"
              style={{
                '--dx': `${s.dx}px`,
                '--dy': `${s.dy}px`,
                '--size': `${s.size}px`,
                '--rot': `${s.rot}deg`,
                animationDelay: `${s.delay}s`,
              }}
            >
              {s.glyph}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}
