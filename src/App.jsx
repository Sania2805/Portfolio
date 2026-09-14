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
  return (
    <div className="board">

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
        <Projects />
        <Skills />
        <Coding />
        <Journey />
        <Certifications />
        <Contact />
      </main>

      <Footer />

    </div>
  )
}