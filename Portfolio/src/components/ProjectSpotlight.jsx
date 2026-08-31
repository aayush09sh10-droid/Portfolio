import { ArrowUpRight, Sparkles, X } from 'lucide-react'

function ProjectPreview({ project }) {
  if (project.image) {
    return <img className="block size-full object-contain object-center transition-transform duration-600" src={project.image} alt="" />
  }

  return (
    <div className="placeholder-art grid h-full place-content-center gap-[15px] bg-[radial-gradient(circle,var(--color-yellow)_0_8%,transparent_8.5%),repeating-linear-gradient(45deg,#ffffff25_0_2px,transparent_2px_18px)] text-center font-display text-[25px] leading-[.85] font-extrabold">
      <Sparkles size={70} />
      <span>NEW IDEA</span>
    </div>
  )
}

function ProjectLink({ project, onClose }) {
  if (project.link) {
    return (
      <a
        className="visit-link inline-flex cursor-pointer items-center gap-[22px] rounded-[7px] bg-pink px-[19px] py-[15px] font-display text-[13px] font-extrabold text-white shadow-[5px_5px_0_#090806] transition-[transform,box-shadow] duration-250 hover:translate-[4px_4px] hover:shadow-[1px_1px_0_#090806]"
        href={project.link}
        target="_blank"
        rel="noreferrer"
      >
        Visit live site <ArrowUpRight size={19} />
      </a>
    )
  }

  return (
    <a className="visit-link inline-flex cursor-pointer items-center gap-[22px] rounded-[7px] bg-pink px-[19px] py-[15px] font-display text-[13px] font-extrabold text-white shadow-[5px_5px_0_#090806] transition-[transform,box-shadow] duration-250 hover:translate-[4px_4px] hover:shadow-[1px_1px_0_#090806]" href="#contact" onClick={onClose}>
      Start a project <ArrowUpRight size={19} />
    </a>
  )
}

export default function ProjectSpotlight({ project, onClose }) {
  if (!project) return null

  return (
    <div
      className="spotlight fixed inset-0 z-30 grid place-items-center p-[30px] max-[800px]:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      <button
        className="spotlight-backdrop absolute inset-0 cursor-pointer border-0 bg-[#12040ccc] backdrop-blur-[10px]"
        onClick={onClose}
        aria-label="Close project details"
      />

      <article className={`spotlight-card project-${project.color} relative z-1 grid w-[min(880px,100%)] grid-cols-[1.05fr_1fr] overflow-hidden rounded-[26px] bg-berry text-white shadow-[15px_15px_0_#090806] max-[800px]:max-h-[92vh] max-[800px]:grid-cols-1 max-[800px]:overflow-auto ${project.color === 'mint' ? 'bg-mint' : project.color === 'lime' ? 'bg-lime' : ''}`}>
        <button className="close-button absolute top-[15px] right-[15px] z-2 grid size-[42px] cursor-pointer place-items-center rounded-full border-0 bg-white text-black transition-transform duration-200 hover:scale-110 hover:rotate-90 max-[800px]:fixed max-[800px]:top-[29px] max-[800px]:right-[29px]" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>

        <div className="spotlight-image min-h-[500px] bg-[linear-gradient(135deg,#fff7d9,#e8d5b2)] max-[800px]:h-[35vh] max-[800px]:min-h-[250px]">
          <ProjectPreview project={project} />
        </div>

        <div className="spotlight-copy flex flex-col items-start p-[65px_42px_38px] max-[800px]:p-[30px]">
          <p className="eyebrow m-0 font-mono text-[10px] font-bold tracking-[.08em] text-yellow">
            {project.number} — FEATURED PROJECT
          </p>
          <h2 className="my-[25px] font-display text-[clamp(3.3rem,6vw,5.5rem)] leading-[.8] font-extrabold tracking-[-.1em] max-[800px]:text-[15vw]">{project.name}</h2>
          <p className="m-0 mb-[25px] font-display text-[15px] leading-[1.55] font-semibold">{project.description}</p>

          <div className="tags flex flex-wrap gap-[5px]">
            {project.tags.map((tag) => (
              <span className="rounded-full bg-yellow px-2 py-[5px] font-display text-[9px] font-bold text-ink" key={tag}>{tag}</span>
            ))}
          </div>

          <div className="mt-auto max-[800px]:mt-[30px]"><ProjectLink project={project} onClose={onClose} /></div>
        </div>
      </article>
    </div>
  )
}
