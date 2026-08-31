import { ArrowUpRight, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-mark">A</span>
        <span>AAYUSH</span>
        <small>PORTFOLIO</small>
      </a>

      <nav>
        <a href="#work">Projects</a>
        <a href="#about">About</a>
        <a className="nav-contact" href="#contact">
          Let’s talk <ArrowUpRight size={15} />
        </a>
      </nav>

      <button className="menu-button" aria-label="Open menu">
        <Menu size={22} />
      </button>
    </header>
  )
}
