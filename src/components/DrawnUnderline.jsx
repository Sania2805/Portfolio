import { useEffect, useRef, useState } from 'react'
export default function DrawnUnderline(){
  const ref=useRef(null)
  const [draw,setDraw]=useState(false)
  useEffect(()=>{
    const obs=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setDraw(true);obs.disconnect()}},{threshold:.2})
    if(ref.current)obs.observe(ref.current)
    return ()=>obs.disconnect()
  },[])
  return <svg ref={ref} className={`drawn-underline ${draw?'is-drawn':''}`} viewBox="0 0 250 35" fill="none" aria-hidden="true">
    <path d="M6 20 Q56 2 120 15 T243 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M208 25 l18 -9 -9 -10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 4 l3 7 7 2 -7 3 -3 7 -3 -7 -7 -3 7 -2z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
}
