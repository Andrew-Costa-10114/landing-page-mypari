import { useState } from 'react'

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      className="jb-section jb-newsletter jb-waitlist"
      id="waitlist"
      aria-labelledby="waitlist-title"
    >
      <div className="jb-newsletter__box">
        <h2 id="waitlist-title">Join the waitlist</h2>
        <p>
          Be first to know when MyPari opens early access—product updates, regions, and
          partnership news.
        </p>
        {submitted ? (
          <p style={{ color: 'var(--jb-gold)', margin: 0, fontWeight: 600 }}>
            You’re on the list. We’ll be in touch.
          </p>
        ) : (
          <form className="jb-newsletter__form" onSubmit={handleSubmit}>
            <label htmlFor="email-waitlist" className="visually-hidden">
              Email
            </label>
            <input
              id="email-waitlist"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              autoComplete="email"
            />
            <button type="submit" className="jb-btn jb-btn--primary">
              Join waitlist
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
