import './Hero.css'

function Hero() {
  const categories = [
    { name: 'Cryptography', color: '#ff9800', id: 'project-crypto' },
    { name: 'IoT', color: '#2196f3', id: 'project-iot' },
    { name: 'Robotics', color: '#4caf50', id: 'project-robotics' },
    { name: 'Aerospace', color: '#9c27b0', id: 'project-aerospace' },
  ]

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hi Everyone!</p>
            <h1 className="hero-title">
              I'm <span className="highlight">Pradhan</span>
            </h1>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-wrapper">
              <img src="/ChatGPT Image Feb 25, 2026, 02_36_38 PM.png" alt="Pradhan" />
            </div>
          </div>
        </div>

        <div className="categories-section">
          <p className="categories-label">Project Domains</p>
          <div className="categories-list">
            {categories.map((category, index) => (
              <a 
                key={index} 
                href={`#${category.id}`}
                className="category-item"
                style={{ color: category.color }}
              >
                <span>{category.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
