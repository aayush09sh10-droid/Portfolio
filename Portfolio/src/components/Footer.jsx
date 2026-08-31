import { Github, Linkedin, Mail } from 'lucide-react'
import ThreeContactBox from './ThreeContactBox'

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <p className="eyebrow">04 — Open the box</p>

      <div className="contact-box-scroll">
        <div className="contact-box-scene">
          <ThreeContactBox />

          <div className="contact-box-content">
            <p className="eyebrow">Let’s make something useful</p>
            <p className="contact-box-message">
              I’m open to internships, full-stack opportunities, and thoughtful
              collaborations.
            </p>

            <div className="contact-links">
              <a href="mailto:aayush09sh10@gmail.com">
                <Mail size={19} />
                aayush09sh10@gmail.com
              </a>
              <a
                href="https://github.com/aayush09sh10-droid"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={19} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/aayushsh10/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={19} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Aayush Sharma</span>
        <span>Built with curiosity.</span>
      </div>
    </footer>
  )
}
