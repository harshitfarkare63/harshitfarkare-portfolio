import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Services from './components/Services'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import Particles from './components/Particles'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <>
      <CursorGlow />
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
