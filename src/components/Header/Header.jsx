import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <h1>CV Builder</h1>
        <small>Built by Diogo Stein</small>
      </div>
    </header>
  );
};

export default Header;
