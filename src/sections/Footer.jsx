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
      <p className="footer__copy">© {year} Sania Ghosh</p>
    </footer>
  )
}
