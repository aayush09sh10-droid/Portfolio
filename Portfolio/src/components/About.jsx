import { ArrowDownRight, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section className="about section relative isolate overflow-hidden bg-[linear-gradient(to_bottom,var(--color-paper)_0,var(--color-orange)_150px)] px-[4vw] pt-[120px] pb-[130px] after:absolute after:right-[5%] after:bottom-[-10%] after:-z-1 after:font-display after:text-[35vw] after:leading-none after:text-yellow after:content-['✦'] max-[800px]:px-[6vw] max-[800px]:pt-[78px] max-[800px]:pb-[85px]" id="about">
      <p className="eyebrow m-0 font-mono text-[10px] font-bold tracking-[.08em]">02 — A little about me</p>

      <div className="about-content relative z-1 mt-[100px] grid grid-cols-[1fr_2.6fr_1fr] items-end gap-8 max-[800px]:mt-[60px] max-[800px]:grid-cols-1 max-[800px]:gap-[34px]">
        <div className="about-sticker grid size-[127px] place-content-center rounded-[47%_53%_62%_38%/43%_46%_54%_57%] bg-pink text-center font-display text-[19px] leading-[.86] font-extrabold text-white -rotate-[11deg] [&_svg]:mx-auto">
          OPEN
          <br />
          TO
          <br />
          WORK <Sparkles size={22} />
        </div>

        <h2 className="m-0 text-left font-display text-[clamp(3.8rem,7.7vw,8.6rem)] leading-[.79] font-extrabold tracking-[-.1em] max-[800px]:text-[14vw]">
          Built with <i className="font-[Georgia] text-[1em] font-normal text-berry">curiosity,</i>
          <br />
          made to move
          <br />
          people.
        </h2>

        <div className="about-note font-display text-[14px] leading-[1.6] font-semibold">
          <p className="scroll-pop m-0 mb-[25px]">
            Full-stack and backend-focused Computer Science student building
            scalable apps, useful APIs, and polished interfaces.
          </p>
          <a className="inline-flex items-center gap-2 border-b-2 pb-[5px] font-mono text-[12px] font-extrabold" href="#resume">
            My toolkit <ArrowDownRight size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}
