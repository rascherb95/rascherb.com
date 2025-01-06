import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectCardStyles } from './ProjectCardStyles';

const CustomModal = ({ isOpen, onClose, title }) => {
    if (!isOpen) return null;
    return (
        <div style={ProjectCardStyles.modalOverlay}>
            <div style={ProjectCardStyles.modalContent}>
                <h3 style={ProjectCardStyles.modalTitle}>
                    Sorry, {title} isn't ready yet
                </h3>
                <p style={ProjectCardStyles.modalText}>
                    But this project is coming soon! 
                </p>
                <button
                    style={ProjectCardStyles.modalButton}
                    onClick={onClose}
                >
                    Got it
                </button>
            </div>
        </div>
    );
};

const ProjectCard = ({
    title,
    status,
    description,
    features,
    technologies,
    link
}) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
      if (status === 'Coming Soon') {
          setShowModal(true);
          return;
      }
      navigate(link);
  };
    return (
        <>
            <div
                style={{
                    ...ProjectCardStyles.card,
                    ...(isHovered ? ProjectCardStyles.cardHovered : ProjectCardStyles.cardNormal),
                    cursor: status === 'Coming Soon' ? 'not-allowed' : 'pointer'
                }}
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div style={ProjectCardStyles.header}>
                    <h3 style={ProjectCardStyles.title}>{title}</h3>
                    <span style={ProjectCardStyles.statusBadge(status)}>
                        {status}
                    </span>
                </div>
                <p style={ProjectCardStyles.description}>
                    {description}
                </p>
                <div style={ProjectCardStyles.featuresSection}>
                    <h4 style={ProjectCardStyles.featuresTitle}>
                        {status === 'Coming Soon' ? 'Planned Features:' : 'Key Features:'}
                    </h4>
                    <ul style={ProjectCardStyles.featuresList}>
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
                <div style={ProjectCardStyles.techContainer}>
                    {technologies.map((tech, index) => (
                        <span key={index} style={ProjectCardStyles.techBadge}>
                            {tech}
                        </span>
                    ))}
                </div>
                <div style={ProjectCardStyles.learnMore}>
                    Learn more →
                </div>
            </div>
            <CustomModal 
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title={title}
            />
        </>
    );
};

export default ProjectCard;