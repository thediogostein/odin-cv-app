import React from 'react';
import Button from '../UI/Button';
import styles from './PersonalDetails.module.css';

const PersonalDetails = () => {
  return (
    <form className={`{styles.personalDetails} componentSection innerPadding`}>
      <h2 className="mb-3">Personal Details</h2>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" placeholder="e.g. John" />
      </div>
      <div>
        <label htmlFor="firstName">Last Name:</label>
        <input type="text" placeholder="e.g. Smith" />
      </div>
      <div>
        <label htmlFor="firstName">Professional Title:</label>
        <input type="text" placeholder="Data Scientist" />
      </div>
      <div>
        <label htmlFor="">Summary of yourself:</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="e.g. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ></textarea>
      </div>
      <Button>Save</Button>
    </form>
  );
};

export default PersonalDetails;
