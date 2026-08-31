import { ArrowUpRight, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="site-header absolute inset-x-0 top-0 z-5 flex h-[84px] items-center justify-between px-[4vw] max-[800px]:h-[70px] max-[800px]:px-[6vw]">
      <a className="brand flex items-center gap-[7px] font-display text-[20px] leading-none font-extrabold tracking-[-.07em]" href="#top">
        <span className="brand-mark font-[Georgia] text-[30px] leading-[.8] font-black -rotate-[10deg]">A</span>
        <span>AAYUSH</span>
        <small className="max-w-[42px] font-mono text-[8px] leading-[1.05] font-extrabold tracking-[.14em]">PORTFOLIO</small>
      </a>

      <nav className="flex items-center gap-2 font-display text-[13px] font-bold max-[800px]:hidden">
        <a className="rounded-full bg-pale px-[19px] py-[13px] transition-[transform,background] duration-[250ms] hover:-translate-y-[3px] hover:-rotate-[2deg] hover:bg-pink hover:text-white" href="#work">Projects</a>
        <a className="rounded-full bg-pale px-[19px] py-[13px] transition-[transform,background] duration-[250ms] hover:-translate-y-[3px] hover:-rotate-[2deg] hover:bg-pink hover:text-white" href="#about">About</a>
        <a className="nav-contact flex items-center gap-[15px] rounded-full bg-orange px-[19px] py-[13px] transition-[transform,background] duration-[250ms] hover:-translate-y-[3px] hover:-rotate-[2deg] hover:bg-pink hover:text-white" href="#contact">
          Let’s talk <ArrowUpRight size={15} />
        </a>
      </nav>

      <button className="menu-button hidden size-[43px] place-items-center rounded-full border-0 bg-black text-white max-[800px]:grid" aria-label="Open menu">
        <Menu size={22} />
      </button>
    </header>
  )
}
