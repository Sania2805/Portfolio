import ScrapCard from '../components/ScrapCard.jsx'
import { ICONS } from '../components/Decor.jsx'
import journey from '../data/journey.js'

export default function Journey() {
  return (
    <section id="journey" className="journey section">
      <h2 className="section-title">
        My Journey <span aria-hidden="true">✦</span>
      </h2>

      <ol className="timeline">
        {journey.map((step, i) => {
          const Icon = ICONS[step.icon]
          return (
            <li key={step.label} className="timeline__step">
              <div className="timeline__icon">{Icon && <Icon size={24} />}</div>
              <p className="timeline__label">{step.label}</p>
              {step.sub && <p className="handwritten timeline__sub">{step.sub}</p>}
              {i < journey.length - 1 && (
                <span className="timeline__connector" aria-hidden="true">
                  →
                </span>
              )}
            </li>
          )
        })}
      </ol>

      <p className="handwritten journey__note">same girl... just more curious ✦</p>

      
    </section>
  )
}
