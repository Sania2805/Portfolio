import ScrapCard from '../components/ScrapCard.jsx'
import PolaroidFrame from '../components/PolaroidFrame.jsx'
import { Star, Leaf, Book } from '../components/Decor.jsx'
import profile from '../data/profile.js'

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <ScrapCard tone="cream" rotate={-1.4} className="hero__card">
        <Leaf className="hero__leaf hero__leaf--1" />
        <Leaf className="hero__leaf hero__leaf--2" />
        <Star className="hero__star" />

        <p className="handwritten hero__margin-note">big dreams · good code · better coffee</p>

        <p className="eyebrow-hand">Hi, I&apos;m</p>
        <h1 className="hero__name">
          Sania Ghosh <span aria-hidden="true">♡</span>
        </h1>

        <p className="hero__roles">
          BTech CSE Student · Data Scientist · ML Engineer · Web Developer
        </p>

        <p className="handwritten hero__tagline">
          Somewhere between data, code and a good idea.
        </p>

        <div className="hero__actions">
          <a href="#work" className="btn btn--primary">
            View My Work
          </a>
          <a href="/resume.pdf" className="btn btn--ghost" download>
            Download Resume <span aria-hidden="true">⬇</span>
          </a>
        </div>

        <ul className="hero__social" aria-label="Social links">
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon />
            </a>
          </li>
        </ul>
      </ScrapCard>

      <div className="hero__portrait">
        <PolaroidFrame
          src="/images/profile-illustration.png"
          alt="Illustrated portrait of Sania at her desk"
          caption="dream · build · grow ♡"
          rotate={3}
          placeholderLabel="add your illustration here"
        />
        <Book className="hero__book-doodle" />
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.1 3.3 9.4 7.9 11 .6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0C17 4 18 4.3 18 4.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}
