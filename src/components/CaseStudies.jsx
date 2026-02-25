import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './CaseStudies.css'

function CaseStudies() {
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.2 }
    )

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  const caseStudies = [
    {
      id: 'project-crypto',
      category: 'Cryptography',
      categoryColor: '#ff9800',
      title: 'AES-128 Encryption with XOR Arbiter PUF on FPGA (2025)',
      description: 'Designed a secure AES system using nonlinear XOR-Arbiter PUF based key generation on Basys-3 FPGA, resisting key cloning and brute-force attacks.',
      image: '/ChatGPT Image Feb 25, 2026, 02_51_23 PM.png',
      buttonColor: '#ff9800'
    },
    {
      id: 'project-iot',
      category: 'IoT',
      categoryColor: '#2196f3',
      title: 'Smart Plant Watering System (2024)',
      description: 'Automated watering using soil moisture sensing and Wi-Fi monitoring (ESP8266).',
      image: '/plant watering.png',
      buttonColor: '#2196f3'
    },
    {
      id: 'project-robotics',
      category: 'Robotics',
      categoryColor: '#4caf50',
      title: 'Robotic Hand (2023)',
      description: 'Built a multi-DOF robotic hand capable of gripping various objects, mounted on a 2-axis RC-controlled platform. The hand featured X, Y, and Z axis movement, allowing directional positioning and flexible object handling.',
      image: '/robothand.png',
      buttonColor: '#4caf50'
    },
    {
      id: 'project-aerospace',
      category: 'Aerospace',
      categoryColor: '#9c27b0',
      title: 'Drone Using KK2.1.5 Flight Controller (2022)',
      description: 'Developed a quadcopter using the KK2.1.5 flight controller with calibrated motors, ESCs, sensors, and radio control for stable multi-rotor flight. Integrated a payload delivery box that could carry items, transport them to a location, and release them remotely during flight.',
      image: '/drone.png',
      buttonColor: '#9c27b0'
    },
    {
      id: 'project-portfolio',
      category: 'Web Development',
      categoryColor: '#00bcd4',
      title: 'Personal Portfolio Website (2026)',
      description: 'Built a modern, responsive portfolio website using React and Vite with smooth animations, interactive UI, and dynamic routing to showcase projects and skills.',
      image: '/44.png',
      buttonColor: '#00bcd4'
    }
  ]

  return (
    <section id="case-studies" className="case-studies">
      <div className="case-studies-container">
        <div className="case-studies-header">
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="case-studies-list">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id} 
              id={study.id} 
              ref={(el) => (itemRefs.current[index] = el)}
              className={`case-study-item ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="case-study-content">
                <span 
                  className="case-study-category" 
                  style={{ color: study.categoryColor }}
                >
                  {study.category}
                </span>
                <h3 className="case-study-title">{study.title}</h3>
                <p className="case-study-description">{study.description}</p>
                <Link 
                  to={`/project/${study.id}`}
                  className="case-study-button"
                  style={{ backgroundColor: study.buttonColor }}
                >
                  View Project <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
              <div className="case-study-image">
                <img src={study.image} alt={study.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
