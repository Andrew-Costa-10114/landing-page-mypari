import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_FORM_ID
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'hello@mypari.com'

const CONTACT_TOPICS = [
  'Joining the waitlist or early access when we open in your region',
  'Partnerships, integrations, or media and press inquiries',
  'Product feedback, feature ideas, or questions about how MyPari works',
  'Legal, compliance, or jurisdictional questions (we are not yet live everywhere)',
]

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
        setError('Network error. Try again or email us directly at the address below.')
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

        <div className="jb-contact-page__body">
          <p className="jb-contact-page__lead">
            Whether you are curious about MyPari, want to explore a partnership, or
            have a question about our social peer-to-peer prediction concept—we are
            glad you reached out. Use the form below and we will read every message.
          </p>

          <p className="jb-contact-page__lead">
            MyPari is building a place where people create and accept prediction
            wagers in a public feed, with escrow and fair settlement—not betting
            against the house. We are still in concept and pre-launch mode; your note
            helps us prioritize what to build next and where to show up first.
          </p>

          <h2 className="jb-contact-page__subhead">What you can write to us about</h2>
          <ul className="jb-contact-page__list">
            {CONTACT_TOPICS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="jb-contact-page__note">
            We aim to reply within a few business days. If your question is urgent,
            mention that in the subject line. We cannot give legal advice; for
            regulated markets, answers may be high-level until we are licensed where
            you are.
          </p>

          <p className="jb-contact-page__email">
            Prefer email? Reach us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            {FORMSPREE_ID ? '' : ' — or use the form and choose “Send message” to open your mail app with your note pre-filled.'}
          </p>
        </div>

        {status === 'success' && (
          <p className="jb-contact-page__banner jb-contact-page__banner--ok" role="status">
            {FORMSPREE_ID
              ? 'Thank you — your message was sent. We will get back to you soon.'
              : 'Thank you. If your mail program opened, send the message from there. If nothing opened, use the address above or try again.'}
          </p>
        )}

        {error && (
          <p className="jb-contact-page__banner jb-contact-page__banner--err" role="alert">
            {error}
          </p>
        )}

        <h2 className="jb-contact-page__subhead jb-contact-page__subhead--form">Send a message</h2>

        <form className="jb-contact-form" onSubmit={handleSubmit} noValidate>
          <div className="jb-contact-form__row">
            <label className="jb-contact-form__field">
              <span className="jb-contact-form__label">Name *</span>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your full name"
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
              placeholder="e.g. Partnership, press, waitlist, product idea"
            />
          </label>

          <label className="jb-contact-form__field">
            <span className="jb-contact-form__label">Message *</span>
            <textarea
              name="message"
              required
              rows={7}
              placeholder="Tell us what you need, how we can help, or any context that will make it easier to respond."
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
