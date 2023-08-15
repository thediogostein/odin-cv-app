import React, { useState } from 'react';
import Button from '../UI/Button';

const ContactInfo = ({ saveContactInfo }) => {
  const [contact, setContact] = useState({
    email: '',
    tel: '',
    location: '',
    website: '',
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveContactInfo(contact);
    setIsEditing(false);
  };

  const viewTemplate = (
    <section className={'componentSection innerPadding'}>
      <h2 className="mb-3">Contact Info</h2>

      <p className="fw-700 mb-1">Email:</p>
      <p className="mb-2">{contact.email}</p>
      <p className="fw-700 mb-1">Phone Number:</p>
      <p className="mb-2">{contact.tel}</p>
      <p className="fw-700 mb-1">Location:</p>
      <p className="mb-2">{contact.location}</p>
      <p className="fw-700 mb-1">Website</p>
      <p className="mb-2">{contact.website}</p>
      <Button onClick={() => setIsEditing(true)}>Edit</Button>
    </section>
  );

  const editingTemplate = (
    <form onSubmit={handleSubmit} className="componentSection innerPadding">
      <h2 className="mb-3">Contact Info</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          required
          id="email"
          type="email"
          placeholder="e.g. myemail@domain.com"
          name="email"
          value={contact.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="tel">Phone Number:</label>
        <input
          required
          id="tel"
          type="text"
          placeholder="e.g. +55 54 999704445"
          name="tel"
          value={contact.tel}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          required
          id="location"
          type="text"
          placeholder="e.g. City - Country"
          name="location"
          value={contact.location}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="website">Website:</label>
        <input
          required
          id="website"
          type="text"
          placeholder="e.g. www.mywebsite.com"
          name="website"
          value={contact.website}
          onChange={handleChange}
        />
      </div>
      <Button>Save</Button>
    </form>
  );

  return <>{isEditing ? editingTemplate : viewTemplate}</>;
};

export default ContactInfo;
