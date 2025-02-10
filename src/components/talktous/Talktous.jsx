import React, { useState } from 'react';
import './talktous.css';
import Navbar from '../navbar/Navbar';

const Talktous = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your inquiry has been submitted successfully.");
  };

  return (
    <div className="talktous-page">
      <Navbar />
      <div className="talktous-container">
        <h2>Talk to Us</h2>
        <p>We’re here to answer your questions. Please fill out the form below.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="inquiry">Inquiry</label>
            <textarea id="inquiry" name="inquiry" rows="6" placeholder="Type your inquiry here" value={formData.inquiry} onChange={handleInputChange} required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Talktous;
