import { Flower, Paperclip } from '../components/Decor.jsx'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profile from '../data/profile.js'

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="contact__inner torn-paper">

        <Flower className="contact__doodle contact__doodle--flower" />
        <Paperclip className="contact__doodle contact__doodle--clip" />

        <h2 className="section-title section-title--on-dark">
          Let&apos;s Connect
        </h2>

        <p className="contact__lede">
          Have an idea, opportunity, or just want to say hi? I&apos;d love to
          hear from you!
        </p>

        <div className="contact__socials">

          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="contact__social"
            aria-label="Send me an email"
            title="Email"
          >
            <Mail />
          </a>

          {/* GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="contact__social"
            aria-label="Visit my GitHub profile"
            title="GitHub"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact__social"
            aria-label="Visit my LinkedIn profile"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

        </div>

        <p className="handwritten contact__thanks">
          Thanks for stopping by ♡
        </p>

      </div>
    </section>
  )
}