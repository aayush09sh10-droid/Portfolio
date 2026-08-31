import { ArrowDownRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-shape shape-a" />
      <div className="hero-shape shape-b" />
      <div className="hero-shape shape-c" />

      <p className="eyebrow hero-kicker">
        Available for meaningful work · 2026
      </p>

      <div className="hero-copy">
        <p className="hero-intro scroll-pop">
          Hello, I’m Aayush — a full-stack developer turning curious ideas into
          vivid, useful web experiences.
        </p>
        <h1>
          <span>AAYUSH</span>
          <span>SHARMA</span>
          <em>builds on the web.</em>
        </h1>
      </div>

      <div className="hero-footer">
        <a href="#work" className="hero-button">
          See selected work <ArrowDownRight size={22} />
        </a>
        <p>
          FULL-STACK DEVELOPER
          <br />
          BASED IN INDIA
        </p>
      </div>
    </section>
  )
}
