// Small hand-drawn-style doodle icons used as scrapbook decorations.
// They're purely decorative, so they're marked aria-hidden.

export function Tape({ className = '', rotate = -4, style = {} }) {
  return (
    <span
      className={`tape ${className}`}
      aria-hidden="true"
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    />
  )
}

export function Star({ className = '', size = 22, style  }) {
  return (
    <svg
      className={`doodle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
        style={style}
    >
      <path
        d="M12 2.5c.6 3.3 1.4 5.6 2.6 6.9 1.3 1.2 3.6 2 6.9 2.6-3.3.6-5.6 1.4-6.9 2.6-1.2 1.3-2 3.6-2.6 6.9-.6-3.3-1.4-5.6-2.6-6.9-1.3-1.2-3.6-2-6.9-2.6 3.3-.6 5.6-1.4 6.9-2.6 1.2-1.3 2-3.6 2.6-6.9Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Heart({ className = '', size = 20 }) {
  return (
    <svg
      className={`doodle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 20.2s-7.6-4.6-10-9.3C.6 7.6 2.4 4 6 4c2.1 0 3.6 1.3 6 3.7C14.4 5.3 15.9 4 18 4c3.6 0 5.4 3.6 4 6.9-2.4 4.7-10 9.3-10 9.3Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Leaf({ className = '', size = 26 }) {
  return (
    <svg
      className={`doodle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 20c8-1 13-6 15-15-9 1-14 6-15 15Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M5.5 19C9 15 12 12 17 6" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

export function Flower({ className = '', size = 24 }) {
  return (
    <svg
      className={`doodle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="2.1" stroke="currentColor" strokeWidth="1.1" />
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx="12"
          cy="6.3"
          rx="2"
          ry="3"
          stroke="currentColor"
          strokeWidth="1.1"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
    </svg>
  )
}

export function ArrowCurve({ className = '', size = 40, flip = false }) {
  return (
    <svg
      className={`doodle ${className}`}
      width={size}
      height={size * 0.6}
      viewBox="0 0 60 36"
      fill="none"
      aria-hidden="true"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path
        d="M2 6c14 0 30 2 40 14"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M34 12l8 8-10 2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Book({ className = '', size = 26 }) {
  return (
    <svg
      className={`doodle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 5.2c2.6-1 5.4-1 8 0v14c-2.6-1-5.4-1-8 0v-14Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M21 5.2c-2.6-1-5.4-1-8 0v14c2.6-1 5.4-1 8 0v-14Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Paintbrush({ className = '', size = 26 }) {
  return (
    <svg
      className={`doodle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15.5 3.5c1.7-.7 3.2.8 2.5 2.5-.6 1.4-3 3.6-5.7 5.7l-1.5-1.5c2.1-2.7 4.3-5.1 5.7-5.7Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M11 10.2 6.8 14.4c-.9.9-1.2 2.2-.8 3.4l.3.9-.9-.3a3 3 0 0 1-1.9-1.9l-.3-.9.9.3c1.2.4 2.5.1 3.4-.8L11.7 11Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Laptop({ className = '', size = 26 }) {
  return (
    <svg
      className={`doodle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect x="5" y="5" width="14" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3 17.5h18l-1.6 2.1a2 2 0 0 1-1.6.9H6.2a2 2 0 0 1-1.6-.9L3 17.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

export function Notebook({ className = '', size = 26 }) {
  return (
    <svg
      className={`doodle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect x="4" y="3" width="16" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 3v18" stroke="currentColor" strokeWidth="1.1" />
      <path d="M11 8h7M11 12h7M11 16h5" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export function People({ className = '', size = 26 }) {
  return (
    <svg
      className={`doodle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3.5 19c.5-3.4 2.7-5.2 5.5-5.2S14 15.6 14.5 19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="16.5" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.1" />
      <path d="M15 13.6c2.3.1 4 1.7 4.4 4.4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}

export function Lightbulb({ className = '', size = 26 }) {
  return (
    <svg
      className={`doodle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M9 17h6M10 20h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path
        d="M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.9v.7h5v-.7c0-.8.4-1.5 1-1.9A6 6 0 0 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Growth({ className = '', size = 26 }) {
  return (
    <svg
      className={`doodle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 20h18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 20v-5M12 20V9M18 20v-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 5l4-1-1 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.5 4 12 11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function Paperclip({ className = '', size = 24 }) {
  return (
    <svg
      className={`doodle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 12.5 15 4.6a3 3 0 1 1 4.2 4.2l-9 9a5 5 0 0 1-7-7l8.5-8.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export const ICONS = {
  notebook: Notebook,
  people: People,
  lightbulb: Lightbulb,
  growth: Growth,
  laptop: Laptop,
}
