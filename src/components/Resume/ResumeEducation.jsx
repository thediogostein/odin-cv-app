import React from 'react';
import styles from './ResumeEducation.module.css';

const ResumeEducation = ({ degree, school, location, startDate, endDate }) => {
  return (
    <section className={`mb-4`}>
      <p className={`${styles.title} mb-1`}>{degree}</p>
      <p className={` mb-1`}>{school}</p>
      <p className="mb-1">{location}</p>
      <p className={`${styles.date} mb-1`}>
        {startDate} - {endDate}
      </p>
    </section>
  );
};

export default ResumeEducation;
