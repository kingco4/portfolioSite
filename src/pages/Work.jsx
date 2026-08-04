import { useState } from 'react'
import { projects, workCategories } from '../content/projects'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import PageTransition from '../components/PageTransition'

export default function Work() {
  // Headings come from workCategories in src/content/projects.js
  const tags = ['All', ...workCategories]
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? projects : projects.filter((p) => p.tags.includes(active))

  return (
    <PageTransition>
      <div className="page">
        <header className="page-header">
          <Reveal now>
            <h1 className="h1">
              Work<span>.</span>
            </h1>
          </Reveal>
          <Reveal now delay={0.15}>
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
          {shown.length > 0 ? (
            <div className="work-grid">
              {shown.map((p, i) => (
                <ProjectCard key={p.slug} project={p} delay={(i % 2) * 0.12} />
              ))}
            </div>
          ) : (
            <Reveal>
              <p className="empty-note">Nothing under {active} yet — new work coming soon ✳</p>
            </Reveal>
          )}
        </section>
      </div>
    </PageTransition>
  )
}
