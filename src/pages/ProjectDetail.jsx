import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../content/projects'
import GenTile from '../components/GenTile'
import { asset } from '../lib/asset'
import Reveal from '../components/Reveal'
import PageTransition from '../components/PageTransition'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <Navigate to="/work" replace />

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  return (
    <PageTransition>
      <div className="page">
        <header className="page-header">
          <Reveal>
            <p className="eyebrow" style={{ color: project.accent }}>
              {project.tags.join(' / ')} — {project.year}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h1">{project.title}</h1>
          </Reveal>
        </header>

        <Reveal>
          <div className="project-cover" style={{ aspectRatio: '21 / 9' }}>
            {project.cover ? (
              <img src={asset(project.cover)} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <GenTile seed={project.slug} accent={project.accent} />
            )}
          </div>
        </Reveal>

        <Reveal>
          <div className="project-hero-meta">
            <div>
              <h4>Role</h4>
              <p>{project.role}</p>
            </div>
            <div>
              <h4>Tools</h4>
              <p>{project.tools.join(', ')}</p>
            </div>
            <div>
              <h4>Year</h4>
              <p>{project.year}</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="project-body">
            {project.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {project.link && (
              <a href={project.link.url} target="_blank" rel="noreferrer" className="btn solid">
                {project.link.label} ↗
              </a>
            )}
          </div>
        </Reveal>

        <Link to={`/work/${next.slug}`} className="next-project">
          <span className="label">Next project</span>
          <span className="title">{next.title} →</span>
        </Link>
      </div>
    </PageTransition>
  )
}
