import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/pexels.jpg';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isTalkToUsPage = location.pathname === '/talktous';

  return (
    <div id="navbar" className="section">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isTalkToUsPage ? 'talktous-navbar' : ''}`}>
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Conditionally add the active class */}
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li className="home-link">
            {isTalkToUsPage ? (
              <Link to="/" id="home-link" onClick={() => { setIsOpen(false); handleScrollToSection('navbar'); }}>
                Home
              </Link>
            ) : (
              <a id="home-link" onClick={() => { setIsOpen(false); handleScrollToSection('navbar'); }}>
                Home
              </a>
            )}
          </li>
          <li>
            <a id="about-link" onClick={() => { setIsOpen(false); handleScrollToSection('about'); }}>
              About
            </a>
          </li>
          <li>
            <a id="services-link" onClick={() => { setIsOpen(false); handleScrollToSection('services'); }}>
              Services
            </a>
          </li>
          <li>
            <a id="contact-link" onClick={() => { setIsOpen(false); handleScrollToSection('contactus'); }}>
              Contact Us
            </a>
          </li>
          <li>
            <Link to="/talktous" onClick={() => setIsOpen(false)}>
              Talk to Us
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div
          id="hamburger-menu"
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      <div className="hero-text">
        <h1>techSynergy Solutions</h1>
        <p>Your Trusted Technology Partner</p>
      </div>
    </div>
  );
};

export default Navbar;
