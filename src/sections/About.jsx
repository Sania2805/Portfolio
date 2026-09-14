import ScrapCard from '../components/ScrapCard.jsx'
import { Book, Paintbrush, Leaf, ArrowCurve } from '../components/Decor.jsx'

const EXPLORING = [
  'Machine Learning',
  'Data Science',
  'AI / LLM Applications',
  'Backend Development',
  'DSA',
  'Social Network Analysis',
]

export default function About() {
  return (
    <div id="about" className="about section">
      <ScrapCard tone="beige" rotate={0.8} tape className="about__card">
        <Paintbrush className="about__doodle about__doodle--brush" />
        <Book className="about__doodle about__doodle--book" />

        <h2 className="section-title">
          About Me <span aria-hidden="true">✦</span>
        </h2>

        <p>
          I&apos;m Sania, a BTech CSE student with a deep interest in building
          things that solve real problems. I enjoy working with data,
          creating web applications and exploring machine learning and AI.
        </p>
        <p>
          When I&apos;m not coding, you&apos;ll find me with a book, a
          paintbrush, or lost in some random curiosity.
        </p>

        <p className="handwritten about__note">paint · read · repeat</p>
        <Leaf className="about__doodle about__doodle--leaf" />
      </ScrapCard>

      <ScrapCard tone="cream" rotate={-1.2} className="exploring__card">
        <h3 className="section-title section-title--sm">
          Currently Exploring <span aria-hidden="true">✦</span>
        </h3>
        <ul className="exploring__list">
          {EXPLORING.map((item) => (
            <li key={item}>
              <span aria-hidden="true" className="exploring__check">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
        <ArrowCurve className="exploring__arrow" />
        <p className="handwritten exploring__note">small steps, big dreams</p>
      </ScrapCard>
    </div>
  )
}
