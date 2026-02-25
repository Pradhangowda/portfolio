import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import CaseStudies from './components/CaseStudies'
import Skills from './components/Skills'
import GetInTouch from './components/GetInTouch'
import BackToTop from './components/BackToTop'
import ProjectDetail from './components/ProjectDetail'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <CaseStudies />
      <Skills />
      <GetInTouch />
      <BackToTop />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
