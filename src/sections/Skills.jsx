import { useEffect, useRef, useState } from 'react'
import { Star, Tape } from '../components/Decor.jsx'
import skills from '../data/skills.js'

const icons = ['✿', '⌘', '✧', '▤', '✦']

export default function Skills() {
  const [selected, setSelected] = useState(0)
  const [dispensing, setDispensing] = useState(false)
  const [delivered, setDelivered] = useState(null)
  const timer = useRef(null)
  const current = skills[selected]

  useEffect(() => () => clearTimeout(timer.current), [])

  const selectCategory = (index) => {
    if (dispensing) return
    setSelected(index)
    setDelivered(null)
  }

  const dispense = () => {
    if (dispensing) return
    clearTimeout(timer.current)
    setDelivered(null)
    setDispensing(true)
    timer.current = setTimeout(() => {
      setDispensing(false)
      setDelivered(selected)
    }, 1050)
  }

  return (
    <section id="skills" className="skills section">
      <div className="skills__paper skills-vend-wrap">
        <Tape className="skills__tape skills__tape--left" rotate={-6} />
        <Tape className="skills__tape skills__tape--right" rotate={5} />
        <div className="skills__heading">
          <h2 className="skills__title">Skills <Star /></h2>
          <div className="skills__underline" />
          <p className="handwritten skills__subtitle">a little something from my toolbox ♡</p>
        </div>

        <div className="skills-vend">
          <div className="skills-vend__intro">
            
            <p>Pick a category, press dispense, and collect what's inside!</p>
          </div>
          <div className="skills-vend__machine" aria-label="Interactive skills vending machine">
            <div className="skills-vend__top">SKILL-O-MATIC <span>♡</span></div>
            <div className="skills-vend__tabs" role="group" aria-label="Choose a skill category">
              {skills.map((group, i) => (
                <button key={group.group} type="button" disabled={dispensing}
                  className={`skills-vend__tab ${selected === i ? 'is-selected' : ''}`}
                  onClick={() => selectCategory(i)} aria-pressed={selected === i}>
                  {group.group}
                </button>
              ))}
            </div>
            <div className="skills-vend__display">
              <div className="skills-vend__glass">
                <div className="skills-vend__shelf" />
                {skills.map((group, i) => (
                  <button key={group.group} type="button" disabled={dispensing}
                    className={`skills-vend__product skills-vend__product--${i} ${selected === i ? 'is-selected' : ''} ${dispensing && selected === i ? 'is-dropping' : ''}`}
                    onClick={() => selectCategory(i)} aria-label={`Select ${group.group}`} aria-pressed={selected === i}>
                    <span className="skills-vend__product-symbol">{icons[i]}</span>
                    <span className="skills-vend__product-name">{group.group}</span>
                  </button>
                ))}
              </div>
              <div className="skills-vend__controls">
                <div className="skills-vend__screen"><small>YOUR SELECTION</small><strong>{current.group}</strong><span>{String(selected + 1).padStart(2, '0')} / {String(skills.length).padStart(2, '0')}</span></div>
                <button className="skills-vend__dispense" type="button" disabled={dispensing} onClick={dispense}>
                  {dispensing ? 'DISPENSING…' : 'DISPENSE ↓'}
                </button>
                <span className="skills-vend__controls-note">free refills, always ✿</span>
              </div>
            </div>
            <div className="skills-vend__slot" aria-hidden="true"><span>COLLECT HERE ↓</span><div className="skills-vend__slot-mouth" /></div>
            <div className="skills-vend__base">made with curiosity & a little caffeine ☕</div>
          </div>
          <div className={`skills-vend__tray ${delivered !== null ? 'has-delivery' : ''}`} aria-live="polite">
            {delivered === null ? (
              <div className="skills-vend__empty">{dispensing ? 'Your skill pack is on its way… ✦' : 'Your skill pack will appear here ♡'}</div>
            ) : (
              <div className="skills-vend__receipt" key={delivered}>
                <div className="skills-vend__receipt-top"><span>✦ freshly dispensed</span><span>№ {String(delivered + 1).padStart(2, '0')}</span></div>
                <h3>{skills[delivered].group}</h3>
                <ul>{skills[delivered].items.map((item, i) => <li key={item} style={{ '--chip-order': i }}>{item}</li>)}</ul>
                <p>thank you for exploring my toolbox! ♡</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
