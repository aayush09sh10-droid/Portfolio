import { skillGroups } from '../data/portfolioData'

export default function Resume() {
  return (
    <section className="resume section relative isolate bg-[linear-gradient(to_bottom,var(--color-orange)_0,var(--color-pale)_150px)] px-[4vw] py-[130px] max-[800px]:px-[6vw] max-[800px]:py-[85px]" id="resume">
      <div className="section-head flex items-start justify-between max-[800px]:block">
        <p className="eyebrow m-0 font-mono text-[10px] font-bold tracking-[.08em]">03 — Credentials & craft</p>
        <h2 className="m-0 text-right font-display text-[clamp(3.8rem,7.7vw,8.6rem)] leading-[.79] font-extrabold tracking-[-.1em] max-[800px]:mt-[25px] max-[800px]:text-left max-[800px]:text-[15vw]">
          Code is my
          <br />
          <i className="font-[Georgia] text-[1em] font-normal text-pink">launchpad.</i>
        </h2>
      </div>

      <div className="resume-layout my-[70px] grid grid-cols-[1.4fr_1fr] gap-[14px] max-[800px]:my-[45px] max-[800px]:grid-cols-1">
        <div className="experience rounded-2xl border-2 border-ink bg-paper p-7 shadow-[7px_7px_0_#090806]">
          <p className="eyebrow m-0 font-mono text-[10px] font-bold tracking-[.08em]">Experience</p>
          <h3 className="mt-5 mb-2 font-display text-[25px] font-extrabold tracking-[-.06em]">
            Xebia <span className="text-pink">— Software Development Intern</span>
          </h3>
          <p className="date font-mono text-[9px] font-bold tracking-[.05em]">JUNE 2026 — JULY 2026 · GREATER NOIDA</p>
          <p className="font-display text-[14px] leading-[1.6] font-semibold">
            Focused on full-stack engineering, SDLC, team workflows, and
            practical problem-solving in an industry environment.
          </p>
        </div>

        <div className="education rounded-2xl border-2 border-ink bg-paper p-7 shadow-[7px_7px_0_#090806]">
          <p className="eyebrow m-0 font-mono text-[10px] font-bold tracking-[.08em]">Education</p>
          <h3 className="mt-5 mb-2 font-display text-[25px] font-extrabold tracking-[-.06em]">Bennett University</h3>
          <p className="font-display text-[14px] leading-[1.6] font-semibold">
            B.Tech, Computer Science & Engineering
            <br />
            Specialization: Full-Stack
          </p>
          <p className="date font-mono text-[9px] font-bold tracking-[.05em]">AUG 2024 — AUG 2028</p>
        </div>
      </div>

      <div className="skill-list border-t-2 border-ink">
        {skillGroups.map(([label, skills], index) => (
          <div className="skill-row grid grid-cols-[70px_1fr_1.5fr] items-center gap-5 border-b-2 border-ink py-5 max-[800px]:grid-cols-1 max-[800px]:gap-[6px]" key={label}>
            <span className="font-mono text-[11px] font-bold">0{index + 1}</span>
            <h3 className="m-0 font-display text-[22px] font-extrabold tracking-[-.06em]">{label}</h3>
            <p className="m-0 font-mono text-[12px] leading-[1.6] font-medium">{skills}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
