import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#case-studies' },
    { name: 'Technical Skills', href: '#skills' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Get In Touch', href: '#contact' },
  ]

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = [
            { id: 'contact', priority: 1 },
            { id: 'hackathons', priority: 2 },
            { id: 'skills', priority: 3 },
            { id: 'case-studies', priority: 4 },
            { id: 'about', priority: 5 },
            { id: 'home', priority: 6 }
          ]
          const scrollPosition = window.scrollY + 150
          
          // Check if at bottom of page for Get In Touch
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          if (window.scrollY + windowHeight >= documentHeight - 100) {
            setActiveSection('contact')
            ticking = false
            return
          }

          let foundSection = null
          for (const section of sections) {
            const element = document.getElementById(section.id)
            if (element) {
              const sectionTop = element.offsetTop
              const sectionHeight = element.offsetHeight
              if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                if (!foundSection || section.priority < foundSection.priority) {
                  foundSection = section
                }
              }
            }
          }
          
          if (foundSection) {
            setActiveSection(foundSection.id)
          }
          
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Call once to set initial active section

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            )
          })}
        </ul>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
