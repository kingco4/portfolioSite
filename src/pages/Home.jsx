import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { site } from '../content/site'
import { projects } from '../content/projects'
import HeroCanvas from '../components/HeroCanvas'
import Marquee from '../components/Marquee'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import PageTransition from '../components/PageTransition'

// Staggered letter-by-letter reveal for the hero name
function AnimatedLine({ text, outline = false, delay = 0 }) {
  return (
    <span className="line" aria-hidden="true">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className={`char ${outline ? 'outline' : ''}`}
          initial={{ y: '110%', rotate: 6 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: delay + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <PageTransition>
      <div className="page">
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <HeroCanvas />
          <motion.p
            className="hero-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {site.role} — {site.location}
          </motion.p>
          <h1 className="hero-title">
            <span className="sr-only">{site.name}</span>
            <AnimatedLine text={site.heroFirst} delay={0.1} />
            <AnimatedLine text={site.heroLast} outline delay={0.35} />
          </h1>
          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            {site.tagline}
          </motion.p>
          <div className="hero-meta">
            <span className="hero-scroll-hint">
              <span className="tick" /> Scroll
            </span>
            <span className="hero-stamp">Portfolio — {new Date().getFullYear()}</span>
          </div>
        </section>

        <Marquee />

        {/* ---------- Selected work ---------- */}
        <section className="section" style={{ marginTop: 'var(--section-gap)' }}>
          <Reveal>
            <p className="eyebrow">01 — Selected Work</p>
          </Reveal>
          <div className="work-grid">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} wide={i === 0} delay={(i % 2) * 0.12} />
            ))}
          </div>
          <Reveal delay={0.1}>
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <Link to="/work" className="btn">
                All work →
              </Link>
            </div>
          </Reveal>
        </section>

        {/* ---------- About teaser ---------- */}
        <section className="section">
          <Reveal>
            <p className="eyebrow">02 — About</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h2" style={{ maxWidth: '28ch', marginBottom: '2.5rem' }}>
              {site.intro}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/about" className="btn solid">
              More about me →
            </Link>
          </Reveal>
        </section>
      </div>
    </PageTransition>
  )
}
