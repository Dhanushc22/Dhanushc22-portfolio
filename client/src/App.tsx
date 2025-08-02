import "./index.css";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  const skillsData = [
    { name: "C, Java, Python", percentage: 85 },
    { name: "JavaScript, Dart", percentage: 80 },
    { name: "Flutter & Mobile Dev", percentage: 90 },
    { name: "HTML, CSS, XML", percentage: 85 },
    { name: "Firebase, AWS", percentage: 75 },
    { name: "Git, GitHub", percentage: 80 }
  ];

  const projects = [
    {
      id: 1,
      title: "Health Whisper",
      category: "Mobile Development",
      image: "/api/placeholder/300/200",
      link: "https://github.com/Dhanushc22/HealthWhisper"
    },
    {
      id: 2,
      title: "Binary Box",
      category: "Mobile Development", 
      image: "/api/placeholder/300/200",
      link: "https://github.com/Dhanushc22/BinaryBox"
    },
    {
      id: 3,
      title: "Neuro Synk",
      category: "Mobile Development",
      image: "/api/placeholder/300/200", 
      link: "https://github.com/Dhanushc22/NeuroSynk"
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src="/api/placeholder/80/80" alt="Dhanush C" width="80" />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Dhanush C">Dhanush C</h1>
            <p className="title">Full Stack Developer & AI/ML Engineer</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>
            <svg className="icon" width="16" height="16" viewBox="0 0 16 16">
              <path d="M8 12l-4-4h8l-4 4z"/>
            </svg>
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:dhanushc092@gmail.com" className="contact-link">dhanushc092@gmail.com</a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="tel:+916362638287" className="contact-link">+91 6362638287</a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div className="contact-info">
                <p className="contact-title">GitHub</p>
                <a href="https://github.com/Dhanushc22" className="contact-link">Dhanushc22</a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="contact-info">
                <p className="contact-title">LinkedIn</p>
                <a href="https://linkedin.com/in/dhanush-c-b41015343" className="contact-link">dhanush-c-b41015343</a>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="https://github.com/Dhanushc22" className="social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </li>
            <li className="social-item">
              <a href="https://linkedin.com/in/dhanush-c-b41015343" className="social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Navigation */}
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <button 
                className={`navbar-link ${activeTab === 'about' ? 'active' : ''}`}
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
            </li>
            <li className="navbar-item">
              <button 
                className={`navbar-link ${activeTab === 'resume' ? 'active' : ''}`}
                onClick={() => setActiveTab('resume')}
              >
                Resume
              </button>
            </li>
            <li className="navbar-item">
              <button 
                className={`navbar-link ${activeTab === 'portfolio' ? 'active' : ''}`}
                onClick={() => setActiveTab('portfolio')}
              >
                Portfolio
              </button>
            </li>
            <li className="navbar-item">
              <button 
                className={`navbar-link ${activeTab === 'contact' ? 'active' : ''}`}
                onClick={() => setActiveTab('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* About Section */}
        {activeTab === 'about' && (
          <article className="about active">
            <header>
              <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
              <p>
                Aspiring software engineer with hands-on experience in full-stack web and mobile development, 
                including building high-performance apps using Flutter. Currently pursuing my MCA at Nitte Meenakshi 
                Institute of Technology with a CGPA of 7.6.
              </p>
              <p>
                Skilled in crafting responsive UIs, developing scalable APIs, and delivering user-centric solutions. 
                Eager to contribute to innovative teams where I can merge creativity with clean, maintainable code 
                to solve real-world problems and create seamless digital experiences.
              </p>
            </section>

            {/* What I'm Doing */}
            <section className="service">
              <h3 className="h3 service-title">What i'm doing</h3>
              <ul className="service-list">
                <li className="service-item">
                  <div className="service-icon-box">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Mobile Development</h4>
                    <p className="service-item-text">
                      Building high-performance mobile applications using Flutter, Dart, and Android SDK with BLE integration.
                    </p>
                  </div>
                </li>

                <li className="service-item">
                  <div className="service-icon-box">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">AI/ML Integration</h4>
                    <p className="service-item-text">
                      Developing AI-powered applications with OpenAI GPT, Google Vision API, and machine learning models.
                    </p>
                  </div>
                </li>

                <li className="service-item">
                  <div className="service-icon-box">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Programming</h4>
                    <p className="service-item-text">
                      Proficient in C, Java, Python, JavaScript, and Dart with focus on problem-solving and clean code.
                    </p>
                  </div>
                </li>

                <li className="service-item">
                  <div className="service-icon-box">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/>
                    </svg>
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Cloud Computing</h4>
                    <p className="service-item-text">
                      Experience with Firebase, AWS, and building scalable cloud-based applications and APIs.
                    </p>
                  </div>
                </li>
              </ul>
            </section>
          </article>
        )}

        {/* Resume Section */}
        {activeTab === 'resume' && (
          <article className="resume active">
            <header>
              <h2 className="h2 article-title">Resume</h2>
            </header>

            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="h3">Education</h3>
              </div>

              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Nitte Meenakshi Institute of Technology</h4>
                  <span>2024 — 2026</span>
                  <p className="timeline-text">
                    Master of Computer Applications (MCA) with CGPA: 7.6 (Ongoing). Specializing in advanced software development, 
                    AI/ML applications, and modern web technologies.
                  </p>
                </li>

                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Sir MV Science College, Shivamogga</h4>
                  <span>2021 — 2024</span>
                  <p className="timeline-text">
                    Bachelor of Computer Applications (BCA) with CGPA: 7.8. Completed July 2024. 
                    Strong foundation in computer science fundamentals and programming.
                  </p>
                </li>
              </ol>
            </section>

            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <h3 className="h3">Projects</h3>
              </div>

              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Health Whisper - AI-Powered Medical Assistant</h4>
                  <span>Mobile Development</span>
                  <p className="timeline-text">
                    Developed a smart mobile healthcare assistant with AI-driven features including X-ray scanning, 
                    voice symptom consultation, blood report decoding, and tablet analysis using Android Studio, Java, 
                    OpenAI GPT, and Google Vision API.
                  </p>
                </li>

                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Binary Box - Offline File-to-Binary Converter</h4>
                  <span>Mobile Development</span>
                  <p className="timeline-text">
                    Privacy-focused Android app that securely converts files into binary strings and restores them—all entirely offline. 
                    Features two-way conversion, theme customization, and optimized performance.
                  </p>
                </li>

                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Neuro Synk - Smartwatch Heart Health Monitoring</h4>
                  <span>Mobile Development</span>
                  <p className="timeline-text">
                    Cross-platform health monitoring app connecting with BLE-enabled smartwatches for real-time cardiovascular insights, 
                    ECG-like PPG analysis, and heart attack detection using Flutter, Node.js, and MongoDB.
                  </p>
                </li>
              </ol>
            </section>

            <section className="skill">
              <h3 className="h3 skills-title">My skills</h3>
              <ul className="skills-list content-card">
                {skillsData.map((skill, index) => (
                  <li key={index} className="skills-item">
                    <div className="title-wrapper">
                      <h5 className="h5">{skill.name}</h5>
                      <data value={skill.percentage}>{skill.percentage}%</data>
                    </div>
                    <div className="skill-progress-bg">
                      <div className="skill-progress-fill" style={{ width: `${skill.percentage}%` }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        )}

        {/* Portfolio Section */}
        {activeTab === 'portfolio' && (
          <article className="portfolio active">
            <header>
              <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">
              <ul className="project-list">
                {projects.map((project) => (
                  <li key={project.id} className="project-item active">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                          </svg>
                        </div>
                        <img src={project.image} alt={project.title} loading="lazy" />
                      </figure>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-category">{project.category}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <article className="contact active">
            <header>
              <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="contact-form">
              <h3 className="h3 form-title">Contact Form</h3>
              <form className="form">
                <div className="input-wrapper">
                  <input type="text" name="fullname" className="form-input" placeholder="Full name" required />
                  <input type="email" name="email" className="form-input" placeholder="Email address" required />
                </div>
                <textarea name="message" className="form-input" placeholder="Your Message" required></textarea>
                <button className="form-btn" type="submit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                  <span>Send Message</span>
                </button>
              </form>
            </section>
          </article>
        )}
      </div>
    </div>
  );
}

export default App;