import React from 'react';
import ProjectNavBar from './ProjectNavBar';

const BaseProjectLayout = ({ title, children }) => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <ProjectNavBar projectTitle={title} />
      <div style={{ paddingTop: '80px' }}>
        {children}
      </div>
    </div>
  );
};

export default BaseProjectLayout;