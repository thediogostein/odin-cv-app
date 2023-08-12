import React from 'react';
import styles from './ResumeExperience.module.css';

const ResumeExperience = () => {
  return (
    <section className={`mb-3`}>
      <p className={`${styles.title} mb-1`}>Web Developer</p>
      <p className="mb-1">Company Name</p>
      <p className="mb-1">New York City, US</p>
      <p className={`${styles.date} mb-1`}>08/2020 - present</p>

      <p className="mb-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
    </section>
  );
};

export default ResumeExperience;
