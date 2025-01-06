// src/components/navbarStyles.js
export const NavBarStyles = {
  nav: {
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  width: '100%',
  backgroundColor: 'white',
  zIndex: 1000,
  boxSizing: 'border-box',
  },
  title: {
  fontWeight: 'bold'
  },
  linkContainer: {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, auto)',
  gap: '2rem',
  marginRight: '2rem'
  },
  link: {
  textDecoration: 'none',
  color: 'black'
  }
  };