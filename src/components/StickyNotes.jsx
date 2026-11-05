import { useRef, useState } from 'react'
const notes=[
  {id:'one',text:'currently exploring\nAI + machine learning ✳',icon:'✿',tone:'peach'},
  {id:'two',text:'debugging is just\nsolving tiny mysteries',icon:'✦',tone:'sage'},
  {id:'three',text:'made of curiosity\n& a little coffee ☕',icon:'♡',tone:'yellow'}
]
export default function StickyNotes(){
  const [positions,setPositions]=useState({})
  const drag=useRef(null)
  const move=e=>{
    if(!drag.current || drag.current.pointer!==e.pointerId)return
    const {id,startX,startY,x,y}=drag.current
    setPositions(old=>({...old,[id]:{x:x+e.clientX-startX,y:y+e.clientY-startY}}))
  }
  const stop=e=>{if(drag.current?.pointer===e.pointerId)drag.current=null}
  return <div className="sticky-notes" aria-label="Draggable scrapbook notes" onPointerMove={move} onPointerUp={stop} onPointerCancel={stop}>
    {notes.map(n=><div key={n.id} className={`sticky-note sticky-note--${n.tone}`} style={{transform:`translate(${positions[n.id]?.x||0}px,${positions[n.id]?.y||0}px) rotate(${n.id==='two'?3:-3}deg)`}} onPointerDown={e=>{if(e.button!==0)return;e.currentTarget.setPointerCapture(e.pointerId);drag.current={id:n.id,pointer:e.pointerId,startX:e.clientX,startY:e.clientY,x:positions[n.id]?.x||0,y:positions[n.id]?.y||0}}} title="Drag me around">
      <span className="sticky-note__pin">●</span><span className="sticky-note__icon">{n.icon}</span><span>{n.text}</span>
    </div>)}
  </div>
}
