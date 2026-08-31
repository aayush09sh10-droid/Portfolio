import { ArrowDownRight, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section className="about section" id="about">
      <p className="eyebrow">02 — A little about me</p>

      <div className="about-content">
        <div className="about-sticker">
          OPEN
          <br />
          TO
          <br />
          WORK <Sparkles size={22} />
        </div>

        <h2>
          Built with <i>curiosity,</i>
          <br />
          made to move
          <br />
          people.
        </h2>

        <div className="about-note">
          <p className="scroll-pop">
            Full-stack and backend-focused Computer Science student building
            scalable apps, useful APIs, and polished interfaces.
          </p>
          <a href="#resume">
            My toolkit <ArrowDownRight size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}
