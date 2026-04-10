export default function About() {
  return (
    <section className="jb-section jb-about" id="about" aria-labelledby="about-title">
      <div className="jb-section__head">
        <p className="jb-section__eyebrow">About</p>
        <h2 id="about-title" className="jb-section__title">
          One platform, four core systems
        </h2>
        <p className="jb-section__desc">
          <strong>Prediction creation</strong> — users define category, event, and
          stake; posts surface in a live feed.{' '}
          <strong>Bet acceptance</strong> — a counterparty matches the wager; both
          fund escrow and the contract is live.{' '}
          <strong>Escrow &amp; resolution</strong> — trusted data settles outcomes;
          winners receive payouts after fees.{' '}
          <strong>Social layer</strong> — comments, follows, history, and leaderboards
          turn predictions into community and credibility.
        </p>
        <p className="jb-section__desc jb-about__extra">
          Categories can span sports (NFL, NBA, soccer, college), esports (LoL,
          CS2, Valorant, Dota), entertainment, politics, and more—availability
          depends on legal compliance and region. Long-term vision: a global
          prediction network where collective forecasting data itself becomes
          valuable.
        </p>
      </div>
    </section>
  )
}
