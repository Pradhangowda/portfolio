import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './ProjectDetail.css'
import BackToTop from './BackToTop'

function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const projects = {
    'project-crypto': {
      category: 'Cryptography',
      categoryColor: '#ff9800',
      title: 'AES-128 Encryption with XOR Arbiter PUF on FPGA (2025)',
      description: 'Designed a secure AES system using nonlinear XOR-Arbiter PUF based key generation on Basys-3 FPGA, resisting key cloning and brute-force attacks.',
      image: '/ChatGPT Image Feb 25, 2026, 02_51_23 PM.png',
      details: {
        overview: 'This project implements a hardware-based Advanced Encryption Standard (AES-128) encryption system integrated with a Physical Unclonable Function (PUF) for secure key generation on a Basys-3 FPGA board.',
        technologies: ['Verilog', 'FPGA (Field-Programmable Gate Array)', 'Vivado Design Suite', 'AES-128 Algorithm', 'XOR Arbiter PUF'],
        features: [
          'Hardware-based encryption using AES-128 algorithm',
          'Secure key generation using XOR Arbiter PUF technology',
          'Resistance against key cloning attacks',
          'Protection against brute-force attacks',
          'Implementation on Basys-3 FPGA development board'
        ],
        challenges: 'Integrating the nonlinear XOR-Arbiter PUF with the AES encryption system while maintaining security and performance.',
        outcome: 'Successfully implemented a secure encryption system that leverages hardware uniqueness for cryptographic key generation, providing enhanced security against physical attacks.'
      }
    },
    'project-iot': {
      category: 'IoT',
      categoryColor: '#2196f3',
      title: 'Smart Plant Watering System (2024)',
      description: 'Automated watering using soil moisture sensing and Wi-Fi monitoring (ESP8266).',
      image: '/plant watering.png',
      details: {
        overview: 'An automated plant watering system that monitors soil moisture levels and waters plants automatically when needed, with remote monitoring capabilities via Wi-Fi.',
        technologies: ['ESP8266', 'Arduino', 'Soil Moisture Sensor', 'Relay Module', 'Water Pump', 'Wi-Fi'],
        features: [
          'Real-time soil moisture monitoring',
          'Automated watering based on moisture threshold',
          'Wi-Fi connectivity for remote monitoring',
          'Mobile/web dashboard for system status',
          'Low power consumption design'
        ],
        challenges: 'Calibrating the soil moisture sensor for accurate readings and implementing reliable Wi-Fi communication.',
        outcome: 'Created a fully functional automated watering system that reduced water waste by 40% and improved plant health through consistent moisture levels.'
      }
    },
    'project-robotics': {
      category: 'Robotics',
      categoryColor: '#4caf50',
      title: 'Robotic Hand (2023)',
      description: 'Built a multi-DOF robotic hand capable of gripping various objects, mounted on a 2-axis RC-controlled platform. The hand featured X, Y, and Z axis movement, allowing directional positioning and flexible object handling.',
      image: '/robothand.png',
      details: {
        overview: 'A multi-degree-of-freedom robotic hand with precision gripping capabilities, mounted on a remotely controlled 2-axis platform for versatile object manipulation.',
        technologies: ['Servo Motors', 'Arduino', 'RC Controller', '3D Printed Parts', 'Mechanical Linkages'],
        features: [
          'Multi-DOF finger control for precise gripping',
          'X, Y, and Z axis movement capability',
          '2-axis RC-controlled platform',
          'Capable of gripping objects of various shapes and sizes',
          'Real-time remote control',
          '3D printed mechanical components'
        ],
        challenges: 'Achieving smooth coordination between multiple servo motors and ensuring stable gripping across different object types.',
        outcome: 'Successfully built a functional robotic hand capable of picking and manipulating various objects with precision control via RC interface.'
      }
    },
    'project-aerospace': {
      category: 'Aerospace',
      categoryColor: '#9c27b0',
      title: 'Drone Using KK2.1.5 Flight Controller (2022)',
      description: 'Developed a quadcopter using the KK2.1.5 flight controller with calibrated motors, ESCs, sensors, and radio control for stable multi-rotor flight. Integrated a payload delivery box that could carry items, transport them to a location, and release them remotely during flight.',
      image: '/drone.png',
      details: {
        overview: 'A custom-built quadcopter drone featuring stable flight control and payload delivery capabilities, designed for aerial transportation of small items.',
        technologies: ['KK2.1.5 Flight Controller', 'Brushless Motors', 'ESC (Electronic Speed Controllers)', 'LiPo Battery', 'Radio Transmitter/Receiver', 'Gyroscope & Accelerometer'],
        features: [
          'Stable multi-rotor flight using KK2.1.5 controller',
          'Calibrated motors and ESCs for balanced flight',
          'Integrated payload delivery mechanism',
          'Remote-controlled payload release system',
          'Real-time flight control via radio',
          'Sensor-based stabilization'
        ],
        challenges: 'Achieving stable flight with added payload weight and implementing a reliable remote release mechanism.',
        outcome: 'Successfully built and tested a functional quadcopter capable of carrying and delivering payloads remotely with stable flight characteristics.'
      }
    },
    'project-portfolio': {
      category: 'Web Development',
      categoryColor: '#00bcd4',
      title: 'Personal Portfolio Website (2026)',
      description: 'Built a modern, responsive portfolio website using React and Vite with smooth animations, interactive UI, and dynamic routing to showcase projects and skills.',
      image: '/44.png',
      details: {
        overview: 'A professional portfolio website built with modern web technologies to showcase projects, skills, education, and experience. Features smooth animations, responsive design, and seamless navigation.',
        technologies: ['React', 'Vite', 'React Router', 'CSS3', 'JavaScript (ES6+)', 'Font Awesome', 'Intersection Observer API'],
        features: [
          'Responsive design optimized for all devices',
          'Smooth scroll-triggered animations using Intersection Observer',
          'Dynamic routing for project detail pages',
          'Interactive navigation with active section highlighting',
          'Project cards with hover effects and animations',
          'Contact section with social media integration',
          'Back-to-top button for easy navigation',
          'Dark theme with green accent colors'
        ],
        challenges: 'Implementing smooth scroll-triggered animations, managing navigation state across routes, and ensuring responsive design across all sections.',
        outcome: 'Created a fully functional, visually appealing portfolio website with excellent user experience, smooth animations, and professional presentation of skills and projects.'
      }
    }
  }

  const handleBackClick = () => {
    navigate('/')
    setTimeout(() => {
      const projectCard = document.getElementById(id)
      if (projectCard) {
        projectCard.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
  }

  const project = projects[id]

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <h1>Project not found</h1>
          <button onClick={() => navigate('/')} className="back-button">
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail">
      <button onClick={handleBackClick} className="back-button-fixed">
        <i className="fas fa-arrow-left"></i>
      </button>

      <div className="project-detail-container">
        <div className="project-header">
          <span className="project-category" style={{ color: project.categoryColor }}>
            {project.category}
          </span>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>
        </div>

        <div className="project-image-container">
          <img src={project.image} alt={project.title} className="project-main-image" />
        </div>

        <div className="project-content">
          <section className="project-section">
            <h2>Overview</h2>
            <p>{project.details.overview}</p>
          </section>

          <section className="project-section">
            <h2>Technologies Used</h2>
            <ul className="tech-list">
              {project.details.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </section>

          <section className="project-section">
            <h2>Key Features</h2>
            <ul className="features-list">
              {project.details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="project-section">
            <h2>Challenges</h2>
            <p>{project.details.challenges}</p>
          </section>

          <section className="project-section">
            <h2>Outcome</h2>
            <p>{project.details.outcome}</p>
          </section>
        </div>
      </div>
      <BackToTop />
    </div>
  )
}

export default ProjectDetail
