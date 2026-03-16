import Barani from "../assets/Barani.jpeg"

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Get to know more about me and my background
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={Barani} alt="Baranidaran - Professional Photo" />
          </div>

          <div className="about-details">
            <h3>Who I Am</h3>

            <p className="about-intro">
              I am a passionate MERN Developer with a strong eye for design
              and user experience. I specialize in creating responsive,
              visually appealing, and user-friendly websites using modern web
              technologies. I enjoy bringing ideas to life through clean and
              efficient code.
            </p>

            <div className="about-grid">

              <div className="about-item">
                <i className="fas fa-graduation-cap"></i>
                <div className="about-item-content">
                  <h4>Education</h4>
                  <p>
                    MBA in [Human Resource Management]
                    <br />
                    Alagappa University, Karaikudi
                  </p>

                  <p>
                    BA in [English Literature]
                    <br />
                    The American College, Madurai
                  </p>
                </div>
              </div>

              <div className="about-item">
                <i className="fas fa-briefcase"></i>
                <div className="about-item-content">
                  <h4>Experience</h4>
                  <p>
                    Hands-on experience building responsive web applications.
                    Developed full-stack projects using React, Node.js, and
                    MongoDB. Experience working with REST APIs and cloud
                    services like AWS.
                  </p>
                </div>
              </div>

              <div className="about-item">
                <i className="fas fa-laptop-code"></i>
                <div className="about-item-content">
                  <h4>Technologies</h4>
                  <p>
                    HTML5, CSS3, JavaScript, React.js
                    <br />
                    Node.js, Express.js, MongoDB & MYSQL
                  </p>
                </div>
              </div>

              <div className="about-item">
                <i className="fas fa-lightbulb"></i>
                <div className="about-item-content">
                  <h4>Interests</h4>
                  <p>
                    Full Stack Development, Website Design & Learning New Web
                    Technologies
                  </p>
                </div>
              </div>

            </div>

            <div className="about-buttons">
              <a
                href="./Baranidaran_resume.pdf"
                className="btn btn-primary"
                download
              >
                <i className="fas fa-download"></i> Download Resume
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;