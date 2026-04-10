const quotes = [
  {
    text: 'I’d rather scroll a feed of real challenges—$50 on the Lions, $25 on a props—than fight the house line every time. Accept in two taps once escrow is clear.',
    name: 'Marcus T.',
    role: 'Concept feedback',
    initials: 'MT',
  },
  {
    text: 'Comments on a bet are half the fun. It feels like social media for takes—follow people whose predictions you respect.',
    name: 'Elena R.',
    role: 'Concept feedback',
    initials: 'ER',
  },
  {
    text: 'Leaderboards and win rate turn it into a competition of reads. I want to prove my forecasts against others—not against a hidden margin.',
    name: 'James K.',
    role: 'Concept feedback',
    initials: 'JK',
  },
]

export default function Testimonials() {
  return (
    <section
      className="jb-section"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="jb-section__head">
        <p className="jb-section__eyebrow">Why it could work</p>
        <h2 id="testimonials-title" className="jb-section__title">
          Social, competitive, and transparent
        </h2>
        <p className="jb-section__desc">
          Illustrative voices aligned with the product vision—virality from shared
          bets, rivalry, and reputation. Not testimonials from a live product.
        </p>
      </div>
      <div className="jb-testimonials__grid">
        {quotes.map((q) => (
          <blockquote key={q.name} className="jb-quote">
            <p>“{q.text}”</p>
            <footer>
              <div className="jb-quote__avatar">{q.initials}</div>
              <div>
                <cite>{q.name}</cite>
                <span>{q.role}</span>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
