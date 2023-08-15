import React from 'react';
import styles from './ResumeExperience.module.css';

const ResumeExperience = ({ item }) => {
  return (
    <section className={`mb-3`}>
      <p className="fw-700 mb-1">{item.position}</p>
      <p className="mb-1">{item.company}</p>
      <p className="mb-1">{item.location}</p>
      <p className={`${styles.date} mb-1`}>
        {item.startDate} {item.endDate}
      </p>

      <p className="mb-1">{item.description}</p>
    </section>
  );
};

export default ResumeExperience;
