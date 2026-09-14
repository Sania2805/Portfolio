import ScrapCard from '../components/ScrapCard.jsx'
import { Flower, Leaf, Star, Tape } from '../components/Decor.jsx'
import skills from '../data/skills.js'

const TONES = ['cream', 'beige', 'cream', 'beige', 'cream']

export default function Skills() {
  return (
    <section id="skills" className="skills section">

      <div className="skills__paper">

        {/* Tape on the scrapbook sheet */}
        <Tape className="skills__tape skills__tape--left" rotate={-6} />
        <Tape className="skills__tape skills__tape--right" rotate={5} />

        {/* Botanical decorations */}
        <div className="skills__plant skills__plant--top">
          <Leaf />
          <Leaf />
          <Leaf />
          <Flower />
        </div>

        <div className="skills__plant skills__plant--bottom">
          <Leaf />
          <Leaf />
          <Flower />
        </div>

        {/* Heading */}
        <div className="skills__heading">
          <h2 className="skills__title">
            Skills <Star />
          </h2>

          <div className="skills__underline" />

          <p className="handwritten skills__subtitle">
            Tools I work with
          </p>
        </div>

        {/* Skill category cards */}
        <div className="skills__grid">
          {skills.map((group, i) => (
            <ScrapCard
              key={group.group}
              tone={TONES[i % TONES.length]}
              rotate={i % 2 === 0 ? -0.5 : 0.6}
              className="skills__note"
            >
              <h3>{group.group}</h3>

              <ul className="tag-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ScrapCard>
          ))}
        </div>

        {/* Small decorative star */}
        <Star className="skills__corner-star" />

      </div>

    </section>
  )
}