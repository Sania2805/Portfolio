import certifications from '../data/certifications.js'

export default function Certifications() {
  return (
    <section className="certifications section">

      <h2 className="section-title">
        Certifications
        <span aria-hidden="true">✦</span>
      </h2>

      <div className="certifications__list">
        {certifications.map((cert, i) => (
          <article
            key={cert.title}
            className={`certifications__card certifications__card--${i % 2 === 0 ? 'left' : 'right'}`}
          >

            {/* Certificate icon */}
            <div className="certifications__icon" aria-hidden="true">
              <span>✧</span>
            </div>

            {/* Certificate information */}
            <div className="certifications__content">
              <h3>{cert.title}</h3>

              <p className="certifications__issuer">
                {cert.issuer}
              </p>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="certifications__link"
                >
                  View Certificate
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>

          </article>
        ))}
      </div>

      {/* little decorative doodle */}
      <div className="certifications__doodle" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </section>
  )
}