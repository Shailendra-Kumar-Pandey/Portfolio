import { useRef, useState } from "react";
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
import { FaInstagram } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [click, setClick] = useState(false);
  const refName = useRef("")
  const refemail = useRef("")
  const refdata = useRef("")
  const [email, setEmail] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [send, setSend] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  function handleSubmit() {
    if (!email.name || !email.email || !email.message) {
      toast.error("Please fill all the fields");
      return;
    }

    if (!email.email.includes("@") || !email.email.includes(".")) {
      toast.error("Please enter a valid email");
      return;
    }

    toast.success("Email Send...")
        refName.current.value = ""
        refemail.current.value = ""
        refdata.current.value = ""
        setSend(false)

    // fetch("https://portfolio-backend-q7aa.onrender.com/email/sendMail", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(email),
    // })
    //   .then((res) => res.json())
    //   .then(() => {
    //     // console.log(data);
    //     setSend(true);
    //     setEmail({ name: '', email: '', message: '' })
    //     toast.success("Email Send...")
    //   })
    //   .catch(() => {
    //     // console.error(err);
    //     // alert("An error occurred while sending the email");
    //     toast.success("Email Send...")
    //     refName.current.value = ""
    //     refemail.current.value = ""
    //     refdata.current.value = ""
    //     setSend(false)
    //   });
  }

  return (
    <>
      <ToastContainer />
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-container container">
            <a href="#home" className="navbar-logo" onClick={closeMenu}>
              <FaBriefcase />
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
                <a href="#experience" className="nav-links" onClick={closeMenu}>
                  Experience
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
              I'm a <span className="animate">Full Stack Developer</span>
            </p>
            <div className="social-links">
              <a
                href="https://github.com/Shailendra-Kumar-Pandey"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shailendra-kumar-pandey/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/shailendra.pandey.3557/" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/shailendra_pandey_g" target="_blank" rel="noreferrer">
                <FaInstagram />
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
                <img
                  src="/Hero.png"
                  alt="profile"
                />
              </div>
              <div className="column right">
                <div className="text">
                  I'm Shailendra and I'm a{" "}
                  <span className="typing-2">Full Stack Developer</span>
                </div>
                <p>
                  Full Stack Developer with hands-on experience building
                  full-stack web applications, RESTful APIs, and AI-integrated
                  systems. Adept at translating business requirements into
                  scalable, maintainable code. Background in operations management
                  adds strength in project coordination, client communication, and
                  deadline-driven delivery.
                </p>
                <a href="/Shailendra_Kumar_Pandey_Resume.pdf" className="btn" target="_blank">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section bg-light">
          <div className="container">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">April 2026 - Present</span>
                  <h3 className="timeline-title">Full Stack Developer</h3>
                  <div className="timeline-company">
                    <a href="https://vitricsolutions.com/" target="_blank" rel="noopener noreferrer">
                      Vitric Business Solution Pvt. Ltd. | Nagpur
                    </a>
                  </div>
                  <div className="timeline-desc">
                    <ul>
                      <li>Develop frontend and backend modules using React.js, Node.js, Express.js, and MongoDB.</li>
                      <li>Work in Agile development environments, integrate REST APIs, and collaborate with teams to deliver high-quality software solutions.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Sep 2025 - Mar 2026</span>
                  <h3 className="timeline-title">Full Stack Developer Intern</h3>
                  <div className="timeline-company">
                    <a href="https://manishasystems.org/" target="_blank" rel="noopener noreferrer">
                      Manisha Systems | Nagpur
                    </a>
                  </div>
                  <div className="timeline-desc">
                    <ul>
                      <li>Specialized in AI-Powered Web Application Development.</li>
                      <li>Assisted in designing responsive user interfaces and building modular React components.</li>
                      <li>Wrote and optimized clean, reusable backend code and RESTful API endpoints.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">2019 - 2023</span>
                  <h3 className="timeline-title">Proprietor</h3>
                  <div className="timeline-company">Maa Sharda Traders & Construction</div>
                  <div className="timeline-desc">
                    <ul>
                      <li>Led government tender-based projects and end-to-end project execution.</li>
                      <li>Managed complex bidding processes, compliance audits, budgeting, and financial reports.</li>
                      <li>Coordinated with vendors, contractors, and cross-functional teams to meet strict deadlines.</li>
                    </ul>
                  </div>
                </div>
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
                "JavaScript & TypeScript:95",
                "React JS & JSX:90",
                "Tailwind CSS & Bootstrap:85",
                "Node JS & Express:90",
                "MongoDB:90",
                "API Development & REST APIs:95",
                "AI Integration & Prompt Eng.:85",
                "Git & GitHub:80",
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
              <div className="portfolio-item" >
                <img
                  src={`/Project_1.jpg`}
                  alt={`Project 1`}
                />
                <div className="overlay">
                  <h3> Legal App with AI</h3>
                  <p>Web Application</p>
                  <div className="project-links">
                    {/* <a href="https://github.com/Shailendra-Kumar-Pandey" target="_blank" rel="noreferrer" className="proj-btn">GitHub</a>
                    <a href="https://github.com/Shailendra-Kumar-Pandey" target="_blank" rel="noreferrer" className="proj-btn">Live Demo</a> */}
                  </div>
                </div>
              </div>

              <div className="portfolio-item" >
                <img
                  src={`/Project_2.jpg`}
                  alt={`Project 2`}
                />
                <div className="overlay">
                  <h3> E-Commerce App</h3>
                  <p>Web Application</p>
                  <div className="project-links">
                    {/* <a href="https://github.com/Shailendra-Kumar-Pandey" target="_blank" rel="noreferrer" className="proj-btn">GitHub</a>
                    <a href="https://github.com/Shailendra-Kumar-Pandey" target="_blank" rel="noreferrer" className="proj-btn">Live Demo</a> */}
                  </div>
                </div>
              </div>

              <div className="portfolio-item" >
                <img
                  src={`/Project_3.jpg`}
                  alt={`Project 3`}
                />
                <div className="overlay">
                  <h3> Currency Converter App</h3>
                  <p>Web Application</p>
                  <div className="project-links">
                    {/* <a href="https://github.com/Shailendra-Kumar-Pandey" target="_blank" rel="noreferrer" className="proj-btn">GitHub</a>
                    <a href="https://github.com/Shailendra-Kumar-Pandey" target="_blank" rel="noreferrer" className="proj-btn">Live Demo</a> */}
                  </div>
                </div>
              </div>
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
                  <span>Email: shailendrakr2010@gmail.com</span>
                </div>
                <div className="info-item">
                  <span>Phone: +91 98066 38963</span>
                </div>
              </div>
              <div className="contact-form">
                <input type="text" ref={refName} placeholder="Name" onChange={(e) => { setEmail({ ...email, name: e.target.value }) }} />
                <input type="email" ref={refemail} placeholder="Email" onChange={(e) => { setEmail({ ...email, email: e.target.value }) }} />
                <textarea placeholder="Message" ref={refdata} onChange={(e) => { setEmail({ ...email, message: e.target.value }) }}></textarea>
                <button type="submit" className="btn" onClick={() => {
                  handleSubmit()
                }}>
                  {
                    send ? "Message Sent" : "Send Message"
                  }
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <span>
            Created By <a href="../public/Shailendra_Kumar_Pandey_Resume.pdf" target="_blank" style={{ cursor: "pointer" }}>Shailendra Pandey</a> |{" "}
            <span className="far fa-copyright"></span> 2026 All rights reserved.
          </span>
        </footer>
      </div>
    </>
  );
}

export default App;
