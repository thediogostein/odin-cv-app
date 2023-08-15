import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Button from '../UI/Button';
import EducationItem from './EducationItem';

const newEducationObj = {
  school: '',
  degree: '',
  startDate: '',
  endDate: '',
  location: '',
};

const Education = (props) => {
  const {
    educationArr,
    updateEducationItem,
    removeEducationItem,
    addEducationItem,
  } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [newEducation, setNewEducation] = useState(newEducationObj);

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
    const newItem = {
      id: nanoid(),
      school: newEducation.school,
      degree: newEducation.degree,
      startDate: newEducation.startDate,
      endDate: newEducation.endDate,
      location: newEducation.location,
    };
    addEducationItem(newItem);
    setNewEducation(newEducationObj);
    setIsEditing(false);
  };

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="degree">Degree</label>
        <input
          id="degree"
          type="text"
          name="degree"
          placeholder="Computer Science"
          value={newEducation.degree}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="school">School</label>
        <input
          id="school"
          type="text"
          name="school"
          placeholder="Harvard"
          value={newEducation.school}
          onChange={handleChange}
          required
        />
      </div>
      <div className="d-flex">
        <div className="col">
          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            type="text"
            name="startDate"
            value={newEducation.startDate}
            onChange={handleChange}
            placeholder="e.g. Jan, 2014"
            required
          />
        </div>
        <div className="col">
          <label htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            type="text"
            name="endDate"
            value={newEducation.endDate}
            onChange={handleChange}
            placeholder="present"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          name="location"
          placeholder="e.g. New York City"
          value={newEducation.location}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <button
          className="mediumBtn cancelBtn"
          type="button"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
        <button className="mediumBtn saveBtn" type="submit">
          Save
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <ul>
      {educationArr.map((item) => (
        <EducationItem
          key={item.id}
          item={item}
          updateEducationItem={updateEducationItem}
          removeEducationItem={removeEducationItem}
        />
      ))}
      <Button onClick={() => setIsEditing(true)}>Add Education</Button>
    </ul>
  );

  return (
    <article className="componentSection innerPadding">
      <h2 className="mb-3">Education</h2>
      {isEditing ? editingTemplate : viewTemplate}
    </article>
  );
};

export default Education;
