const items = [
  { value: '4', label: 'Core systems' },
  { value: 'Escrow', label: 'Locked stakes' },
  { value: '5%', label: 'Example fee on pot*' },
  { value: 'P2P', label: 'Peer contracts' },
]

export default function Stats() {
  return (
    <section className="jb-stats" id="stats" aria-label="Platform highlights">
      <div className="jb-stats__grid">
        {items.map((item) => (
          <div key={item.label} className="jb-stats__item">
            <div className="jb-stats__value">{item.value}</div>
            <div className="jb-stats__label">{item.label}</div>
          </div>
        ))}
      </div>
      <p className="jb-stats__note">
        *Illustrative fee on resolved pots (e.g. 5% of total pot); final economics
        depend on product rules and jurisdiction. Not an offer of real-money services
        on this demo.
      </p>
    </section>
  )
}
