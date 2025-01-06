// src/components/ProjectCard/ProjectCardStyles.js
export const ProjectCardStyles = {
    card: {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '5px'
    },
    title: {
        fontSize: '24px',
        margin: 0
    },
    statusBadge: (status) => ({
        padding: '5px 12px',
        backgroundColor: status === 'Current Project' ? '#355E3B' : '#fef3c7',
        color: status === 'Current Project' ? 'white' : '#92400e',
        borderRadius: '15px',
        fontSize: '14px',
        fontWeight: '500'
    }),
    description: {
        fontSize: '16px',
        color: '#666',
        margin: '10px 0'
    },
    featuresSection: {
        margin: '5px 0 15px 0'
    },
    featuresTitle: {
        fontSize: '18px',
        marginBottom: '10px',
        color: '#444'
    },
    featuresList: {
        paddingLeft: '20px',
        color: '#666'
    },
    techContainer: {
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        marginTop: 'auto'
    },
    techBadge: {
        padding: '5px 10px',
        backgroundColor: '#f0f9ff',
        borderRadius: '15px',
        fontSize: '14px'
    },
    learnMore: {
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px'
    },
    // For hover states
    cardHovered: {
        transform: 'translateY(-5px)',
        boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
    },
    cardNormal: {
        transform: 'translateY(0)',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    inProgressBanner: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        padding: '5px 10px',
        backgroundColor: '#355E3B',
        color: 'white',
        borderRadius: '5px',
        fontSize: '12px',
        fontWeight: '500'
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    },
    modalContent: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '400px',
        width: '90%',
        textAlign: 'center'
    },
    modalTitle: {
        fontSize: '20px',
        marginBottom: '15px',
        color: '#333'
    },
    modalText: {
        marginBottom: '20px',
        color: '#666'
    },
    modalButton: {
        padding: '8px 20px',
        backgroundColor: '#355E3B',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.2s',
        ':hover': {
            backgroundColor: '#2a4a2f'
        }
    }
};