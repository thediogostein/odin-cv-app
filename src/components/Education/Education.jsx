import React, { useState } from 'react';
import EducationItem from './EducationItem';
import Button from '../UI/Button';
import { nanoid } from 'nanoid';

import styles from './Education.module.css';

const educationFake = [
  {
    id: 1,
    school: 'UPF',
    degree: 'Ciência da Computação',
    startDate: '15/12/2018',
    endDate: '15/12/2018',
    location: 'Passo Fundo',
  },
  {
    id: 2,
    school: 'UFRGS',
    degree: 'Ciência da Computação',
    startDate: '15/12/2018',
    endDate: '15/12/2018',
    location: 'Passo Fundo',
  },
  {
    id: 3,
    school: 'MIT',
    degree: 'Ciência da Computação',
    startDate: '15/12/2018',
    endDate: '15/12/2018',
    location: 'Passo Fundo',
  },
];

const educationObj = {
  school: '',
  degree: '',
  startDate: '',
  endDate: '',
  location: '',
};

const Education = () => {
  const [education, setEducation] = useState(educationObj);
  const [educationArr, setEducationArr] = useState(educationFake);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEducation((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEducationItem = {
      ...education,
      id: nanoid(),
    };

    setEducationArr((prev) => [...prev, newEducationItem]);
    setEducation(educationObj);
    setIsEditing(false);
  };

  const removeItem = (id) => {
    const remainingItems = educationArr.filter((item) => item.id !== id);
    setEducationArr(remainingItems);
  };

  const editItem = (id, updatedItem) => {
    console.log('item to be edited is ', id);
    console.log(updatedItem);

    const updatedEducationList = educationArr.map((item) =>
      item.id === id ? updatedItem : item
    );

    console.log(updatedEducationList);

    setEducationArr(updatedEducationList);
  };

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="school">School</label>
        <input
          id="school"
          type="text"
          name="school"
          onChange={handleChange}
          value={education.school}
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
          value={education.degree}
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
          value={education.startDate}
        />
        <label htmlFor="endDate">End Date</label>
        <input
          id="endDate"
          type="date"
          name="endDate"
          onChange={handleChange}
          value={education.endDate}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          onChange={handleChange}
          value={education.location}
        />
      </div>
      <div className={styles.btns}>
        <div>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );

  const viewTemplate = (
    <>
      <ul>
        {educationArr.map((item) => (
          <EducationItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            education={education}
            setEducation={setEducation}
            editItem={editItem}
          />
        ))}
      </ul>
      <Button onClick={() => setIsEditing(true)}>Add education</Button>
    </>
  );

  return (
    <article className="componentSection innerPadding">
      <h2 className="mb-3">Education</h2>

      {isEditing ? editingTemplate : viewTemplate}
    </article>
  );
};

export default Education;
