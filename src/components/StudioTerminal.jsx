import { useEffect, useRef, useState } from 'react'

const commands = {
  home: ['#home', 'Back to the beginning'],
  about: ['#about', 'A little about me'],
  projects: ['#work', 'Opening my projects'],
  work: ['#work', 'Opening my projects'],
  skills: ['#skills', 'Opening my toolkit'],
  coding: ['#coding', 'Opening coding profiles'],
  journey: ['#journey', 'Opening my journey'],
  hackathons: ['#hackathons', 'Opening hackathons'],
  certifications: ['#certifications', 'Opening certifications'],
  contact: ['#contact', 'Opening contact'],
}
export default function StudioTerminal() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [lines, setLines] = useState(['Welcome to my tiny terminal ✦', 'Type help to see where you can go.'])
  const inputRef = useRef(null)
  const outputRef = useRef(null)
  useEffect(() => { if (open) inputRef.current?.focus() }, [open])
  useEffect(() => { outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: 'smooth' }) }, [lines])
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); if (e.key === '`' && !['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)) { e.preventDefault(); setOpen(v => !v) } }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  function submit(e) {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    setInput('')
    if (!cmd) return
    if (cmd === 'clear') { setLines([]); return }
    if (cmd === 'help') { setLines(l => [...l, `❯ ${cmd}`, 'Commands: ' + Object.keys(commands).join(', '), 'Also: help, clear']); return }
    if (commands[cmd]) {
      const [selector, message] = commands[cmd]
      setLines(l => [...l, `❯ ${cmd}`, `${message} ↗`])
      setOpen(false)
      window.setTimeout(() => {
        document.querySelector(selector)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
        window.history.replaceState(null, '', selector)
      }, 120)
      return
    }
    setLines(l => [...l, `❯ ${cmd}`, `I don't know that one yet. Try help!`])
  }
  return <>
    <button className="studio-terminal-trigger" type="button" onClick={() => setOpen(true)} aria-label="Open interactive terminal" title="Open terminal (`)"><span>⌘</span> terminal <span className="studio-terminal-trigger__arrow">↗</span></button>
    {open && <div className="studio-terminal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) setOpen(false) }}>
      <section className="studio-terminal" role="dialog" aria-modal="true" aria-label="Portfolio navigation terminal">
        <header className="studio-terminal__header"><div className="studio-terminal__dots"><i/><i/><i/></div><span>sania@portfolio ~</span><button onClick={() => setOpen(false)} aria-label="Close terminal">✕</button></header>
        <div className="studio-terminal__output" ref={outputRef} aria-live="polite">{lines.map((line, i) => <p key={i}>{line}</p>)}</div>
        <form className="studio-terminal__form" onSubmit={submit}><label htmlFor="studio-command">❯</label><input id="studio-command" ref={inputRef} value={input} onChange={e => setInput(e.target.value)} placeholder="try projects or skills..." autoComplete="off" spellCheck="false"/><button type="submit">↵</button></form>
        <footer className="studio-terminal__footer">type <strong>help</strong> for commands <span>ESC to close</span></footer>
      </section>
    </div>}
  </>
}
