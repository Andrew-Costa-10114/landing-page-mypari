import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_FORM_ID
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'hello@mypari.com'

export default function ContactPage() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    const form = e.target
    const fd = new FormData(form)
    const name = String(fd.get('name') || '').trim()
    const email = String(fd.get('email') || '').trim()
    const subject = String(fd.get('subject') || '').trim()
    const message = String(fd.get('message') || '').trim()

    if (!name || !email || !message) {
      setError('Please fill in your name, email, and message.')
      return
    }

    if (FORMSPREE_ID) {
      setStatus('sending')
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          body: fd,
          headers: { Accept: 'application/json' },
        })
        const data = await res.json().catch(() => ({}))
        if (res.ok) {
          setStatus('success')
          form.reset()
        } else {
          setError(data.error || 'Something went wrong. Please try again or email us.')
          setStatus('idle')
        }
      } catch {
        setError('Network error. Try again or use your email client below.')
        setStatus('idle')
      }
      return
    }

    const mailSubject = subject || `MyPari contact from ${name}`
    const mailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`
    window.location.href = mailto
    setStatus('success')
    form.reset()
  }

  return (
    <section className="jb-contact-page" aria-labelledby="contact-page-title">
      <div className="jb-contact-page__inner">
        <nav className="jb-contact-page__crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true"> / </span>
          <span>Contact Us</span>
        </nav>

        <h1 id="contact-page-title">Contact Us</h1>
        <p className="jb-contact-page__lead">
          Send a message about partnerships, press, compliance, or general questions.
          If you configure{' '}
          <code className="jb-contact-page__code">VITE_FORMSPREE_FORM_ID</code> in{' '}
          <code className="jb-contact-page__code">.env</code>, submissions are sent
          through Formspree; otherwise your email app opens with a pre-filled message.
        </p>

        {status === 'success' && (
          <p className="jb-contact-page__banner jb-contact-page__banner--ok" role="status">
            {FORMSPREE_ID
              ? 'Message sent. We’ll get back to you soon.'
              : 'Your email app should open with your message. If it didn’t, copy your note and send it manually.'}
          </p>
        )}

        {error && (
          <p className="jb-contact-page__banner jb-contact-page__banner--err" role="alert">
            {error}
          </p>
        )}

        <form className="jb-contact-form" onSubmit={handleSubmit} noValidate>
          <div className="jb-contact-form__row">
            <label className="jb-contact-form__field">
              <span className="jb-contact-form__label">Name *</span>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
              />
            </label>
            <label className="jb-contact-form__field">
              <span className="jb-contact-form__label">Email *</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="jb-contact-form__field">
            <span className="jb-contact-form__label">Subject</span>
            <input
              name="subject"
              type="text"
              autoComplete="off"
              placeholder="What is this about?"
            />
          </label>

          <label className="jb-contact-form__field">
            <span className="jb-contact-form__label">Message *</span>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Write your message…"
            />
          </label>

          <div className="jb-contact-form__actions">
            <button
              type="submit"
              className="jb-btn jb-btn--primary"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <Link to="/" className="jb-btn jb-btn--ghost">
              Back to home
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}
