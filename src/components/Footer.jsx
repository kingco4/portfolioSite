import { site } from '../content/site'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Reveal>
          <h2 className="footer-cta">
            {site.ctaHeading.split('.')[0]}.{' '}
            <a href={`mailto:${site.email}`}>Say hi ↗</a>
          </h2>
          <p className="footer-sub">{site.ctaSub}</p>
        </Reveal>
        <div className="footer-row">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <div className="footer-socials">
            {site.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="underline-link">
                {s.label}
              </a>
            ))}
          </div>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  )
}
