import { useEffect, useState } from 'react'
import { Star } from './Decor.jsx'

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [trail, setTrail] = useState([])

  useEffect(() => {
    // Don't run the custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    let lastTrailTime = 0

    function handleMouseMove(e) {
      const { clientX, clientY } = e

      setPosition({
        x: clientX,
        y: clientY,
      })

      // Small, subtle trail
      const now = Date.now()

      if (now - lastTrailTime > 70) {
        lastTrailTime = now

        setTrail((prev) => [
          ...prev.slice(-2),
          {
            id: now,
            x: clientX,
            y: clientY,
          },
        ])
      }
    }

    function handleMouseOver(e) {
      const target = e.target.closest(
        'a, button, [role="button"], input, textarea, select'
      )

      setHovering(Boolean(target))
    }

    function handleMouseLeave() {
      setTrail([])
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Tiny fading trail */}
      <div className="cursor__trail" aria-hidden="true">
        {trail.map((dot, index) => (
          <span
            key={dot.id}
            className={`cursor__dot cursor__dot--${index}`}
            style={{
              left: dot.x,
              top: dot.y,
            }}
          />
        ))}
      </div>

      {/* Main hand-drawn star */}
      <Star
        className={`cursor__star ${
          hovering ? 'cursor__star--hover' : ''
        }`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  )
}