import { useRef, useState } from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectSpotlight from './components/ProjectSpotlight'
import Resume from './components/Resume'
import Work from './components/Work'
import usePortfolioAnimations from './hooks/usePortfolioAnimations'

export default function App() {
  const rootRef = useRef(null)
  const [activeProject, setActiveProject] = useState(null)

  usePortfolioAnimations(rootRef, activeProject)

  return (
    <div className="app-shell overflow-hidden bg-paper text-ink" ref={rootRef}>
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
