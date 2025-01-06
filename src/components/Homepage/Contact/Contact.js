//src/components/Contact.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      
    if (validateForm()) {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      };
  
      emailjs.send(
        'service_ue4vcrr',
        'template_dwxmzzn',
        templateParams,
        'NNg7m06LZ8oPDriXJ'
      )
      .then((result) => {
        setFormData({ name: '', email: '', message: '' });
        setSuccessMessage('Email sent successfully!');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      }, (error) => {
        setSuccessMessage('Failed to send email. Please try again.');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>

        {successMessage && (
          <span className={`status-message ${successMessage.includes('Failed') ? 'error' : 'success'}`}>
            {successMessage}
          </span>
        )}
      </form>
    </section>
  );
};

export default Contact;