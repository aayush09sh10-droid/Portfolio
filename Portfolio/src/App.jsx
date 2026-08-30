import { useLayoutEffect, useRef } from 'react'
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Menu, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import './App.css'
import projectPreview from './assets/project-showcase.png'

const projects = [
  { number: '01', name: 'Pharma Care', type: 'Full-stack healthcare platform', tags: ['React', 'Node', 'Redis'], link: 'https://pharma-care-tan.vercel.app/' },
  { number: '02', name: 'Web-Tut', type: 'AI-powered EdTech platform', tags: ['AI', 'React', 'EdTech'], link: 'https://web-tut-sandy.vercel.app/' },
  { number: '03', name: 'Next mission', type: 'Something good is loading', tags: ['Coming', 'Soon'] },
]

const skillGroups = [
  ['Frontend', 'React.js · Next.js · HTML · CSS · Tailwind CSS'],
  ['Backend', 'Node.js · Express.js · REST APIs · Authentication'],
  ['Data', 'MongoDB · PostgreSQL · Redis'],
  ['Foundation', 'DSA · OOP · DBMS · OS · Computer Networks'],
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
  return <a className={`project-card project-${index}`} href={project.link || '#contact'} target={project.link ? '_blank' : undefined} rel={project.link ? 'noreferrer' : undefined}>
    <div className="project-top"><span>{project.number}</span><ArrowUpRight size={23} /></div>
    <div className="project-art">
      {index === 0 ? <img src={projectPreview} alt="Project interface preview" /> : <div className="placeholder-art"><span>{index === 1 ? 'PHARMA' : '???'}</span></div>}
    </div>
    <div className="project-copy"><div><p>{project.type}</p><h3>{project.name}</h3></div><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
  </a>
}

function Work() {
  return <section className="work section" id="work"><div className="section-head"><p className="eyebrow">01 — Selected transmissions</p><h2>A few things<br />I’ve <i>launched.</i></h2></div><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}</div></section>
}

function About() {
  return <section className="about section" id="about"><p className="eyebrow">02 — The human signal</p><div className="about-content"><div className="about-sticker">OPEN<br />TO<br />WORK<span>✦</span></div><h2>Built with <i>curiosity,</i><br />made to move<br />people.</h2><div className="about-note"><p>Full-stack and backend-focused Computer Science student building scalable apps, useful APIs, and polished interfaces.</p><a href="#resume">My toolkit <ArrowDownRight size={17} /></a></div></div></section>
}

function Resume() {
  return <section className="resume section" id="resume">
    <div className="section-head"><p className="eyebrow">03 — Credentials & craft</p><h2>Code is my<br /><i>launchpad.</i></h2></div>
    <div className="resume-layout">
      <div className="experience"><p className="eyebrow">Experience</p><h3>Xebia <span>— Software Development Intern</span></h3><p className="date">JUNE 2026 — JULY 2026 · GREATER NOIDA</p><p>Focused on full-stack engineering, SDLC, team workflows, and practical problem-solving in an industry environment.</p></div>
      <div className="education"><p className="eyebrow">Education</p><h3>Bennett University</h3><p>B.Tech, Computer Science & Engineering<br />Specialization: Full-Stack</p><p className="date">AUG 2024 — AUG 2028</p></div>
    </div>
    <div className="skill-list">{skillGroups.map(([label, skills], index) => <div className="skill-row" key={label}><span>0{index + 1}</span><h3>{label}</h3><p>{skills}</p></div>)}</div>
  </section>
}

function Footer() {
  return <footer id="contact"><p className="eyebrow">04 — Send a signal</p><h2>LET’S MAKE<br /><i>WAVES.</i></h2><MagneticButton className="email" href="mailto:aayush09sh10@gmail.com">Say hello <ArrowUpRight size={22} /></MagneticButton><div className="footer-bottom"><span>© 2026 Aayush Sharma</span><div><a href="https://github.com/aayush09sh10-droid" target="_blank" rel="noreferrer"><Github size={18} /> Github</a><a href="https://www.linkedin.com/in/aayushsh10/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a></div><span>Made with intent <Sparkles size={15} /></span></div></footer>
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
      const follower = document.querySelector('.cursor-follower')
      const moveFollower = (event) => gsap.to(follower, { x: event.clientX, y: event.clientY, duration: 0.22, ease: 'power3.out' })
      const growFollower = () => follower.classList.add('cursor-follower-active')
      const shrinkFollower = () => follower.classList.remove('cursor-follower-active')
      const interactiveElements = document.querySelectorAll('a, button, .project-card')
      window.addEventListener('pointermove', moveFollower)
      interactiveElements.forEach((element) => {
        element.addEventListener('pointerenter', growFollower)
        element.addEventListener('pointerleave', shrinkFollower)
      })
      removeCursorListeners = () => {
        name.removeEventListener('pointerenter', exciteName)
        window.removeEventListener('pointermove', moveFollower)
        interactiveElements.forEach((element) => {
          element.removeEventListener('pointerenter', growFollower)
          element.removeEventListener('pointerleave', shrinkFollower)
        })
      }
    }, root)
    return () => {
      removeCursorListeners()
      context.revert()
    }
  }, [])
  return <main ref={root}><div className="cursor-follower" aria-hidden="true" /><Header /><Hero /><Work /><About /><Resume /><Footer /></main>
}
