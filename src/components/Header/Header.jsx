import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <h1>CV Builder</h1>
        <p className="mb-2">
          Built by Diogo Stein{' '}
          <a
            className={styles.link}
            href="https://github.com/thediogostein/odin-cv-app"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
