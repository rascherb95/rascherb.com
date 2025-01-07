import React from 'react';
import './Home.css';

const Home = ({ profileImage }) => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Text Content Column */}
        <div className="content-column">
          <h1>Who am I?</h1>
          <p className="subtitle">
            Rob Scherb | <a 
              href="https://www.linkedin.com/in/rascherb/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#0077b5', // LinkedIn blue color
                textDecoration: 'none'
              }}
            >
              LinkedIn
            </a>
          </p>
          <div className="description">
            <p>
              I'm a CPA that specializes in accounting due diligence in the software industry.
              This is my personal website and mainly hosts projects I've worked on.
            </p>
          </div>
          <a href="#projects" className="cta-button">
            What am I working on?
          </a>
        </div>
        
        {/* Image Column */}
        <div className="image-column">
          <img
            src={profileImage}
            alt="Chrysler Building with a Grand Central eagle in front of it"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;