// src/components/TechBubble.jsx
import React from 'react';
import styles from './TechBubble.module.css';

const TechBubble = ({ logoSrc, altText, bgColor }) => {
  return (
    // The outer div creates the background circle
    <div 
      className={styles.bubbleContainer} 
      style={{ backgroundColor: bgColor }}
      title={altText} // Use title for hover tooltip
    >
      {/* The inner image holds the logo */}
      <img 
        src={logoSrc} 
        alt={altText} 
        className={styles.logoImage} 
      />
    </div>
  );
};

export default TechBubble;