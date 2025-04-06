import React, { useState, useEffect } from "react";
import './chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    question: "",
  });

  const toggleChat = () => {
    setIsOpen(prev => !prev);
    if (!isOpen) setShowNotification(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowNotification(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userDetails.name && userDetails.email && userDetails.question) {
      setIsFormSubmitted(true);
    }
  };

  return (
    <div className="chatbot-container">
      {!isOpen && showNotification && (
        <div className="chatbot-notification pulse" onClick={toggleChat}>
          <p>We’re here to help!</p>
        </div>
      )}

      {!isOpen && (
        <div className="chatbot-icon pulse" onClick={toggleChat}>
          💬
        </div>
      )}

      {isOpen && (
        <div className="chatbot chatbot-fade-in">
          <div className="chatbot-header">
            <h3>Let's Chat!</h3>
            <button type="button" onClick={toggleChat} className="close-btn">×</button>
          </div>
          {!isFormSubmitted ? (
            <form className="chatbot-form" onSubmit={handleFormSubmit}>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={userDetails.name} 
                onChange={handleInputChange} 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={userDetails.email} 
                onChange={handleInputChange} 
                required 
              />
              <textarea 
                name="question" 
                placeholder="Ask us anything..." 
                value={userDetails.question} 
                onChange={handleInputChange} 
                required 
              />
              <button type="submit">Send</button>
            </form>
          ) : (
            <div className="chatbot-messages success-message">
              <p>✅ Thanks {userDetails.name}! We'll reach out to you soon.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
