import profile from '../data/profile.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer__brand">
        Sania Ghosh <span aria-hidden="true">✦</span>
      </p>
      <p className="footer__tagline">
        BTech CSE · Data Science · ML · Web Development
      </p>
      <p className="footer__links">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span aria-hidden="true"> · </span>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <span aria-hidden="true"> · </span>
        <a href={`mailto:${profile.email}`}>Email</a>
      </p>
      <p className="footer__copy">© {year} Sania Ghosh</p>
    </footer>
  )
}
