import {
  PlusCircleOutlined,
  UserAddOutlined,
  LockOutlined,
  ShareAltOutlined,
} from '@ant-design/icons'

const features = [
  {
    Icon: PlusCircleOutlined,
    title: 'Prediction creation',
    text: 'Choose category, event, and stake—straight picks, custom conditions, or multi-leg bets. Your challenge appears in the public feed for others to accept.',
  },
  {
    Icon: UserAddOutlined,
    title: 'Bet acceptance',
    text: 'When someone accepts, both sides lock funds in escrow. The wager becomes a binding peer-to-peer prediction contract until the event finishes.',
  },
  {
    Icon: LockOutlined,
    title: 'Escrow & resolution',
    text: 'Outcomes are resolved from verified data sources. The winner receives the pot minus a platform fee (e.g. 5% of the pot)—not a bet against the house.',
  },
  {
    Icon: ShareAltOutlined,
    title: 'Social layer',
    text: 'Comments, shares, follows, profiles, history, and leaderboards—so skilled predictors build reputation and the feed drives discovery and rivalry.',
  },
]

export default function Features() {
  return (
    <section
      className="jb-section"
      id="why-my-pari"
      aria-labelledby="features-title"
    >
      <div className="jb-section__head">
        <p className="jb-section__eyebrow">Why MyPari</p>
        <h2 id="features-title" className="jb-section__title">
          Prediction markets meet social competition
        </h2>
        <p className="jb-section__desc">
          MyPari combines prediction markets, social mechanics, and peer-to-peer
          wagering—so forecasting is social, interactive, and head-to-head.
        </p>
      </div>
      <div className="jb-features__grid">
        {features.map((item) => {
          const IconComponent = item.Icon
          return (
            <article key={item.title} className="jb-feature">
              <div className="jb-feature__icon" aria-hidden="true">
                <IconComponent />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
