// src/components/ProjectNavBar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBarStyles } from '../NavHeader/NavHeaderStyles';

const ProjectNavBar = ({ projectTitle }) => {
  const navigate = useNavigate();

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav style={NavBarStyles.nav}>
      <span style={NavBarStyles.title}>{projectTitle}</span>
      <div style={NavBarStyles.linkContainer}>
        <a
          href="/#home"
          onClick={(e) => handleNavigation(e, 'home')}
          style={NavBarStyles.link}
        >
          HOME
        </a>
        <a
          href="/#projects"
          onClick={(e) => handleNavigation(e, 'projects')}
          style={NavBarStyles.link}
        >
          PROJECTS
        </a>
        <a
          href="/#contact"
          onClick={(e) => handleNavigation(e, 'contact')}
          style={NavBarStyles.link}
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default ProjectNavBar;