import React from 'react';
import styles from './ResumeEducation.module.css';

const ResumeEducation = () => {
  return (
    <section className={`mb-4`}>
      <p className={`${styles.title} mb-1`}>Bachelors in Economics</p>
      <p className={` mb-1`}>London City University</p>
      <p className="mb-1">London, UK</p>
      <p className={`${styles.date} mb-1`}>08/2020 - present</p>
    </section>
  );
};

export default ResumeEducation;
