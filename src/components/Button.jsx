import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', className, onClick, ...props }) => {
  return (
    <button
      className={clsx(styles.btn, styles[variant], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
