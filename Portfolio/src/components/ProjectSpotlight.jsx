import { ArrowUpRight, Sparkles, X } from 'lucide-react'

function ProjectPreview({ project }) {
  if (project.image) {
    return <img src={project.image} alt="" />
  }

  return (
    <div className="placeholder-art">
      <Sparkles size={70} />
      <span>NEW IDEA</span>
    </div>
  )
}

function ProjectLink({ project, onClose }) {
  if (project.link) {
    return (
      <a
        className="visit-link"
        href={project.link}
        target="_blank"
        rel="noreferrer"
      >
        Visit live site <ArrowUpRight size={19} />
      </a>
    )
  }

  return (
    <a className="visit-link" href="#contact" onClick={onClose}>
      Start a project <ArrowUpRight size={19} />
    </a>
  )
}

export default function ProjectSpotlight({ project, onClose }) {
  if (!project) return null

  return (
    <div
      className="spotlight"
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      <button
        className="spotlight-backdrop"
        onClick={onClose}
        aria-label="Close project details"
      />

      <article className={`spotlight-card project-${project.color}`}>
        <button className="close-button" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>

        <div className="spotlight-image">
          <ProjectPreview project={project} />
        </div>

        <div className="spotlight-copy">
          <p className="eyebrow">
            {project.number} — FEATURED PROJECT
          </p>
          <h2>{project.name}</h2>
          <p>{project.description}</p>

          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <ProjectLink project={project} onClose={onClose} />
        </div>
      </article>
    </div>
  )
}
