import { useEffect, useRef } from 'react'
import './Skills.css'

function Skills() {
  const skillsRef = useRef(null)
  const hackathonRef = useRef(null)

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

    if (skillsRef.current) observer.observe(skillsRef.current)
    if (hackathonRef.current) observer.observe(hackathonRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills">
      <div className="skills-container">
        {/* Technical Skills */}
        <div id="skills" ref={skillsRef} className="skills-section">
          <h2 className="skills-title">Technical Skills</h2>
          <div className="skills-content">
            <div className="skill-card">
              <h3 className="skill-card-title">Programming Languages</h3>
              <ul className="skill-list">
                <li>Python</li>
                <li>Verilog</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3 className="skill-card-title">Tools & Platforms</h3>
              <ul className="skill-list">
                <li>AutoCAD (Mechanical)</li>
                <li>Xilinx Vivado</li>
                <li>Matlab</li>
                <li>Cadence</li>
                <li>Lumerical</li>
                <li>QUCS</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hackathon */}
        <div id="hackathons" ref={hackathonRef} className="skills-section">
          <h2 className="skills-title">Hackathon</h2>
          <div className="hackathon-card">
            <h3 className="hackathon-card-title">Participations</h3>
            <ul className="hackathon-list">
              <li>HealthHack (Website for Non-Propaganda medicines)</li>
              <li>HackEZEE (Smart Plant Watering System)</li>
              <li>RoboFest 2.0(3-Axis Gantry Robot)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
