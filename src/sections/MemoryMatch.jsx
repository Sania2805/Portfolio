import { useEffect, useRef, useState } from 'react'

const treasures = [
  { id: 'flower', icon: '✿', name: 'Flower' },
  { id: 'heart', icon: '♡', name: 'Heart' },
  { id: 'coffee', icon: '☕', name: 'Coffee' },
  { id: 'book', icon: '📖', name: 'Book' },
]

function newDeck() {
  const cards = treasures.flatMap(item => [0, 1].map(copy => ({ ...item, key: `${item.id}-${copy}` })))
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[cards[i], cards[j]] = [cards[j], cards[i]]
  }
  return cards
}

export default function MemoryMatch() {
  const [deck, setDeck] = useState(newDeck)
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [moves, setMoves] = useState(0)
  const timeoutRef = useRef(null)
  const locked = flipped.length === 2
  const won = matched.length === treasures.length

  useEffect(() => {
    if (flipped.length !== 2) return
    const [first, second] = flipped
    if (deck[first].id === deck[second].id) {
      setMatched(prev => [...prev, deck[first].id])
      setFlipped([])
    } else {
      timeoutRef.current = window.setTimeout(() => {
        setFlipped([])
        timeoutRef.current = null
      }, 850)
    }
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [flipped, deck])

  function turnCard(i) {
    if (locked || flipped.includes(i) || matched.includes(deck[i].id)) return
    if (flipped.length === 1) setMoves(n => n + 1)
    setFlipped(prev => [...prev, i])
  }

  function restart() {
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current)
    timeoutRef.current = null
    setDeck(newDeck())
    setFlipped([])
    setMatched([])
    setMoves(0)
  }

  return (
    <section id="play" className="memory-section section" aria-labelledby="memory-title">
      <div className="memory-paper torn-paper">
        <p className="memory-eyebrow">a little break before you go? ♡</p>
        <h2 id="memory-title" className="section-title">The Memory Corner <span aria-hidden="true">✿</span></h2>
        <p className="memory-intro">Flip the little scrapbook cards and find all four matching pairs!</p>
        <div className="memory-toolbar">
          <span>moves: <strong>{moves}</strong></span>
          <span>pairs: <strong>{matched.length} / {treasures.length}</strong></span>
          <button className="memory-reset" type="button" onClick={restart}>↻ shuffle again</button>
        </div>
        <div className="memory-grid" aria-label="Memory matching game">
          {deck.map((card, i) => {
            const visible = flipped.includes(i) || matched.includes(card.id)
            const isMatched = matched.includes(card.id)
            return (
              <button
                key={card.key}
                type="button"
                className={`memory-card${visible ? ' is-flipped' : ''}${isMatched ? ' is-matched' : ''}`}
                onClick={() => turnCard(i)}
                disabled={isMatched || (locked && !visible)}
                aria-label={visible ? `${card.name}${isMatched ? ', matched' : ''}` : `Hidden card ${i + 1}`}
                aria-pressed={visible}
              >
                <span className="memory-card__inner">
                  <span className="memory-card__face memory-card__back" aria-hidden="true">✿<small>turn me</small></span>
                  <span className="memory-card__face memory-card__front" aria-hidden="true">{card.icon}<small>{card.name}</small></span>
                </span>
              </button>
            )
          })}
        </div>
        <p className="memory-message" role="status" aria-live="polite">
          {won ? `you found them all in ${moves} moves! a little gold star for you ♡` : 'take your time, there’s no timer here ☕'}
        </p>
      </div>
    </section>
  )
}
