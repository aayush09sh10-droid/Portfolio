import { useLayoutEffect, useRef } from 'react'
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Menu, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import './App.css'
import projectPreview from './assets/project-showcase.png'

const projects = [
  { number: '01', name: 'StayWise.ai', type: 'AI travel companion', tags: ['React', 'AI', 'Product'] },
  { number: '02', name: 'PharmaCare', type: 'Healthcare platform', tags: ['Web', 'UX', 'Build'] },
  { number: '03', name: 'Next mission', type: 'Something good is loading', tags: ['Coming', 'Soon'] },
]

function MagneticButton({ children, className = '', ...props }) {
  const button = useRef(null)
  const move = (event) => {
    const rect = button.current.getBoundingClientRect()
    gsap.to(button.current, { x: (event.clientX - rect.left - rect.width / 2) * 0.16, y: (event.clientY - rect.top - rect.height / 2) * 0.16, duration: 0.35 })
  }
  return <a ref={button} onMouseMove={move} onMouseLeave={() => gsap.to(button.current, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1, .4)' })} className={`magnetic ${className}`} {...props}>{children}</a>
}

function Header() {
  return <header className="site-header">
    <a className="brand" href="#top"><span className="brand-mark"><Sparkles size={17} /></span> AAYUSH<span>_</span></a>
    <nav><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
    <button className="menu-button" aria-label="Open menu"><Menu size={23} /></button>
  </header>
}

function Hero() {
  return <section className="hero" id="top">
    <div className="orb orb-one" /><div className="orb orb-two" />
    <p className="eyebrow hero-kicker"><span /> Available for select projects — 2026</p>
    <div className="hero-title" aria-label="Aayush, full-stack engineer">
      <span className="hero-line hero-name">AAYUSH</span><span className="hero-line hero-line-shift">FULL-STACK</span><span className="hero-line hero-line-last"><i>ENGINEER.</i></span>
    </div>
    <div className="hero-bottom">
      <p>I’m <strong>Aayush</strong>, a developer shaping vivid, useful interfaces for the internet’s next big ideas.</p>
      <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={22} /></a>
    </div>
    <div className="planet" aria-hidden="true" />
  </section>
}

function ProjectCard({ project, index }) {
  return <article className={`project-card project-${index}`}>
    <div className="project-top"><span>{project.number}</span><ArrowUpRight size={23} /></div>
    <div className="project-art">
      {index === 0 ? <img src={projectPreview} alt="Project interface preview" /> : <div className="placeholder-art"><span>{index === 1 ? 'PHARMA' : '???'}</span></div>}
    </div>
    <div className="project-copy"><div><p>{project.type}</p><h3>{project.name}</h3></div><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
  </article>
}

function Work() {
  return <section className="work section" id="work"><div className="section-head"><p className="eyebrow">01 — Selected transmissions</p><h2>A few things<br />I’ve <i>launched.</i></h2></div><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}</div></section>
}

function About() {
  return <section className="about section" id="about"><p className="eyebrow">02 — The human signal</p><div className="about-content"><div className="about-sticker">OPEN<br />TO<br />WORK<span>✦</span></div><h2>Built with <i>curiosity,</i><br />made to move<br />people.</h2><div className="about-note"><p>I combine thoughtful design with solid front-end craft to create digital spaces that feel as good as they function.</p><a href="#contact">More about me <ArrowUpRight size={17} /></a></div></div></section>
}

function Footer() {
  return <footer id="contact"><p className="eyebrow">03 — Send a signal</p><h2>LET’S MAKE<br /><i>WAVES.</i></h2><MagneticButton className="email" href="mailto:aayushsh10@gmail.com">Say hello <ArrowUpRight size={22} /></MagneticButton><div className="footer-bottom"><span>© 2026 Aayush</span><div><a href="https://github.com/aayush09sh10-droid" target="_blank" rel="noreferrer"><Github size={18} /> Github</a><a href="https://www.linkedin.com/in/aayushsh10/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a></div><span>Made with intent <Sparkles size={15} /></span></div></footer>
}

export default function App() {
  const root = useRef(null)
  useLayoutEffect(() => {
    let removeCursorListeners = () => {}
    const context = gsap.context(() => {
      gsap.from('.site-header', { y: -28, opacity: 0, duration: 0.7, ease: 'power3.out' })
      gsap.from('.hero-line', { yPercent: 115, rotate: 3, duration: 1.05, stagger: 0.12, ease: 'power4.out', delay: 0.15 })
      gsap.from('.hero-bottom, .hero-kicker', { y: 25, opacity: 0, stagger: 0.12, delay: 0.85, duration: 0.65 })
      gsap.to('.planet', { rotate: 360, duration: 75, repeat: -1, ease: 'none' })
      const name = document.querySelector('.hero-name')
      const exciteName = () => gsap.fromTo(name, { color: '#18cfbb', letterSpacing: '-.06em', skewX: -4 }, { color: '#fff4d5', letterSpacing: '-.09em', skewX: 0, duration: 0.65, ease: 'elastic.out(1, .45)' })
      name.addEventListener('pointerenter', exciteName)
      gsap.to('.orb-one', { x: -35, y: 42, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.orb-two', { x: 30, y: -25, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      removeCursorListeners = () => {
        name.removeEventListener('pointerenter', exciteName)
      }
    }, root)
    return () => {
      removeCursorListeners()
      context.revert()
    }
  }, [])
  return <main ref={root}><Header /><Hero /><Work /><About /><Footer /></main>
}
