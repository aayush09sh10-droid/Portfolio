import { Github, Linkedin, Mail } from 'lucide-react'
import ThreeContactBox from './ThreeContactBox'

export default function Footer() {
  return (
    <footer className="site-footer relative isolate min-h-[760px] bg-paper px-[4vw] pt-[105px] pb-[30px] text-ink max-[800px]:min-h-[650px] max-[800px]:px-[6vw] max-[800px]:pt-20" id="contact">
      <p className="eyebrow m-0 font-mono text-[10px] font-bold tracking-[.08em]">04 — Open the box</p>

      <div className="contact-box-scroll relative">
        <div className="contact-box-scene relative mx-auto mt-[26px] block h-[min(67vw,680px)] min-h-[480px] w-[min(1180px,100%)] overflow-hidden rounded-t-[clamp(68px,11vw,180px)] bg-[#9cebf0] [background:radial-gradient(circle_at_8%_92%,var(--color-yellow)_0_4%,transparent_4.2%),radial-gradient(circle_at_91%_13%,var(--color-pink)_0_2.4%,transparent_2.6%),#9cebf0] max-[800px]:h-[520px] max-[800px]:min-h-[520px] max-[800px]:rounded-t-[70px]">
          <ThreeContactBox />

          <div className="pointer-events-none absolute inset-0 z-2 grid place-items-center px-[21px] max-[800px]:px-[14px]">
            <div className="contact-box-content pointer-events-auto w-[min(560px,100%)] scale-[.8] border-2 border-ink bg-paper p-[22px] text-center opacity-0 shadow-[5px_5px_0_#090806] [transform-origin:center] transition-[opacity,transform] duration-[700ms] ease-[cubic-bezier(.2,.8,.2,1)] max-[800px]:p-4">
            <p className="eyebrow m-0 font-mono text-[10px] font-bold tracking-[.08em]">Let’s make something useful</p>
            <p className="contact-box-message mt-[17px] mb-[29px] max-w-[560px] font-display text-[clamp(1rem,1.7vw,1.35rem)] leading-[1.3] font-semibold tracking-[-.04em]">
              I’m open to internships, full-stack opportunities, and thoughtful
              collaborations.
            </p>

            <div className="contact-links flex flex-wrap justify-center gap-[10px] max-[800px]:grid">
              <a className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-pale px-[15px] py-3 font-display text-[12px] font-bold shadow-[3px_3px_0_#090806] transition-[transform,box-shadow,background] duration-200 hover:translate-[3px_3px] hover:bg-pink hover:text-paper hover:shadow-none max-[800px]:justify-center" href="mailto:aayush09sh10@gmail.com">
                <Mail size={19} />
                aayush09sh10@gmail.com
              </a>
              <a className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-pale px-[15px] py-3 font-display text-[12px] font-bold shadow-[3px_3px_0_#090806] transition-[transform,box-shadow,background] duration-200 hover:translate-[3px_3px] hover:bg-pink hover:text-paper hover:shadow-none max-[800px]:justify-center"
                href="https://github.com/aayush09sh10-droid"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={19} />
                GitHub
              </a>
              <a className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-pale px-[15px] py-3 font-display text-[12px] font-bold shadow-[3px_3px_0_#090806] transition-[transform,box-shadow,background] duration-200 hover:translate-[3px_3px] hover:bg-pink hover:text-paper hover:shadow-none max-[800px]:justify-center"
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
      </div>

      <div className="footer-bottom mx-auto mt-[84px] flex w-[min(1180px,100%)] justify-between border-t border-ink pt-[18px] font-mono text-[10px] font-medium text-ink max-[800px]:mt-[55px] max-[800px]:flex-wrap max-[800px]:gap-5">
        <span>© 2026 Aayush Sharma</span>
        <span>Built with curiosity.</span>
      </div>
    </footer>
  )
}
