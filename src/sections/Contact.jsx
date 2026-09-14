import { Flower, Paperclip } from '../components/Decor.jsx'
import profile from '../data/profile.js'

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="contact__inner torn-paper">
        <Flower className="contact__doodle contact__doodle--flower" />
        <Paperclip className="contact__doodle contact__doodle--clip" />

        <h2 className="section-title section-title--on-dark">Let&apos;s Connect</h2>
        <p className="contact__lede">
          Have an idea, opportunity, or just want to say hi? I&apos;d love to
          hear from you!
        </p>

        <ul className="contact__list">
          <li>
            <span className="contact__label">Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <span className="contact__label">GitHub</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              {profile.githubHandle}
            </a>
          </li>
          <li>
            <span className="contact__label">LinkedIn</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedinHandle}
            </a>
          </li>
        </ul>

        <p className="handwritten contact__thanks">Thanks for stopping by ♡</p>
      </div>
    </section>
  )
}
