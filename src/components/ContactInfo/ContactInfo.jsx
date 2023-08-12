import React from 'react';
import Button from '../UI/Button';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <form className={`${styles.contactInfo} componentSection innerPadding`}>
      <h2 className="mb-3">Contact Info</h2>
      <div>
        <label htmlFor="firstName">Email:</label>
        <input type="email" placeholder="e.g. myemail@domain.com" />
      </div>
      <div>
        <label htmlFor="firstName">Phone Number:</label>
        <input type="text" placeholder="e.g. +55 54 999704445" />
      </div>
      <div>
        <label htmlFor="firstName">Location:</label>
        <input type="text" placeholder="e.g. City - Country" />
      </div>
      <div>
        <label htmlFor="firstName">Website:</label>
        <input type="text" placeholder="e.g. www.mywebsite.com" />
      </div>
      <Button>Save</Button>
    </form>
  );
};

export default ContactInfo;
