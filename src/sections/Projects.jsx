
import { useCallback, useEffect, useRef, useState } from 'react'
import PolaroidFrame from '../components/PolaroidFrame.jsx'
import { ArrowCurve, Leaf, Star } from '../components/Decor.jsx'
import projects from '../data/projects.js'

export default function Projects() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState('next')

  const total = projects.length
  const project = projects[index]
  const touchStartX = useRef(null)

  const goTo = useCallback(
    (nextIndex, dir = 'next') => {
      if (total === 0) return

      setDirection(dir)
      setIndex((nextIndex + total) % total)
    },
    [total]
  )

  const goNext = useCallback(
    () => goTo(index + 1, 'next'),
    [goTo, index]
  )

  const goPrev = useCallback(
    () => goTo(index - 1, 'prev'),
    [goTo, index]
  )

  // Keyboard navigation
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        goNext()
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      }
    }

    const el = document.getElementById('project-carousel')

    el?.addEventListener('keydown', onKey)

    return () => el?.removeEventListener('keydown', onKey)
  }, [goNext, goPrev])

  // Touch navigation
  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
  }

  function onTouchEnd(e) {
    if (touchStartX.current == null) return

    const delta =
      e.changedTouches[0].clientX - touchStartX.current

    if (Math.abs(delta) > 40) {
      if (delta < 0) {
        goNext()
      } else {
        goPrev()
      }
    }

    touchStartX.current = null
  }

  return (
    <section id="work" className="projects section">

      {/* ---------- Heading ---------- */}
      <div className="projects__heading">
        <div className="projects__heading-paper torn-paper">
          <h2 className="section-title">
            Featured Projects
            <Star className="projects__title-star" />
          </h2>

          <p className="handwritten projects__subtitle">
            A few things I&apos;ve built recently
          </p>
        </div>

        <ArrowCurve className="projects__arrow-doodle" />
      </div>

      {/* ---------- Main Project Carousel ---------- */}
      {total > 0 && (
        <div
          id="project-carousel"
          className="carousel"
          tabIndex={0}
          role="group"
          aria-roledescription="carousel"
          aria-label="Featured projects"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >

          {/* Previous Arrow */}
          <button
            type="button"
            className="carousel__arrow carousel__arrow--left"
            onClick={goPrev}
            aria-label="Previous project"
          >
            ←
          </button>

          {/* Featured Project */}
          <div className="carousel__panel torn-paper">

            <Star className="carousel__star" />

            <div
              key={project.id}
              className={`carousel__slide carousel__slide--${direction}`}
            >

              {/* Project Screenshot */}
              <div className="carousel__visual">
                <PolaroidFrame
                  className="carousel__image"
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  caption={project.note}
                  rotate={-2}
                  placeholderLabel="add a project screenshot here"
                />
              </div>

              {/* Project Information */}
              <div className="carousel__info">

                <p className="carousel__label">
                  {String(index + 1).padStart(2, '0')} /{' '}
                  {String(total).padStart(2, '0')}
                </p>

                <h3>{project.title}</h3>

                <p className="carousel__desc">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <ul
                  className="tag-list"
                  aria-label="Technologies used"
                >
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                {/* Project Links */}
                <div className="carousel__links">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn--dark"
                    >
                      View on GitHub
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn--outline"
                    >
                      Live Demo
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}

                </div>
              </div>
            </div>
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            className="carousel__arrow carousel__arrow--right"
            onClick={goNext}
            aria-label="Next project"
          >
            →
          </button>

        </div>
      )}

      {/* ---------- Navigation Dots ---------- */}
      {total > 1 && (
        <div
          className="carousel__dots"
          role="group"
          aria-label="Choose a project"
        >
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              aria-current={i === index ? 'true' : undefined}
              aria-label={`Show ${p.title}`}
              className={`carousel__dot ${
                i === index ? 'is-active' : ''
              }`}
              onClick={() =>
                goTo(i, i > index ? 'next' : 'prev')
              }
            />
          ))}
        </div>
      )}

      {/* Decorative Leaf */}
      <Leaf className="projects__leaf" />

    </section>
  )
}
