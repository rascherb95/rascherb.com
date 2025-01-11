// src/components/NavBar.js
import React from 'react';
import { NavBarStyles } from './NavHeaderStyles';


const NavBar = () => {
return (
<nav style={NavBarStyles.nav}>
<span style={NavBarStyles.title}>My website</span>
<div style={NavBarStyles.linkContainer}>
<a href="#home" style={NavBarStyles.link}>HOME</a>
<a href="#projects" style={NavBarStyles.link}>PROJECTS</a>
<a href="#contact" style={NavBarStyles.link}>CONTACT</a>
</div>
</nav>
 );
};
export default NavBar;