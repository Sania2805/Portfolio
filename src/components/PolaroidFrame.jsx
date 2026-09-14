import { useState } from 'react'
import { Tape } from './Decor.jsx'

/**
 * A polaroid-style frame for photos/illustrations/screenshots.
 * Falls back to a soft placeholder if the image file hasn't been
 * added yet, so the layout never breaks.
 */
export default function PolaroidFrame({
  src,
  alt,
  caption,
  rotate = -3,
  tape = true,
  placeholderLabel = 'add your image here',
  className = '',
}) {
  const [failed, setFailed] = useState(false)

  return (
    <figure
      className={`polaroid ${className}`}
      style={{ '--rotate': `${rotate}deg` }}
    >
      {tape && <Tape rotate={rotate < 0 ? 5 : -5} className="polaroid__tape" />}
      <div className="polaroid__window">
        {!failed ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="polaroid__placeholder" role="img" aria-label={alt}>
            <span>{placeholderLabel}</span>
          </div>
        )}
      </div>
      {caption && <figcaption className="handwritten polaroid__caption">{caption}</figcaption>}
    </figure>
  )
}
