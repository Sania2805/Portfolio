import { useEffect, useRef, useState } from 'react'
const tabs = {
  'about.js': [
    ['keyword','const '],['variable','sania'],['plain',' = {'],
    ['break',''],['property','  role'],['plain',': '],['string','"CSE student & developer"'],['plain',','],
    ['break',''],['property','  passion'],['plain',': '],['string','"Building useful things"'],['plain',','],
    ['break',''],['property','  curiousAbout'],['plain',': ['],['string','"AI"'],['plain',', '],['string','"ML"'],['plain',', '],['string','"Web"'],['plain','],'],
    ['break',''],['property','  motto'],['plain',': '],['string','"Learn. Build. Repeat."'],
    ['break',''],['plain','}']
  ],
  'skills.py': [
    ['keyword','skills'],['plain',' = {'],['break',''],
    ['string','  "languages"'],['plain',': ['],['string','"Python"'],['plain',', '],['string','"Java"'],['plain',', '],['string','"SQL"'],['plain','],'],
    ['break',''],['string','  "frontend"'],['plain',': ['],['string','"React"'],['plain',', '],['string','"JavaScript"'],['plain','],'],
    ['break',''],['string','  "backend"'],['plain',': ['],['string','"FastAPI"'],['plain',', '],['string','"MySQL"'],['plain','],'],
    ['break',''],['string','  "ml"'],['plain',': ['],['string','"scikit-learn"'],['plain',', '],['string','"pandas"'],['plain',']'],
    ['break',''],['plain','}']
  ],
  'now.json': [
    ['plain','{'],['break',''],
    ['property','  "studying"'],['plain',': '],['string','"B.Tech Computer Science"'],['plain',','],
    ['break',''],['property','  "exploring"'],['plain',': ['],['string','"ML"'],['plain',', '],['string','"LLM apps"'],['plain','],'],
    ['break',''],['property','  "currentlyBuilding"'],['plain',': '],['string','"ModelBench"'],['plain',','],
    ['break',''],['property','  "openToLearning"'],['plain',': '],['boolean','true'],
    ['break',''],['plain','}']
  ]
}
export default function AboutEditor() {
  const [active,setActive] = useState('about.js')
  const [visible,setVisible] = useState(0)
  const code = tabs[active]
  useEffect(() => {
    setVisible(0)
    const timer = setInterval(() => setVisible(v => Math.min(code.length,v+2)), 65)
    return () => clearInterval(timer)
  },[active,code.length])
  return <div className="about-editor">
    <div className="about-editor__top"><span className="about-editor__dots"><i/><i/><i/></span><span>little things about me ✳</span><span>⌘</span></div>
    <div className="about-editor__tabs" role="tablist" aria-label="About me files">
      {Object.keys(tabs).map(t => <button key={t} type="button" role="tab" aria-selected={active===t} className={active===t?'is-active':''} onClick={()=>setActive(t)}>{t}</button>)}
    </div>
    <div className="about-editor__body"><div className="about-editor__gutter">{Array.from({length:Math.max(6,code.filter(x=>x[0]==='break').length+1)},(_,i)=><span key={i}>{i+1}</span>)}</div><pre aria-live="off">{code.slice(0,visible).map(([kind,value],i)=>kind==='break'?<br key={i}/>:<span key={i} className={'about-editor__'+kind}>{value}</span>)}<span className="about-editor__cursor">▍</span></pre></div>
    <div className="about-editor__footer"><span>● JavaScript / Python / JSON</span><span>UTF-8 · just for fun ♡</span></div>
  </div>
}
