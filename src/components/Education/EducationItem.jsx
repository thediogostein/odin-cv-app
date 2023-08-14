import React, { useState } from 'react';
import Button from '../UI/Button';

import styles from './EducationItem.module.css';

const EducationItem = ({ item, editItem, removeItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newEducation, setNewEducation] = useState({
    id: item.id,
    school: item.school,
    degree: item.degree,
    startDate: '',
    endDate: '',
    location: item.location,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewEducation((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editItem(item.id, newEducation);
    setIsEditing(false);
  };

  const editingTemplate = (
    <form onSubmit={handleSubmit} className=" mb-5">
      <div>
        <label htmlFor="school">School</label>
        <input
          id="school"
          type="text"
          name="school"
          onChange={handleChange}
          value={newEducation.school}
          placeholder="Enter school / university"
        />
      </div>
      <div>
        <label htmlFor="degree">Degree</label>
        <input
          id="degree"
          type="text"
          name="degree"
          onChange={handleChange}
          value={newEducation.degree}
          placeholder="Enter degree / field of study"
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          type="date"
          name="startDate"
          onChange={handleChange}
          value={newEducation.startDate}
        />
        <label htmlFor="endDate">End Date</label>
        <input
          id="endDate"
          type="date"
          name="endDate"
          onChange={handleChange}
          value={newEducation.endDate}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          onChange={handleChange}
          value={newEducation.location}
          className="mb-4"
        />
      </div>
      <div className={`${styles.editingTemplateBtns}`}>
        <div>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className={`${styles.cancelBtn} mediumBtn cancelBtn`}
          >
            Cancel
          </button>
          <button type="submit" className={`mediumBtn saveBtn`}>
            Save
          </button>
        </div>
      </div>
    </form>
  );

  const viewTemplate = (
    <li className=" mb-3">
      <p className={`${styles.viewTemplateTitle} mb-1`}>
        {item.degree} - {item.school}
      </p>
      <p className={`${styles.date} mb-1`}>
        {item.startDate} - {item.endDate}
      </p>
      <p>{item.location}</p>
      <div className={styles.viewTemplateBtns}>
        <button
          className="smallBtn removeBtn"
          onClick={() => removeItem(item.id)}
        >
          remove
        </button>
        <button className="smallBtn editBtn" onClick={() => setIsEditing(true)}>
          edit
        </button>
      </div>
    </li>
  );
  return <>{isEditing ? editingTemplate : viewTemplate}</>;
};

export default EducationItem;
