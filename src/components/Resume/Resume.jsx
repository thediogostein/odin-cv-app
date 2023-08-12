import React from 'react';
import styles from './Resume.module.css';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
import ResumeSkills from './ResumeSkills';

const Resume = ({
  firstName,
  lastName,
  professionalTitle,
  email,
  tel,
  summary,
  location,
}) => {
  return (
    <article className={styles.resume}>
      <header className={`${styles.resumeHeader} innerPadding `}>
        <h2 className={`${styles.fullName} mb-2`}>
          {firstName} {lastName}
        </h2>
        <p className={`${styles.professionalTitle} mb-4`}>
          {professionalTitle}
        </p>
        <address>
          <p className={`${styles.email} mb-2`}>{email}</p>
          <p className={`${styles.tel} mb-2`}>{tel}</p>
          <p className={`${styles.location} mb-2`}>{location}</p>
        </address>
        <p className={`${styles.bio} mb-2`}>{summary}</p>
      </header>
      <section className={`${styles.resumeBody} innerPadding`}>
        <section className="mb-6">
          <h2 className="mb-4">Education</h2>
          <div className={styles.resumeBodyRow}>
            <ResumeEducation />
            <ResumeEducation />
          </div>
        </section>

        <section>
          <h2 className="mb-4">Work Experience</h2>
          <ResumeExperience />
          <ResumeExperience />
        </section>

        <section>
          <h2 className="mb-4">Skills</h2>
          <ResumeSkills />
        </section>
      </section>
    </article>
  );
};

Resume.defaultProps = {
  tel: '+55 54 99999-1234',
  location: 'Town, Country',
  summary: `e.g. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
};

export default Resume;
