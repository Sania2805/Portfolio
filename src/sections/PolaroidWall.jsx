// Replace these image paths with your own photos in public/images/polaroid-wall/.
// The second copy of the strip makes the right-to-left movement seamless.
const photos = [
  '/images/polaroid/pic-1.jpeg',
  '/images/polaroid/pic-2.jpeg',
  '/images/polaroid/pic-3.jpeg',
  '/images/polaroid/pic-4.jpeg',
  '/images/polaroid/pic-5.jpeg',
  '/images/polaroid/pic-6.jpeg',
  '/images/polaroid/pic-7.jpeg',
  '/images/polaroid/pic-8.jpeg',
]

export default function PolaroidWall() {
  return (
    <section className="polaroid-wall" aria-label="Moving photo wall">
      <div className="polaroid-wall__viewport">
        <div className="polaroid-wall__track">
          {[0, 1].map(copy => (
            <div className="polaroid-wall__group" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
              {photos.map((src, i) => (
                <div className="polaroid-wall__hanger" key={`${copy}-${src}-${i}`}>
                  <div className="polaroid-wall__string" />
                  <div className="polaroid-wall__clip" />
                  <div className="polaroid-wall__photo" style={{ '--tilt': `${[-3, 2, -1, 3, -2, 1][i]}deg`, '--sway-delay': `${i * -.45}s` }}>
                    <img src={src} alt={copy === 0 ? `Portfolio photo ${i + 1}` : ''} loading="lazy" draggable="false" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
