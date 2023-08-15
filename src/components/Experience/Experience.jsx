import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Button from '../UI/Button';
import ExperienceItem from './ExperienceItem';

const newExperienceObj = {
  company: '',
  position: '',
  startDate: '',
  endDate: '',
  location: '',
  description: '',
};

const Experience = (props) => {
  const {
    experienceArr,
    addExperienceItem,
    updateExperienceItem,
    removeExperienceItem,
  } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [newExperience, setNewExperience] = useState(newExperienceObj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience((prev) => {
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
      company: newExperience.company,
      position: newExperience.position,
      startDate: newExperience.startDate,
      endDate: newExperience.endDate,
      location: newExperience.location,
      description: newExperience.description,
    };
    addExperienceItem(newItem);
    setNewExperience(newExperienceObj);
    setIsEditing(false);
  };

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          name="company"
          value={newExperience.company}
          onChange={handleChange}
          placeholder="e.g. Google"
          required
        />
      </div>
      <div>
        <label htmlFor="position">Position</label>
        <input
          id="position"
          type="text"
          name="position"
          value={newExperience.position}
          onChange={handleChange}
          placeholder="e.g Web Developer"
          required
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          type="text"
          name="startDate"
          value={newExperience.startDate}
          onChange={handleChange}
          placeholder="e.g. Dec, 2018"
          required
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date</label>
        <input
          id="endDate"
          type="text"
          name="endDate"
          value={newExperience.endDate}
          onChange={handleChange}
          placeholder="e.g. Jan, 2020"
          required
        />
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          name="location"
          value={newExperience.location}
          onChange={handleChange}
          placeholder="e.g. Remote"
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="4"
          value={newExperience.description}
          onChange={handleChange}
          placeholder="lorem ipsum lorem ipsum"
          required
        ></textarea>
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
      {experienceArr.map((item) => (
        <ExperienceItem
          key={item.id}
          item={item}
          updateExperienceItem={updateExperienceItem}
          removeExperienceItem={removeExperienceItem}
        />
      ))}
      <Button onClick={() => setIsEditing(true)}>Add Experience</Button>
    </ul>
  );

  return (
    <article className="componentSection innerPadding">
      <h2 className="mb-3">Experience</h2>
      {isEditing ? editingTemplate : viewTemplate}
    </article>
  );
};

export default Experience;
