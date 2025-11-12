// src/components/SidebarNav/SidebarNav.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './SidebarNav.module.css';
import { LuHouse, LuUser, LuCodeXml, LuContactRound } from "react-icons/lu";

// Define the sections and their icon (use react-icons in a real app)
const sections = [
  { id: 'hero', icon: <LuHouse className={styles.navItem}/>, label: 'Home' },
  { id: 'about', icon: <LuUser className={styles.navItem}/>, label: 'About' },
  { id: 'projects', icon: <LuCodeXml className={styles.navItem}/>, label: 'Projects' },
  { id: 'contact', icon: <LuContactRound className={styles.navItem}/>, label: 'Contact' },
];

const SidebarNav = ({ activeSection }) => { 
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={styles.sidebarNav}>
        {sections.map(section => (
          <a 
            key={section.id} 
            href={`#${section.id}`} 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(section.id);
            }}
            // Apply the active class based on the current section
            className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
            aria-label={section.label}
          >
            <span className="nav-icon">{section.icon}</span>
          </a>
        ))}
      </nav>
    </>
  );
};

export default SidebarNav;