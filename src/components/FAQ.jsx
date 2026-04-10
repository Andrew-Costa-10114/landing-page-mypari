const items = [
  {
    q: 'How is MyPari different from a traditional sportsbook?',
    a: 'You are not betting against the house. Users publish prediction contracts; others accept them. MyPari is a facilitator and escrow service—matching, custody, and settlement—while a small fee applies to resolved pots (e.g. 5% of the pot in the product concept).',
  },
  {
    q: 'What happens when I accept a wager?',
    a: 'Both parties deposit the agreed amount into escrow. The bet stays in a live state until the event resolves. Funds then move to the winner based on verified outcomes, with the platform fee deducted from the pot.',
  },
  {
    q: 'What kinds of predictions can I create?',
    a: 'The design supports even-money stakes, custom conditions (e.g. margins, props, multi-condition parlays), and varied categories. What actually launches depends on compliance, licensing, and partners in each market.',
  },
  {
    q: 'How does reputation work?',
    a: 'Profiles can surface win/loss, volume, average stake, profit/loss, and history—leaderboards highlight top earners, win rates, and activity so strong predictors gain social credibility.',
  },
  {
    q: 'How does MyPari make money?',
    a: 'Primary revenue is transaction fees on resolved bets. Secondary options may include premium analytics, promoted posts, or subscriptions—subject to product decisions.',
  },
  {
    q: 'Is this legal where I live?',
    a: 'Prediction markets and sports wagering are highly regulated. A real launch would require operating where permitted, possibly with licensed operators. This site presents the product concept only—not a live real-money offer.',
  },
]

export default function FAQ() {
  return (
    <section className="jb-section jb-faq" id="faq" aria-labelledby="faq-title">
      <div className="jb-section__head">
        <p className="jb-section__eyebrow">FAQ</p>
        <h2 id="faq-title" className="jb-section__title">
          Common questions
        </h2>
        <p className="jb-section__desc">
          Peer-to-peer contracts, escrow, fees, and how MyPari relates to
          traditional books and regulation.
        </p>
      </div>
      <ul className="jb-faq__list">
        {items.map((item) => (
          <li key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
