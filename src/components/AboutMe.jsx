import { useEffect, useRef } from 'react'
import './AboutMe.css'

function AboutMe() {
  const educationRef = useRef(null)
  const experienceRef = useRef(null)
  const contentRef = useRef(null)
  const timelineSectionRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, observerOptions)

    if (contentRef.current) observer.observe(contentRef.current)
    if (timelineSectionRef.current) observer.observe(timelineSectionRef.current)

    return () => observer.disconnect()
  }, [])
  const education = [
    {
      id: 1,
      institution: 'Sri Vani Education Centre School',
      degree: 'Class X (CBSE-Board)',
      year: '2019-2020'
    },
    {
      id: 2,
      institution: 'ASC PU College',
      degree: 'Class XII (State-Board)',
      year: '2021-2022'
    },
    {
      id: 3,
      institution: 'PES University',
      degree: 'B TECH - Electronics and Communication Engineering',
      year: '2022-2026'
    }
  ]

  const experience = [
    {
      id: 1,
      role: 'Hackathon Participant',
      company: 'HealthHack, HackEZEE, RoboFest 2.0',
      year: '2022-2024'
    },
    {
      id: 2,
      role: 'Intern',
      company: 'Bharat Electronics Limited (BEL) - Export Manufacturing SBU',
      year: 'June - July 2025'
    },
    {
      id: 3,
      role: 'Intern',
      company: 'Inventech Info Solutions - Frontend Developer',
      year: 'Jan - April 2026'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div ref={contentRef} className="about-content">
          <p className="about-text">
            I am a highly motivated Electronics and Communication Engineering student from 
            PES University with a strong background in hardware-software integration and 
            practical project development.
          </p>
          <p className="about-text">
            I have hands-on experience in building drones, robotic mechanisms, and 
            automation-based systems. As a frontend developer, I create responsive and 
            interactive web interfaces using HTML, CSS, JavaScript, and React. I enjoy building 
            practical solutions that bridge hardware and software, from FPGA-based security 
            systems to automated plant watering systems. Additionally, I have learned 
            AutoCAD 2D/3D mechanical design as an extra skill.
          </p>
          <p className="about-text">
            My journey in engineering has been driven by curiosity and hands-on learning. 
            I have participated in multiple hackathons and built projects ranging from 
            robotic hands to drones, constantly pushing myself to explore new technologies 
            and solve real-world problems.
          </p>
        </div>

        {/* Education and Experience Section */}
        <div ref={timelineSectionRef} className="timeline-section">
          {/* Education */}
          <div className="timeline-column">
            <h3 className="timeline-title">Education</h3>
            <div ref={educationRef} className="simple-timeline">
              {education.map((edu) => (
                <div key={edu.id} className="simple-timeline-item">
                  <span className="simple-year">{edu.year}</span>
                  <h4 className="simple-institution">{edu.institution}</h4>
                  <p className="simple-degree">{edu.degree}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="timeline-column">
            <h3 className="timeline-title">Experience</h3>
            <div ref={experienceRef} className="simple-timeline">
              {experience.map((exp) => (
                <div key={exp.id} className="simple-timeline-item">
                  <span className="simple-year">{exp.year}</span>
                  <h4 className="simple-institution">{exp.role}</h4>
                  <p className="simple-degree">{exp.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
