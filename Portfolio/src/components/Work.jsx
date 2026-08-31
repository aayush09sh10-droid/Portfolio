import { ArrowUpRight, Sparkles } from 'lucide-react'
import { projects } from '../data/portfolioData'

const cardRotations = [-3, 1.5, -1]

function ProjectCard({ project, index, onSelect }) {
  const rotation = cardRotations[index]

  return (
    <article
      className={`project-card project-${project.color}`}
      style={{ '--rotation': `${rotation}deg` }}
    >
      <button onClick={() => onSelect(project)} aria-label={`View ${project.name}`}>
        <div className="project-top">
          <span>{project.number}</span>
          <span className="card-expand">
            View <ArrowUpRight size={18} />
          </span>
        </div>

        <div className="project-image">
          {project.image ? (
            <img src={project.image} alt={`${project.name} preview`} />
          ) : (
            <div className="placeholder-art">
              <Sparkles size={48} />
              <span>
                NEW
                <br />
                IDEA
              </span>
            </div>
          )}
        </div>

        <div className="project-copy">
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <h3>{project.name}</h3>
          <p>{project.type}</p>
        </div>
      </button>
    </article>
  )
}

export default function Work({ onSelect }) {
  return (
    <section className="work section" id="work">
      <div className="section-head">
        <p className="eyebrow">01 — Selected work</p>
        <h2>
          Made to be
          <br />
          <i>explored.</i>
        </h2>
      </div>

      <p className="section-note scroll-pop">
        A growing shelf of products shaped with care, curiosity, and a healthy
        appetite for solving the hard parts.
      </p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  )
}
