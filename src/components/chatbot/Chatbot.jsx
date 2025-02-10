import React, { useState } from "react";
import './chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    question: "",
  });

  const toggleChat = () => setIsOpen((prev) => !prev);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userDetails.name && userDetails.email && userDetails.question) {
      setIsFormSubmitted(true);
      showSubmissionAlert();
    }
  };

  const showSubmissionAlert = () => {
    setTimeout(() => {
      alert("Form submitted! We will get back to you shortly.");
    }, 500);
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <div className="chatbot-icon" role="button" tabIndex={0} onClick={toggleChat}>
          <span>💬</span>
        </div>
      )}
      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-header">
            <h3>Chat with us, we are online!</h3>
            <button type="button" onClick={toggleChat} className="close-btn">✖️</button>
          </div>
          {!isFormSubmitted ? (
            <div className="chatbot-form">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={userDetails.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="question">Question</label>
                  <textarea
                    id="question"
                    name="question"
                    placeholder="What would you like to ask?"
                    value={userDetails.question}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          ) : (
            <div className="chatbot-messages">
              <div className="message bot">
                <p>Thank you, {userDetails.name}! We will get back to you shortly.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
