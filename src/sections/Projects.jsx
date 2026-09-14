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

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }

    const el = document.getElementById('project-carousel')

    el?.addEventListener('keydown', onKey)

    return () => el?.removeEventListener('keydown', onKey)
  }, [goNext, goPrev])

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
  }

  function onTouchEnd(e) {
    if (touchStartX.current == null) return

    const delta =
      e.changedTouches[0].clientX - touchStartX.current

    if (Math.abs(delta) > 40) {
      if (delta < 0) goNext()
      else goPrev()
    }

    touchStartX.current = null
  }

  const secondaryProjects = projects
    .map((p, i) => ({ ...p, originalIndex: i }))
    .filter((p) => p.originalIndex !== index)
    .slice(0, 2)

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


      {/* ---------- Main featured project ---------- */}
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

        <button
          type="button"
          className="carousel__arrow carousel__arrow--left"
          onClick={goPrev}
          aria-label="Previous project"
        >
          ←
        </button>

        <div className="carousel__panel torn-paper">

          <Star className="carousel__star" />

          <div
            key={project.id}
            className={`carousel__slide carousel__slide--${direction}`}
          >

            {/* Screenshot */}
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


            {/* Project information */}
            <div className="carousel__info">

              <p className="carousel__label">
                {String(index + 1).padStart(2, '0')} /{' '}
                {String(total).padStart(2, '0')}
              </p>

              <h3>{project.title}</h3>

              <p className="carousel__desc">
                {project.description}
              </p>

              <ul
                className="tag-list"
                aria-label="Technologies used"
              >
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <div className="carousel__links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--dark"
                >
                  View on GitHub
                  <span aria-hidden="true">↗</span>
                </a>

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


        <button
          type="button"
          className="carousel__arrow carousel__arrow--right"
          onClick={goNext}
          aria-label="Next project"
        >
          →
        </button>
      </div>


      {/* ---------- Small project cards ---------- */}
      <div className="projects__mini-grid">

        {secondaryProjects.map((p) => (
          <article
            key={p.id}
            className="project-mini torn-paper"
            onClick={() =>
              goTo(
                p.originalIndex,
                p.originalIndex > index ? 'next' : 'prev'
              )
            }
          >

            <div className="project-mini__image-wrap">
              <PolaroidFrame
                className="project-mini__image"
                src={p.image}
                alt={`${p.title} screenshot`}
                caption={p.note}
                rotate={p.originalIndex % 2 === 0 ? -2 : 2}
                placeholderLabel="add screenshot"
              />
            </div>

            <div className="project-mini__content">

              <p className="project-mini__number">
                {String(p.originalIndex + 1).padStart(2, '0')} /{' '}
                {String(total).padStart(2, '0')}
              </p>

              <h3>{p.title}</h3>

              <p>{p.description}</p>

              <ul className="project-mini__tags">
                {p.tags.slice(0, 4).map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <span className="project-mini__open">
                View project ↗
              </span>

            </div>
          </article>
        ))}

      </div>


      {/* ---------- Dots ---------- */}
      <div
        className="carousel__dots"
        role="tablist"
        aria-label="Choose a project"
      >
        {projects.map((p, i) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={i === index}
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

      <Leaf className="projects__leaf" />

    </section>
  )
}