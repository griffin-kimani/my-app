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

  useEffect(() => {
    // Add event listeners programmatically
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const servicesLink = document.getElementById('services-link');
    const contactLink = document.getElementById('contact-link');
    const hamburger = document.getElementById('hamburger-menu');

    if (homeLink) homeLink.addEventListener('click', () => handleScrollToSection('navbar'));
    if (aboutLink) aboutLink.addEventListener('click', () => handleScrollToSection('about'));
    if (servicesLink) servicesLink.addEventListener('click', () => handleScrollToSection('services'));
    if (contactLink) contactLink.addEventListener('click', () => handleScrollToSection('contactus'));
    if (hamburger) hamburger.addEventListener('click', () => setIsOpen((prev) => !prev));

    return () => {
      if (homeLink) homeLink.removeEventListener('click', () => handleScrollToSection('navbar'));
      if (aboutLink) aboutLink.removeEventListener('click', () => handleScrollToSection('about'));
      if (servicesLink) servicesLink.removeEventListener('click', () => handleScrollToSection('services'));
      if (contactLink) contactLink.removeEventListener('click', () => handleScrollToSection('contactus'));
      if (hamburger) hamburger.removeEventListener('click', () => setIsOpen((prev) => !prev));
    };
  }, []);

  const isTalkToUsPage = location.pathname === '/talktous';

  return (
    <div id="navbar" className="section">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isTalkToUsPage ? 'talktous-navbar' : ''}`}>
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="navbar-links">
          <li className="home-link">
            {isTalkToUsPage ? (
              <Link to="/" id="home-link">Home</Link>
            ) : (
              <a id="home-link">Home</a>
            )}
          </li>
          <li><a id="about-link">About</a></li>
          <li><a id="services-link">Services</a></li>
          <li><a id="contact-link">Contact Us</a></li>
          <li><Link to="/talktous">Talk to Us</Link></li>
        </ul>

        <div id="hamburger-menu" className={`hamburger ${isOpen ? 'open' : ''}`}>
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
