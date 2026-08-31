import { skillGroups } from '../data/portfolioData'

export default function Resume() {
  return (
    <section className="resume section" id="resume">
      <div className="section-head">
        <p className="eyebrow">03 — Credentials & craft</p>
        <h2>
          Code is my
          <br />
          <i>launchpad.</i>
        </h2>
      </div>

      <div className="resume-layout">
        <div className="experience">
          <p className="eyebrow">Experience</p>
          <h3>
            Xebia <span>— Software Development Intern</span>
          </h3>
          <p className="date">JUNE 2026 — JULY 2026 · GREATER NOIDA</p>
          <p>
            Focused on full-stack engineering, SDLC, team workflows, and
            practical problem-solving in an industry environment.
          </p>
        </div>

        <div className="education">
          <p className="eyebrow">Education</p>
          <h3>Bennett University</h3>
          <p>
            B.Tech, Computer Science & Engineering
            <br />
            Specialization: Full-Stack
          </p>
          <p className="date">AUG 2024 — AUG 2028</p>
        </div>
      </div>

      <div className="skill-list">
        {skillGroups.map(([label, skills], index) => (
          <div className="skill-row" key={label}>
            <span>0{index + 1}</span>
            <h3>{label}</h3>
            <p>{skills}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
