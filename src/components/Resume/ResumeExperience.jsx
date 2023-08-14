import React from 'react';
import styles from './ResumeExperience.module.css';

const ResumeExperience = ({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
}) => {
  return (
    <section className={`mb-3`}>
      <p className={`${styles.title} mb-1`}>{title}</p>
      <p className="mb-1">{company}</p>
      <p className="mb-1">{location}</p>
      <p className={`${styles.date} mb-1`}>
        {startDate} - {endDate}
      </p>

      <p className="mb-1">{description}</p>
    </section>
  );
};

export default ResumeExperience;
