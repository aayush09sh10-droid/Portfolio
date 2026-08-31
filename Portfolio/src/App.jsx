import { useRef, useState } from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectSpotlight from './components/ProjectSpotlight'
import Resume from './components/Resume'
import Work from './components/Work'
import usePortfolioAnimations from './hooks/usePortfolioAnimations'
import './App.css'

export default function App() {
  const rootRef = useRef(null)
  const [activeProject, setActiveProject] = useState(null)

  usePortfolioAnimations(rootRef, activeProject)

  return (
    <div className="app-shell" ref={rootRef}>
      <main>
        <Header />
        <Hero />
        <Work onSelect={setActiveProject} />
        <About />
        <Resume />
        <Footer />
      </main>
      <ProjectSpotlight
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  )
}
