import { Laptop, Star, ArrowCurve, Leaf, Tape } from '../components/Decor.jsx'
import profile from '../data/profile.js'

export default function Coding() {
  const { gfg, leetcode } = profile.coding

  return (
    <section className="coding section">

      <div className="coding__paper torn-paper">

        {/* Tape */}
        <Tape
          className="coding__tape coding__tape--left"
          rotate={-7}
        />

        <Tape
          className="coding__tape coding__tape--right"
          rotate={6}
        />

        {/* Heading */}
        <div className="coding__heading">

          <h2 className="coding__title">
            Coding
            <Star />
          </h2>

          <div className="coding__underline" />

          <p className="handwritten coding__subtitle">
            Solving problems, one step at a time.
          </p>

        </div>


        {/* Main coding content */}
        <div className="coding__content">

          {/* GFG */}
          <div className="coding__stat">

            <p className="coding__number">
              {gfg.count}
            </p>

            <p className="coding__label">
              {gfg.label}
            </p>

            <a
              href={gfg.url}
              target="_blank"
              rel="noreferrer"
              className="coding__button"
            >
              View Profile
              <span aria-hidden="true">→</span>
            </a>

          </div>


          {/* Divider */}
          <div className="coding__divider" aria-hidden="true" />


          {/* LeetCode */}
          <div className="coding__stat">

            <p className="coding__number">
              {leetcode.count}
            </p>

            <p className="coding__label">
              {leetcode.label}
            </p>

            <a
              href={leetcode.url}
              target="_blank"
              rel="noreferrer"
              className="coding__button"
            >
              View Profile
              <span aria-hidden="true">→</span>
            </a>

          </div>

        </div>


        {/* Decorative laptop */}
        <Laptop className="coding__laptop" />

        {/* Decorative leaves */}
        <div className="coding__plant" aria-hidden="true">
          <Leaf />
          <Leaf />
          <Leaf />
        </div>


        {/* Small decorative star */}
        <Star className="coding__corner-star" />

        <ArrowCurve className="coding__arrow" />

      </div>

    </section>
  )
}