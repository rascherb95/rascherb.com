import React from 'react';
import ProjectNavBar from './ProjectNavBar';

const BaseProjectLayout = ({ title, children }) => {
  return (
    <div>
      <ProjectNavBar projectTitle={title} />
      <div style={{
        padding: '40px',  // Increased padding
        marginTop: '60px', // Adjusted to match the NavBar height
        maxWidth: '1200px', // Added max-width for content containment
        margin: '60px auto 0', // Centered content with top margin
      }}>
        {children}
      </div>
    </div>
  );
};

export default BaseProjectLayout;