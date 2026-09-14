import ScrapCard from '../components/ScrapCard.jsx'
import { Laptop } from '../components/Decor.jsx'
import hackathons from '../data/hackathons.js'

export default function Hackathons() {
  return (
    <section className="hackathons section">
      <div className="hackathons__heading">
        <h2 className="section-title">
          Hackathons <span aria-hidden="true">✦</span>
        </h2>
        <p className="handwritten">3× Hackathons</p>
        <Laptop className="hackathons__doodle" />
      </div>

      <div className="hackathons__grid">
        {hackathons.map((h, i) => (
          <ScrapCard
            key={h.title}
            tone="cream"
            rotate={i % 2 === 0 ? -1.5 : 1.5}
            className="hackathons__card"
          >
            <h3>{h.title}</h3>
            <p>{h.details}</p>
          </ScrapCard>
        ))}
      </div>
    </section>
  )
}
