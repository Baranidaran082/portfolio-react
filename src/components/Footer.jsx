function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="footer-content">

            <div className="footer-logo">
              <a href="#home">Baranidaran</a>
            </div>

            <div className="footer-nav">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-social">

              <a
                href="https://github.com/Baranidaran082"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://linkedin.com/in/baranidaran-s-549b872a1"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

            </div>

          </div>

          <div className="footer-bottom">
            <p>© 2025 Baranidaran. All Rights Reserved.</p>
          </div>

        </div>
      </footer>

      {/* Back to top button */}
      <a href="#home" className="back-to-top">
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
}

export default Footer;