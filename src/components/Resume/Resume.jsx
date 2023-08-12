import React from 'react';
import styles from './Resume.module.css';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
import ResumeSkills from './ResumeSkills';

const Resume = () => {
  return (
    <article className={styles.resume}>
      <header className={`${styles.resumeHeader} innerPadding `}>
        <h2 className={`${styles.fullName} mb-2`}>Full Name</h2>
        <p className={`${styles.professionalTitle} mb-4`}>Professional Title</p>
        <address>
          <p className={`${styles.email} mb-2`}>email@domain.com</p>
          <p className={`${styles.tel} mb-2`}>+55 54 99970-4445</p>
          <p className={`${styles.location} mb-2`}>Não-Me-Toque, Brazil</p>
        </address>
        <p className={`${styles.bio} mb-2`}>
          e.g. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
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

export default Resume;
