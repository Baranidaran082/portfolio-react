import Qrcode from "../assets/QR code.png"
import taskmanagerimage from "../assets/task manager image.png"
import AWS from "../assets/AWS.avif"

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Check out some of my recent work
          </p>
        </div>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">
            <div className="project-image">
              <img src={taskmanagerimage} alt="Task Manager" />
            </div>

            <div className="project-details">
              <h3>Task Manager</h3>

              <p>
                Task Manager is a full-stack application that allows users to
                create, view, and delete tasks, with a React frontend and a
                Node.js/Express backend connected to MongoDB.
              </p>

              <div className="project-tech">
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>React.js</span>
                <span>Node.js</span>
                <span>Axios</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Baranidaran082/mern-task-manager"
                  className="btn btn-sm btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Project Details
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image">
              <img
                src={Qrcode}
                alt="QR Code Generator"
              />
            </div>

            <div className="project-details">
              <h3>QR Code Generator</h3>

              <p>
                A responsive web application that converts user-provided URLs
                into QR codes. It includes a simple input form and dynamically
                generates QR codes for easy sharing and quick access.
              </p>

              <div className="project-tech">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Baranidaran082/QR-Code-Generator"
                  className="btn btn-sm btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Project Details
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image">
              <img
                src={AWS}
                alt="AWS S3 Data Management Strategy"
              />
            </div>

            <div className="project-details">
              <h3>AWS S3 Data Management Strategy</h3>

              <p>
                Implemented AWS S3 Lifecycle Policies to automate data
                transitions across storage classes, reducing costs and
                managing data efficiently.
              </p>

              <div className="project-tech">
                <span>AWS S3</span>
                <span>Lifecycle Policies</span>
                <span>Cost Optimization</span>
                <span>Automation</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Baranidaran082/aws-s3-data-management"
                  className="btn btn-sm btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Project Details
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;