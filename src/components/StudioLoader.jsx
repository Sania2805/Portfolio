import { useEffect, useState } from 'react'

const deck = [
  { file: 'hello_world.jsx', label: 'A little introduction', tag: 'React · creativity', code: ['const developer = {', '  name: "Sania Ghosh",', '  loves: ["code", "design"],', '  status: "creating ✨"', '}'], note: 'hello, nice to meet you!' },
  { file: 'building_things.py', label: 'Behind the projects', tag: 'Python · ML · FastAPI', code: ['from ideas import curiosity', 'projects = ["ModelBench",', '            "ResolveDesk AI"]', 'print("making ideas real")'], note: 'a little bit of magic' },
  { file: 'the_next_chapter.md', label: 'Ready to explore', tag: 'CSE · learning by doing', code: ['# Currently exploring', 'machine_learning: true', 'web_development: true', 'new_ideas: always', '>>> welcome aboard!'], note: 'turning the page...' },
]

export default function StudioLoader() {
  const [visible, setVisible] = useState(true)
  const [leaving, setLeaving] = useState(false)
  const [progress, setProgress] = useState(0)
  const [cardIndex, setCardIndex] = useState(0)
  const [shuffling, setShuffling] = useState(false)
  const [typed, setTyped] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false)
      return
    }
    const started = performance.now()
    const timer = window.setInterval(() => {
      const pct = Math.min(100, Math.floor((performance.now() - started) / 4800 * 100))
      setProgress(pct)
      if (pct >= 100) window.clearInterval(timer)
    }, 35)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress >= 100 && !leaving) {
      const timer = window.setTimeout(() => setLeaving(true), 250)
      return () => window.clearTimeout(timer)
    }
  }, [progress, leaving])

  useEffect(() => {
    if (!leaving) return
    const timer = window.setTimeout(() => setVisible(false), 450)
    return () => window.clearTimeout(timer)
  }, [leaving])

  useEffect(() => {
    if (!visible || leaving) return
    const next = progress >= 68 ? 2 : progress >= 34 ? 1 : 0
    if (next === cardIndex || shuffling) return
    setShuffling(true)
    const timer = window.setTimeout(() => {
      setCardIndex(next)
      setTyped(0)
      setShuffling(false)
    }, 650)
    return () => window.clearTimeout(timer)
  }, [progress, cardIndex, shuffling, visible, leaving])

  useEffect(() => {
    if (!visible || shuffling || leaving) return
    setTyped(0)
    const length = deck[cardIndex].code.join('\n').length
    let count = 0
    const timer = window.setInterval(() => {
      count = Math.min(length, count + 2)
      setTyped(count)
      if (count >= length) window.clearInterval(timer)
    }, 28)
    return () => window.clearInterval(timer)
  }, [cardIndex, shuffling, visible, leaving])

  if (!visible) return null
  const current = deck[cardIndex]
  const upcoming = deck[Math.min(cardIndex + 1, deck.length - 1)]
  const behind = deck[Math.min(cardIndex + 2, deck.length - 1)]
  const close = () => setLeaving(true)
  return (
    <div className={`studio-loader deck-loader ${leaving ? 'deck-loader--leaving' : ''}`} role="status" aria-label="Loading portfolio" aria-live="off">
      <div className="deck-loader__top">
        <span className="deck-loader__brand">✳ &nbsp; SANIA'S SCRAPBOOK</span>
        <button type="button" onClick={close} aria-label="Skip intro">skip ↗</button>
      </div>
      <div className="deck-loader__stage">
        <p className="deck-loader__overline">a little peek behind the scenes</p>
        <h1>Putting the <em>pieces</em> together<span className="deck-loader__dot">.</span></h1>
        <div className="deck-loader__stack" aria-label={`Card ${cardIndex + 1} of ${deck.length}: ${current.label}`}>
          <div className="deck-loader__card deck-loader__card--back">
            <div className="deck-loader__under-file">{behind.file}</div>
            <div className="deck-loader__under-terminal"><pre>{behind.code.join('\n').slice(0, Math.min(behind.code.join('\n').length, Math.floor(progress * 1.2)))}</pre></div>
          </div>
          <div className="deck-loader__card deck-loader__card--middle">
            <div className="deck-loader__under-file"><span className="deck-loader__lights"><i/><i/><i/></span>{upcoming.file}</div>
            <div className="deck-loader__under-terminal"><pre>{upcoming.code.join('\n').slice(0, Math.min(upcoming.code.join('\n').length, Math.floor(progress * 1.8)))}<span className="deck-loader__caret">▍</span></pre><small>● compiling next chapter...</small></div>
            <div className="deck-loader__under-caption">{upcoming.note}</div>
          </div>
          <div className={`deck-loader__card deck-loader__card--front ${shuffling ? 'deck-loader__card--shuffle' : ''}`}>
            <span className="deck-loader__tape" aria-hidden="true" />
            <div className="deck-loader__file"><span className="deck-loader__lights"><i/><i/><i/></span><span>{current.file}</span><span className="deck-loader__pill">0{cardIndex + 1}/03</span></div>
            <div className="deck-loader__code"><pre>{current.code.join('\n').slice(0, typed)}<span className="deck-loader__caret">▍</span></pre><div className="deck-loader__codefoot"><span>● {current.tag}</span><span>{progress}%</span></div></div>
            <div className="deck-loader__caption"><span>{current.note}</span><span className="deck-loader__star">✳</span></div>
          </div>
        </div>
        <div className="deck-loader__progress"><div className="deck-loader__progresslabel"><span>collecting little moments...</span><strong>{progress}%</strong></div><div className="deck-loader__track"><div style={{ width: `${progress}%` }} /></div></div>
      </div>
      <div className="deck-loader__bottom"><span>MADE WITH CURIOSITY & COFFEE ☕</span><span>EST. 2026 · PORTFOLIO</span></div>
    </div>
  )
}
