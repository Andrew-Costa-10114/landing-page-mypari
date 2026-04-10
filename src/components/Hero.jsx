import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="jb-hero" aria-labelledby="hero-title">
      <div>
        <p className="jb-hero__badge">Social feed • P2P contracts • Escrow-backed</p>
        <h1 id="hero-title">
          Wagers against
          <span className="jb-hero__accent">each other</span>
          — not the house
        </h1>
        <p className="jb-hero__lead">
          MyPari is a social prediction market: post challenges in a public feed,
          accept others’ predictions, and lock funds in escrow. When events settle,
          verified outcomes release the pot—minus a small platform fee. You compete
          on reads and reputation, not against a sportsbook’s edge.
        </p>
        <div className="jb-hero__ctas">
          <Link to="/#waitlist" className="jb-btn jb-btn--primary">
            Join waitlist
          </Link>
          <Link to="/#why-my-pari" className="jb-btn jb-btn--ghost">
            Why MyPari
          </Link>
        </div>
      </div>

      <div className="jb-hero__visual">
        <div className="jb-hero__card">
          <img
            src="/hero-mypari.png"
            alt="Crowd and stadium lights around a soccer pitch—social sports energy"
            width={800}
            height={1000}
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
