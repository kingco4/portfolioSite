import { site } from '../content/site'

// Infinite scrolling strip of your disciplines (edit the list in
// src/content/site.js → marquee). Pauses on hover.
export default function Marquee() {
  const items = [...site.marquee, ...site.marquee] // doubled for a seamless loop
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
