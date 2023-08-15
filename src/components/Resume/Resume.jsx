import React from 'react';
import styles from './Resume.module.css';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
import ResumeSkills from './ResumeSkills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const Resume = ({
  firstName,
  lastName,
  professionalTitle,
  email,
  tel,
  summary,
  location,
  website,
  educationArr,
  experienceArr,
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
          <p className="mb-2">
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            {email}
          </p>
          <p className="mb-2">
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            {tel}
          </p>
          <p className="mb-2">
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>{' '}
            {location}
          </p>
        </address>
        <p className="mb-2">{website}</p>
        <p className="mb-2">{summary}</p>
      </header>
      <section className={`${styles.resumeBody} innerPadding`}>
        <section className="mb-6">
          <h2 className="mb-4">Education</h2>
          <div className={styles.resumeBodyRow}>
            {educationArr.map((item) => (
              <ResumeEducation
                key={item.id}
                degree={item.degree}
                school={item.school}
                location={item.location}
                startDate={item.startDate}
                endDate={item.endDate}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4">Work Experience</h2>
          {experienceArr.map((item) => (
            <ResumeExperience key={item.id} item={item} />
          ))}
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
