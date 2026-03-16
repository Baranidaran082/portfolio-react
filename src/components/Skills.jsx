function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </div>

        <div className="skills-content">

          {/* Frontend */}
          <div className="skills-category">
            <h3>Frontend Development</h3>
            <div className="skills-grid">

              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-html5"></i>
                </div>
                <h4>HTML5</h4>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: "95%" }}></div>
                </div>
                <span className="skill-percentage">95%</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-css3-alt"></i>
                </div>
                <h4>CSS3</h4>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                </div>
                <span className="skill-percentage">90%</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-js"></i>
                </div>
                <h4>JavaScript</h4>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
                <span className="skill-percentage">85%</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-react"></i>
                </div>
                <h4>React</h4>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                </div>
                <span className="skill-percentage">80%</span>
              </div>

            </div>
          </div>

          {/* Backend */}
          <div className="skills-category">
            <h3>Backend Development & Cloud Services</h3>
            <div className="skills-grid">

              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fas fa-database"></i>
                </div>
                <h4>MongoDB</h4>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: "65%" }}></div>
                </div>
                <span className="skill-percentage">85%</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-node-js"></i>
                </div>
                <h4>Node.js</h4>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                </div>
                <span className="skill-percentage">80%</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fas fa-cloud"></i>
                </div>
                <h4>AWS</h4>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
                <span className="skill-percentage">85%</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <span style={{ fontWeight: "bold", fontSize: "20px" ,color:"#3498db"}}>
                    Ex
                  </span>
                </div>
                <h4>Express.js</h4>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
                <span className="skill-percentage">70%</span>
              </div>

            </div>
          </div>

          {/* Tools */}
          <div className="skills-category">
            <h3>Tools & Others</h3>
            <div className="skills-grid">

              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-git-alt"></i>
                </div>
                <h4>Git</h4>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
                <span className="skill-percentage">85%</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h4>VS Code</h4>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
                <span className="skill-percentage">85%</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h4>Responsive Design</h4>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                </div>
                <span className="skill-percentage">90%</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fas fa-terminal"></i>
                </div>
                <h4>Command Line</h4>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
                <span className="skill-percentage">75%</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;