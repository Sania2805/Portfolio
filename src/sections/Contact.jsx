
import { useState } from 'react'
import { Flower, Paperclip } from '../components/Decor.jsx'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profile from '../data/profile.js'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/moeqgwkj'

  async function handleSubmit(e) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Unable to send your message. Please try again later.')
    }
  }

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

        {/* ---------- Contact Form ---------- */}

        {!submitted ? (
          <form
            className="contact__form"
            onSubmit={handleSubmit}
          >
            <div className="contact__form-row">

              <div className="contact__field">
                <label htmlFor="contact-name">
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email">
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

            </div>

            <div className="contact__field">
              <label htmlFor="contact-subject">
                Subject
              </label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="What would you like to talk about?"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
              />
            </div>

            <button
              type="submit"
              className="contact__submit"
            >
              Send Message
              <span aria-hidden="true">→</span>
            </button>
          </form>
        ) : (
          <div className="contact__success">
            <div className="contact__success-star">✦</div>

            <h3>Message sent!</h3>

            <p>
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>

            <button
              type="button"
              className="contact__send-another"
              onClick={() => setSubmitted(false)}
            >
              Send another message
            </button>
          </div>
        )}

        {/* ---------- Social Links ---------- */}

        <div className="contact__divider">
          <span>or find me here</span>
        </div>

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
