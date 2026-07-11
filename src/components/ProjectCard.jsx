import { Link } from 'react-router-dom'
import GenTile from './GenTile'
import Reveal from './Reveal'
import { asset } from '../lib/asset'

export default function ProjectCard({ project, wide = false, delay = 0 }) {
  return (
    <Reveal delay={delay} className={wide ? 'span-2' : ''}>
      <Link
        to={`/work/${project.slug}`}
        className="project-card"
        style={{ '--card-accent': project.accent }}
      >
        <div className="project-card-media">
          {project.cover ? (
            <img src={asset(project.cover)} alt={project.title} loading="lazy" />
          ) : (
            <GenTile seed={project.slug} accent={project.accent} />
          )}
        </div>
        <div className="project-card-info">
          <span className="project-card-title">{project.title}</span>
          <span className="project-card-meta">
            {project.tags[0]} · {project.year}
          </span>
        </div>
        <p className="project-card-summary">{project.summary}</p>
      </Link>
    </Reveal>
  )
}
