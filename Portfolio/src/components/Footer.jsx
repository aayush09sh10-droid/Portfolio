import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import MagneticButton from './MagneticButton'

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <p className="eyebrow">04 — Ready to contribute</p>

      <div className="contact-layout">
        <div>
          <h2>
            YOUR NEXT
            <br />
            <i>GREAT HIRE.</i>
          </h2>
          <p className="contact-message">
            I bring a builder’s mindset, strong full-stack foundations, and
            real care for the people using the product. Let’s turn your next
            idea into something dependable and memorable.
          </p>
          <MagneticButton className="email" href="mailto:aayush09sh10@gmail.com">
            Start a conversation <ArrowUpRight size={22} />
          </MagneticButton>
        </div>

        <div
          className="contact-orbit"
          aria-label="Interactive three-dimensional developer model"
        >
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-core">
            <span>&lt;/&gt;</span>
            <small>BUILD</small>
          </div>
          <span className="orbit-tag tag-one">REACT</span>
          <span className="orbit-tag tag-two">NODE</span>
          <span className="orbit-tag tag-three">IDEAS</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Aayush Sharma</span>
        <div>
          <a
            href="https://github.com/aayush09sh10-droid"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} /> Github
          </a>
          <a
            href="https://www.linkedin.com/in/aayushsh10/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
