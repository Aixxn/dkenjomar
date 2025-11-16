import { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logoImage from '../images/logo.png';
import './styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <img src={logoImage} alt="D'Kenjomar logo" className="navbar-logo-image" />
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('services')}>Services</a></li>
          <li><a onClick={() => scrollToSection('location')}>Location</a></li>
        </ul>

        <div className="navbar-cta">
          <div className="navbar-social">
            <a href="https://www.facebook.com/profile.php?id=100069943075203" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </div>

          <div className="navbar-contact-container">
            <div className="navbar-contact">
              <button className="contact-button" onClick={() => scrollToSection('contact')}>Contact Us</button>
            </div>
          </div>
        </div>

        <button 
          className="navbar-mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
