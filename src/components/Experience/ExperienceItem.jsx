import React, { useState } from 'react';

const ExperienceItem = ({
  item,
  updateExperienceItem,
  removeExperienceItem,
}) => {
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

    updateExperienceItem(item.id, updatedItem);
    setIsEditing(false);
  };

  const viewTemplate = (
    <li className="mb-3">
      <p className="fw-700">{updatedItem.position}</p>
      <p>
        {updatedItem.company} - {updatedItem.location}
      </p>

      <p>
        {updatedItem.startDate}/ - {updatedItem.endDate}/
      </p>

      <p className="mb-2">{updatedItem.description}</p>
      <div>
        <button
          className="smallBtn removeBtn"
          onClick={() => removeExperienceItem(item.id)}
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
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          name="company"
          value={updatedItem.company}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="position">Position</label>
        <input
          id="position"
          type="text"
          name="position"
          value={updatedItem.position}
          onChange={handleChange}
          required
        />
      </div>
      <div>
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
      <div>
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
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="4"
          value={updatedItem.description}
          onChange={handleChange}
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

  return <>{isEditing ? editingTemplate : viewTemplate}</>;
};

export default ExperienceItem;
