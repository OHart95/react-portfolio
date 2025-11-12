// src/components/Button/Button.jsx

import React from 'react';
import styles from './PrimaryButton.module.css';
import clsx from 'clsx'; // Useful for combining classes

const Button = ({ children, variant = 'primary', ...props }) => {
  // Combine the base style with the specific variant style
  const buttonClasses = clsx(styles.base, styles[variant]);

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;