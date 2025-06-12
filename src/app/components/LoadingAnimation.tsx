"use client";
import React from 'react';
import styles from './LoadingAnimation.module.css';

const LoadingAnimation: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}>
        <div className={styles.spinnerCircle}></div>
        <div className={styles.spinnerCircle}></div>
        <div className={styles.spinnerCircle}></div>
        <div className={styles.spinnerCircle}></div>
      </div>
    </div>
  );
};

export default LoadingAnimation; 