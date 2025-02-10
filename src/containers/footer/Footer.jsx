import React from 'react';
import './footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <p>Get the latest updates and offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button type="submit" className="subscribe-btn">
              Subscribe <FaPaperPlane className="send-icon" />
            </button>
          </form>
        </div>

        <div className="footer-bottom">
          <div className="contact">
            <h3>Contact Us</h3>
            <div className="contact-box">
              <p>Phone: +254 (757) 573 444</p>
              <p>Phone: +254 (718) 279 984</p>
              <p>Email: techsynergysolutions@gmail.com</p>
            </div>
          </div>

          <div className="socials">
            <h3>Follow Us</h3>
            <div className="social-box">
              <a href="https://www.facebook.com" className="social-icon"><FaFacebookF /></a>
              <a href="https://www.twitter.com" className="social-icon"><FaTwitter /></a>
              <a href="https://www.instagram.com" className="social-icon"><FaInstagram /></a>
              <a href="https://www.linkedin.com" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-bar">
        <p>&copy; 2024 techSynergy Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
