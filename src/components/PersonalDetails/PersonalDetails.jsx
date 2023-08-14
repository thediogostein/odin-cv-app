import React, { useState } from 'react';
import Button from '../UI/Button';
import styles from './PersonalDetails.module.css';

const PersonalDetails = ({ savePersonalDetails }) => {
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    professionalTitle: '',
    summary: '',
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    savePersonalDetails(details);
    setIsEditing(false);
  };

  const viewTemplate = (
    <section className={'componentSection innerPadding'}>
      <h2 className="mb-3">Personal Details</h2>

      <p className={`${styles.viewTemplateTitle} mb-1`}>First Name:</p>

      <p className="mb-2">{details.firstName}</p>
      <p className={`${styles.viewTemplateTitle} mb-1`}>Last Name:</p>
      <p className="mb-2">{details.lastName}</p>
      <p className={`${styles.viewTemplateTitle} mb-1`}>Professional Title</p>
      <p className="mb-2">{details.professionalTitle}</p>
      <p className={`${styles.viewTemplateTitle} mb-1`}>Summary</p>
      <p className="mb-2">{details.summary}</p>
      <Button onClick={() => setIsEditing(true)}>Edit</Button>
    </section>
  );

  const editingTemplate = (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`{styles.personalDetails} componentSection innerPadding`}
    >
      <h2 className="mb-3">Personal Details</h2>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          required
          type="text"
          placeholder="e.g. John"
          name="firstName"
          value={details.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          required
          type="text"
          placeholder="e.g. Smith"
          name="lastName"
          value={details.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="title">Professional Title:</label>
        <input
          id="title"
          required
          type="text"
          placeholder="Data Scientist"
          name="professionalTitle"
          value={details.professionalTitle}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="summary">Summary of yourself:</label>
        <textarea
          name="summary"
          id="summary"
          required
          cols="30"
          rows="5"
          placeholder="e.g. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          value={details.summary}
          onChange={handleChange}
        ></textarea>
      </div>
      <Button type="submit">Save</Button>
    </form>
  );

  return <>{isEditing ? editingTemplate : viewTemplate}</>;
};

export default PersonalDetails;
