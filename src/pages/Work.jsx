import { useState } from 'react'
import { projects } from '../content/projects'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import PageTransition from '../components/PageTransition'

export default function Work() {
  const tags = ['All', ...new Set(projects.flatMap((p) => p.tags))]
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? projects : projects.filter((p) => p.tags.includes(active))

  return (
    <PageTransition>
      <div className="page">
        <header className="page-header">
          <Reveal>
            <h1 className="h1">
              Work<span>.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {tags.map((t) => (
                <button
                  key={t}
                  className="tag"
                  onClick={() => setActive(t)}
                  style={
                    active === t
                      ? { background: 'var(--accent)', color: 'var(--accent-ink)', borderColor: 'var(--accent)' }
                      : undefined
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>
        </header>

        <section className="section">
          <div className="work-grid">
            {shown.map((p, i) => (
              <ProjectCard key={p.slug} project={p} delay={(i % 2) * 0.12} />
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
