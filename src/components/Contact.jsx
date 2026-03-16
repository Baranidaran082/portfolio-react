function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Have a question?</p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=baranidaran082@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    baranidaran082@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>
                  <a href="tel:+919087981630">
                    +91 90879 81630
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Location</h3>
                <p>Madurai, Tamilnadu</p>
              </div>
            </div>

            <div className="social-links">

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

          <div className="contact-form-container">
            <form
              id="contact-form"
              className="contact-form"
              action="https://formsubmit.co/baranidaran082@gmail.com"
              method="POST"
            >

              {/* Disable CAPTCHA */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Redirect after submission */}
              <input
                type="hidden"
                name="_next"
                value="https://yourdomain.com/thank-you.html"
              />

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <div className="error-message"></div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <div className="error-message"></div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
                <div className="error-message"></div>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;