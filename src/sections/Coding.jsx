import { useEffect, useRef, useState } from 'react'
import { Star, Tape } from '../components/Decor.jsx'
import profile from '../data/profile.js'

export default function Coding() {
  const { gfg, leetcode } = profile.coding
  const [opened, setOpened] = useState(false)
  const [stamped, setStamped] = useState(false)
  const [active, setActive] = useState(null)
  const timers = useRef([])

  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = [] }
  useEffect(() => () => clearTimers(), [])
  const play = () => {
    clearTimers()
    setOpened(false)
    setStamped(false)
    setActive(null)
    timers.current.push(setTimeout(() => setOpened(true), 80))
    timers.current.push(setTimeout(() => setStamped(true), 850))
  }
 useEffect(() => {
  const section = document.getElementById('coding')
  if (!section) return

  let hasPlayed = false

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !hasPlayed) {
        hasPlayed = true

        // Automatically play the passport animation
        play()

        // Don't auto-play again while scrolling
        observer.disconnect()
      }
    },
    {
      threshold: 0.25
    }
  )

  observer.observe(section)

  return () => {
    observer.disconnect()
    clearTimers()
  }
}, [])

  const entries = [
    { key: 'gfg', name: 'GeeksforGeeks', info: gfg, number: '01', symbol: '✦' },
    { key: 'leetcode', name: 'LeetCode', info: leetcode, number: '02', symbol: '✿' },
  ]

  return (
    <section id="coding" className="coding section">
      <div className="coding__paper torn-paper">
        <Tape className="coding__tape coding__tape--left" rotate={-7} />
        <Tape className="coding__tape coding__tape--right" rotate={6} />
        <div className="coding__heading">
          <h2 className="coding__title">Coding <Star /></h2>
          <div className="coding__underline" />
          <p className="handwritten coding__subtitle">Solving problems, one step at a time.</p>
        </div>
        <div className="coding-passport__scene">
          <div className={`coding-passport ${opened ? 'is-open' : ''}`} aria-label="Coding achievements passport">
            <div className="coding-passport__cover" aria-hidden="true">
              <span className="coding-passport__cover-star">✧</span>
              <span>THE CODER'S</span><strong>PASSPORT</strong><span className="coding-passport__cover-emblem">⌘</span>
              <small>little milestones, big curiosity ♡</small>
            </div>
            <div className="coding-passport__spread">
              {entries.map((entry, i) => (
                <div className={`coding-passport__page coding-passport__page--${entry.key}`} key={entry.key}>
                  <div className="coding-passport__page-top"><span>CODE JOURNAL</span><span>ENTRY {entry.number}</span></div>
                  <div className="coding-passport__page-heading">{entry.name}</div>
                  <button type="button" className={`coding-passport__stamp ${stamped ? 'is-stamped' : ''} ${active === entry.key ? 'is-active' : ''}`}
                    style={{ '--stamp-delay': `${i * 380}ms` }} onClick={() => setActive(active === entry.key ? null : entry.key)}
                    aria-label={`Show ${entry.name} achievement details`} aria-expanded={active === entry.key}>
                    <span className="coding-passport__stamp-symbol">{entry.symbol}</span>
                    <strong>{entry.info.count}</strong>
                    <span>PROBLEMS SOLVED</span>
                  </button>
                  <div className="coding-passport__entry-foot">{active === entry.key ? 'achievement unlocked! ♡' : 'tap the stamp to explore ↗'}</div>
                  {active === entry.key && <div className="coding-passport__detail">
                    <span>{entry.info.label}</span>
                    <a href={entry.info.url} target="_blank" rel="noopener noreferrer">View coding profile ↗</a>
                  </div>}
                  <div className="coding-passport__page-number">{entry.number} / 02</div>
                </div>
              ))}
            </div>
          </div>
          <button type="button" className="coding-passport__replay" onClick={play}> Stamp my passport </button>
          <p className="coding-passport__note handwritten">a passport full of little coding victories ✧</p>
        </div>
      </div>
    </section>
  )
}
