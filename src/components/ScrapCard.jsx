import { Tape } from './Decor.jsx'

/**
 * A reusable "piece of paper" wrapper — torn edges, slight rotation,
 * optional washi tape at the top. Used throughout the site so every
 * section reads as part of the same scrapbook.
 */
export default function ScrapCard({
  as: Tag = 'div',
  tone = 'cream', // cream | beige | navy
  rotate = 0,
  tape = false,
  tapeRotate = -6,
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag
      className={`scrap-card scrap-card--${tone} torn-paper ${className}`}
      style={{ '--rotate': `${rotate}deg` }}
      {...rest}
    >
      {tape && <Tape rotate={tapeRotate} className="scrap-card__tape" />}
      {children}
    </Tag>
  )
}
