import React, { useState } from 'react';

const ExperienceItem = ({ item, updateEducationItem, removeEducationItem }) => {
  const [updatedItem, setUpdatedItem] = useState({ ...item });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // updateExperienceItem(item.id, updatedItem);
    updateEducationItem(item.id, updatedItem);
    setIsEditing(false);
  };

  const viewTemplate = (
    <li className="mb-3">
      <p className="fw-700">{updatedItem.degree}</p>
      <p>
        {updatedItem.school} - {updatedItem.location}
      </p>

      <p>
        {updatedItem.startDate} - {updatedItem.endDate}
      </p>

      <div>
        <button
          className="smallBtn removeBtn"
          onClick={() => removeEducationItem(item.id)}
        >
          remove
        </button>
        <button className="smallBtn editBtn" onClick={() => setIsEditing(true)}>
          edit
        </button>
      </div>
    </li>
  );

  const editingTemplate = (
    <form onSubmit={handleSubmit} className="mb-5">
      <div>
        <label htmlFor="degree">Degree</label>
        <input
          id="degree"
          type="text"
          name="degree"
          value={updatedItem.degree}
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
          value={updatedItem.school}
          onChange={handleChange}
          required
        />
      </div>
      <div className="d-flex ">
        <div className="col">
          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            type="text"
            name="startDate"
            value={updatedItem.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col">
          <label htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            type="text"
            name="endDate"
            value={updatedItem.endDate}
            onChange={handleChange}
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
          value={updatedItem.location}
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

  return <>{isEditing ? editingTemplate : viewTemplate}</>;
};

export default ExperienceItem;
