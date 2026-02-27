import { useEffect, useRef, useState } from 'react'
import './GetInTouch.css'

function GetInTouch() {
  const contentRef = useRef(null)
  const [instagramState, setInstagramState] = useState(0)

  const handleInstagramClick = (e) => {
    if (instagramState === 0) {
      e.preventDefault()
      setInstagramState(1)
    } else if (instagramState === 1) {
      e.preventDefault()
      setInstagramState(2)
    } else if (instagramState === 2) {
      e.preventDefault()
      setInstagramState(3)
    } else if (instagramState === 3) {
      setInstagramState(0)
    }
  }

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

    if (contentRef.current) observer.observe(contentRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="get-in-touch">
      <div className="get-in-touch-container">
        <h2 className="get-in-touch-title">Get In Touch</h2>
        <div ref={contentRef} className="contact-content">
          <div className="contact-profile-wrapper">
            <img src="/pradhan.png" alt="Pradhan" className="contact-profile-img" />
            <span className="contact-tooltip">Hi!</span>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope contact-icon"></i>
              <a href="mailto:pradhansgowda04@gmail.com" className="contact-link">
                pradhansgowda04@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone contact-icon"></i>
              <a href="tel:+916364829169" className="contact-link">
                +91 6364829169
              </a>
            </div>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/Pradhangowda"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/pradhan-s-299003271/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/pradhan.gow_da.04?igsh=ejhhaWF1ZXpxZ25k&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className={`social-link instagram-link ${instagramState === 1 ? 'pos-left' : ''} ${instagramState === 2 ? 'pos-right' : ''} ${instagramState === 0 || instagramState === 3 ? 'pos-original' : ''}`}
              aria-label="Instagram"
              onClick={handleInstagramClick}
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
