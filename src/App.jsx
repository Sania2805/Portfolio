import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Coding from './sections/Coding.jsx'
import Journey from './sections/Journey.jsx'
import Hackathons from './sections/Hackathons.jsx'
import Certifications from './sections/Certifications.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import MemoryMatch from './sections/MemoryMatch.jsx'
import Cursor from './components/Cursor.jsx'
import StudioLoader from './components/StudioLoader.jsx'
import StickyNotes from './components/StickyNotes.jsx'
import StudioTerminal from './components/StudioTerminal.jsx'
import { useEffect } from 'react'

import {
  Book,
  Flower,
  Leaf,
  Laptop,
  Paintbrush,
  Paperclip,
  Star,
} from './components/Decor.jsx'

export default function App() {
  useEffect(() => {
    const main = document.querySelector('main')
    if (!main) return

    // Every section enters with an actual slide, not just an opacity change.
    const sections = Array.from(main.querySelectorAll(':scope > section, :scope > div.section'))
    const childrenSelector = [
      '.about__card', '.exploring__card', '.projects__heading', '.projects__card',
      '.skills__heading', '.skills__grid > *', '.coding__card', '.timeline__step',
      '.certifications__card', '.contact__inner', '.sticky-note',
      '.section-title', '.hero__card'
    ].join(', ')
    const motionNodes = Array.from(main.querySelectorAll(childrenSelector))
    const targets = [...new Set([...sections, ...motionNodes])]
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce || !('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('motion-visible'))
      return
    }

    targets.forEach((el, i) => {
      el.classList.add('motion-ready')
      el.style.setProperty('--motion-delay', `${(i % 4) * 95}ms`)
    })
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('motion-visible', 'section-in-view')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -45px 0px' })
    targets.forEach(el => observer.observe(el))

    // Subtle movement of background doodles while the user scrolls.
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY, 2400)
        document.documentElement.style.setProperty('--scroll-drift', `${offset * 0.055}px`)
        frame = 0
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
      targets.forEach(el => el.style.removeProperty('--motion-delay'))
      document.documentElement.style.removeProperty('--scroll-drift')
    }
  }, [])
  
  return (
    <div className="board">
      <StudioLoader />
      <StudioTerminal />
      <Cursor />
      <Navbar />

      {/* ---------- Scrapbook decorations ---------- */}
      <div className="board__decorations" aria-hidden="true">

        {/* Hero / top area */}
        <div className="scrap-deco scrap-deco--leaf-top">
          <Leaf />
          <Leaf />
          <Leaf />
        </div>

        <Star className="scrap-deco scrap-deco--star-top" />

        {/* Around About */}
        <div className="scrap-deco scrap-deco--books">
          <Book />
          
        </div>

        <Flower className="scrap-deco scrap-deco--flower-about" />

        <Paintbrush className="scrap-deco scrap-deco--brush" />

        {/* Around Projects */}
        <Leaf className="scrap-deco scrap-deco--leaf-projects" />
        <Star className="scrap-deco scrap-deco--star-projects" />

        {/* Around Skills */}
        <Flower className="scrap-deco scrap-deco--flower-skills" />
        <Leaf className="scrap-deco scrap-deco--leaf-skills" />

        {/* Coding */}
        <Laptop className="scrap-deco scrap-deco--laptop" />
        <Star className="scrap-deco scrap-deco--star-coding" />

        {/* Journey / Certifications */}
        <Flower className="scrap-deco scrap-deco--flower-journey" />
        <Leaf className="scrap-deco scrap-deco--leaf-journey" />

        <Paperclip className="scrap-deco scrap-deco--paperclip" />

        {/* Bottom / contact */}
        <Leaf className="scrap-deco scrap-deco--leaf-contact" />
        <Star className="scrap-deco scrap-deco--star-contact" />

      </div>

      <main>
        <Hero />
        <About />
        <StickyNotes />
        <Projects />
        <Skills />
        <Coding />
        <Journey />
        <Certifications />
        <Contact />
        <MemoryMatch />
      </main>

      <Footer />

    </div>
  )
}