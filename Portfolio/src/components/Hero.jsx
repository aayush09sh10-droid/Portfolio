import { ArrowDownRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero relative isolate flex h-auto min-h-[max(100svh,760px)] flex-col justify-between overflow-visible bg-yellow px-[4vw] pt-[145px] pb-[38px] max-[800px]:min-h-[760px] max-[800px]:overflow-hidden max-[800px]:px-[6vw] max-[800px]:pt-[110px] max-[800px]:pb-[30px]" id="top">
      <div className="hero-shape shape-a pointer-events-none absolute -z-1 left-[33%] top-[12%] h-[74%] w-[58vw] -rotate-[12deg] rounded-[40%_63%_22%_55%/39%_38%_46%_50%] bg-pale max-[800px]:left-[27%] max-[800px]:h-[62%] max-[800px]:w-screen" />
      <div className="hero-shape shape-b pointer-events-none absolute -z-1 right-[-12vw] bottom-[-34vw] h-[56vw] w-[36vw] rounded-[50%_45%_0_0] bg-orange max-[800px]:right-[-47vw] max-[800px]:h-[95vw] max-[800px]:w-[95vw]" />
      <div className="hero-shape shape-c pointer-events-none absolute -z-1 right-[-4vw] top-[10%] size-[28vw] rounded-full border-[40px] border-pale opacity-[.85] max-[800px]:size-[45vw] max-[800px]:border-[24px]" />

      <p className="eyebrow hero-kicker m-0 mr-[17%] self-end rounded-full bg-paper px-3 py-2 font-mono text-[10px] font-bold tracking-[.08em] max-[800px]:mr-0 max-[800px]:self-start">
        Available for meaningful work · 2026
      </p>

      <div className="hero-copy relative z-1 grid min-w-0 grid-cols-[minmax(230px,26%)_1fr] items-end gap-[3vw] max-[800px]:block">
        <p className="hero-intro scroll-pop m-0 mb-[14px] max-w-[330px] font-display text-[15px] leading-[1.45] font-semibold [will-change:transform] max-[800px]:mt-[30px] max-[800px]:mb-5">
          Hello, I’m Aayush — a full-stack developer turning curious ideas into
          vivid, useful web experiences.
        </p>
        <h1 className="m-0 min-w-0 font-display text-[clamp(4.3rem,10.7vw,12rem)] leading-[.76] font-extrabold tracking-[-.11em] max-[800px]:text-[17vw]">
          <span>AAYUSH</span>
          <span>SHARMA</span>
          <em className="mt-[14px] ml-[26vw] block -rotate-[4deg] font-[Georgia] text-[clamp(1.6rem,3.1vw,3.7rem)] leading-none font-medium tracking-[-.07em] text-[#6a5f93] max-[800px]:mt-[15px] max-[800px]:ml-[13vw] max-[800px]:text-[7vw]">builds on the web.</em>
        </h1>
      </div>

      <div className="hero-footer relative z-1 flex items-end justify-between pt-[34px] max-[800px]:flex-col max-[800px]:items-start max-[800px]:gap-[25px] max-[800px]:pt-0">
        <a href="#work" className="hero-button inline-flex cursor-pointer items-center gap-[22px] rounded-[7px] bg-pink px-[19px] py-[15px] font-display text-[13px] font-extrabold text-white shadow-[5px_5px_0_#090806] transition-[transform,box-shadow] duration-[250ms] hover:translate-[4px_4px] hover:shadow-[1px_1px_0_#090806]">
          See selected work <ArrowDownRight size={22} />
        </a>
        <p className="text-right font-mono text-[10px] leading-[1.45] font-bold max-[800px]:text-left">
          FULL-STACK DEVELOPER
          <br />
          BASED IN INDIA
        </p>
      </div>
    </section>
  )
}
