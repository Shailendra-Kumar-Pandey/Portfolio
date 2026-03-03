import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

function App() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container container">
          <a href="#home" className="navbar-logo" onClick={closeMenu}>
            Shailendra
          </a>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="#home" className="nav-links" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-links" onClick={closeMenu}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-links" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-links" onClick={closeMenu}>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-links" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/*div>
      </ Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Shailendra Kumar Pandey</h1>
          <p>
            I'm a <span className="animate">MERN Stack Developer</span>
          </p>
          <div className="social-links">
            <a
              href="https://github.com/Shailendra-Kumar-Pandey"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shailendra-kumar-pandey"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          </div>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="column left">
              {/* Replace src with your actual image */}
              <img
                src="./pubilc/Jeetu.png"
                alt="profile"
              />
            </div>
            <div className="column right">
              <div className="text">
                I'm Shailendra and I'm a{" "}
                <span className="typing-2">AI + MERN Stack Developer</span>
              </div>
              <p>
                MERN Stack Developer with hands-on experience building
                full-stack web applications, RESTful APIs, and AI-integrated
                systems. Adept at translating business requirements into
                scalable, maintainable code. Background in operations management
                adds strength in project coordination, client communication, and
                deadline-driven delivery.
              </p>
              <a src="../pubilc/resume.pdf" className="btn">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-dark">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-content">
            {[
              "HTML5 & CSS3:90",
              "JavaScript:80",
              "React JS:75",
              "Bootstrap:85",
            ].map((skill, index) => {
              const [name, percent] = skill.split(":");
              return (
                <div className="skill-box" key={index}>
                  <div className="skill-name">{name}</div>
                  <div className="skill-bar">
                    <div
                      className="skill-per"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <div className="container">
          <h2 className="section-title">Portfolio</h2>
          <div className="portfolio-grid">
            {[1, 2, 3].map((item) => (
              <div className="portfolio-item" key={item}>
                <img
                  src={`https://via.placeholder.com/400x300?text=Project+${item}`}
                  alt={`Project ${item}`}
                />
                <div className="overlay">
                  <h3>Project {item}</h3>
                  <p>Web Application</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-dark">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>Available for freelance work and full-time opportunities.</p>
              <div className="info-item">
                <span>Email: shailendra@example.com</span>
              </div>
              <div className="info-item">
                <span>Phone: +123 456 7890</span>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <span>
          Created By <a href="#">Shailendra</a> |{" "}
          <span className="far fa-copyright"></span> 2024 All rights reserved.
        </span>
      </footer>
    </div>
  );
}

export default App;
