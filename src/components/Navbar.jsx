import { useState } from "react";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header">
      <div className="container">
        <div className="header-content">

          <div className="logo">
            <a href="#home">Baranidaran</a>
          </div>

          <nav className="desktop-nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fas fa-bars"></i>
          </div>

        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${menuOpen ? "active" : ""}`}>
          <ul>
            <li><a href="#home" onClick={()=>setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={()=>setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={()=>setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={()=>setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;