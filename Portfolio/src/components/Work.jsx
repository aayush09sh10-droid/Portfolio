import { ArrowUpRight, Sparkles } from 'lucide-react'
import { projects } from '../data/portfolioData'

const cardRotations = [-3, 1.5, -1]

function ProjectCard({ project, index, onSelect }) {
  const rotation = cardRotations[index]

  return (
    <article
      className={`project-card group project-${project.color} relative overflow-hidden rounded-[30px] bg-berry shadow-[0_10px_0_#00000010] transition-[transform,box-shadow] duration-[450ms] ease-[cubic-bezier(.2,.8,.2,1)] [transform:rotate(var(--rotation))] hover:-translate-y-[22px] hover:scale-[1.025] hover:rotate-0 hover:shadow-[0_25px_30px_#0002] after:absolute after:top-[15px] after:right-[17px] after:grid after:size-[31px] after:scale-0 after:place-items-center after:rounded-full after:bg-yellow after:font-[Georgia] after:text-[18px] after:font-extrabold after:text-ink after:content-['↗'] after:-rotate-45 after:transition-transform after:duration-[350ms] after:ease-[cubic-bezier(.2,1.4,.4,1)] hover:after:scale-100 hover:after:rotate-0 focus-within:outline-[3px] focus-within:outline-pink focus-within:outline-offset-[6px] ${index === 1 ? 'mt-[-30px] max-[800px]:mt-0' : index === 2 ? 'mt-[22px] max-[800px]:mt-0' : ''} max-[800px]:min-w-[275px] ${project.color === 'mint' ? 'bg-mint' : project.color === 'lime' ? 'bg-lime' : ''}`}
      style={{ '--rotation': `${rotation}deg` }}
    >
      <button className="flex min-h-[510px] w-full cursor-pointer flex-col border-0 bg-transparent p-[18px] text-left font-inherit text-white max-[800px]:min-h-[470px]" onClick={() => onSelect(project)} aria-label={`View ${project.name}`}>
        <div className="project-top flex w-full justify-between font-mono text-[11px] font-bold">
          <span>{project.number}</span>
          <span className="card-expand flex items-center gap-1 opacity-[.85] group-hover:opacity-0">
            View <ArrowUpRight size={18} />
          </span>
        </div>

        <div className="project-image my-[25px] mb-[17px] h-[225px] overflow-hidden rounded-[15px] bg-[linear-gradient(135deg,#fff7d9,#e8d5b2)]">
          {project.image ? (
            <img className="block size-full object-contain object-center p-[5px] transition-transform duration-600 group-hover:scale-[1.07] max-[800px]:p-1" src={project.image} alt={`${project.name} preview`} />
          ) : (
            <div className="placeholder-art grid h-full place-content-center gap-[15px] bg-[radial-gradient(circle,var(--color-yellow)_0_8%,transparent_8.5%),repeating-linear-gradient(45deg,#ffffff25_0_2px,transparent_2px_18px)] text-center font-display text-[25px] leading-[.85] font-extrabold">
              <Sparkles size={48} />
              <span>
                NEW
                <br />
                IDEA
              </span>
            </div>
          )}
        </div>

        <div className="project-copy mt-auto">
          <div className="tags flex flex-wrap gap-[5px]">
            {project.tags.map((tag) => (
              <span className="rounded-full bg-yellow px-2 py-[5px] font-display text-[9px] font-bold text-ink" key={tag}>{tag}</span>
            ))}
          </div>
          <h3 className="mt-3 mb-[10px] font-display text-[clamp(2rem,3vw,3rem)] leading-[.85] font-extrabold tracking-[-.09em]">{project.name}</h3>
          <p className="m-0 max-w-[220px] font-display text-[12px] leading-[1.35] font-semibold">{project.type}</p>
        </div>
      </button>
    </article>
  )
}

export default function Work({ onSelect }) {
  return (
    <section className="work section relative isolate bg-[linear-gradient(to_bottom,var(--color-yellow)_0,var(--color-paper)_150px)] px-[4vw] pt-[130px] pb-[70px] max-[800px]:px-[6vw] max-[800px]:pt-[85px] max-[800px]:pb-[55px]" id="work">
      <div className="section-head flex items-start justify-between max-[800px]:block">
        <p className="eyebrow m-0 font-mono text-[10px] font-bold tracking-[.08em]">01 — Selected work</p>
        <h2 className="m-0 text-right font-display text-[clamp(3.8rem,7.7vw,8.6rem)] leading-[.79] font-extrabold tracking-[-.1em] max-[800px]:mt-[25px] max-[800px]:text-left max-[800px]:text-[15vw]">
          Made to be
          <br />
          <i className="font-[Georgia] text-[1em] font-normal text-pink">explored.</i>
        </h2>
      </div>

      <p className="section-note scroll-pop mt-[45px] max-w-[315px] font-display text-[15px] leading-[1.5] font-semibold max-[800px]:mt-6">
        A growing shelf of products shaped with care, curiosity, and a healthy
        appetite for solving the hard parts.
      </p>

      <div className="project-grid mt-[42px] grid grid-cols-[1fr_1.06fr_.92fr] items-start gap-[30px] pl-[27%] max-[800px]:mx-[-6vw] max-[800px]:mt-[42px] max-[800px]:flex max-[800px]:overflow-x-auto max-[800px]:gap-[18px] max-[800px]:px-[6vw] max-[800px]:pt-[22px] max-[800px]:pb-[35px]">
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
