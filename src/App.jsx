import React, { useState } from 'react';
import Header from './components/Header/Header';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Resume from './components/Resume/Resume';

import './global.css';

const MOCK_DATA = [
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

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: 'First Name',
    lastName: 'Last Name',
    professionalTitle: 'Professional Title',
  });

  const [contactInfo, setContactInfo] = useState({
    email: 'youremail@domain.com',
    tel: '+55 54 99970 1234',
    location: 'City - Country',
    website: 'www.yourwebsite.dev',
  });

  const [educationArr, setEducationArr] = useState([
    {
      id: 0,
      school: 'MIT',
      degree: 'Computer Science',
      location: 'USA',
      startDate: '2012',
      endDate: '2016',
    },
    {
      id: 1,
      school: 'Harvard',
      degree: 'Computer Science',
      location: 'USA',
      startDate: '2019',
      endDate: 'present',
    },
  ]);

  const [experienceArr, setExperienceArr] = useState([
    {
      id: 0,
      position: 'Web Developer',
      company: 'Google',
      location: 'Remote',
      startDate: 'start',
      endDate: 'end',
      description: 'lorem ipsum lorem ipsum',
    },
    {
      id: 1,
      position: 'Full Stack Developer',
      company: 'Google',
      location: 'Remote',
      startDate: 'start',
      endDate: 'end',
      description: 'lorem ipsum lorem ipsum',
    },
    {
      id: 2,
      position: 'UI Designer',
      company: 'Google',
      location: 'Remote',
      startDate: 'start',
      endDate: 'end',
      description: 'lorem ipsum lorem ipsum',
    },
  ]);

  const savePersonalDetails = (details) => {
    setPersonalDetails(details);
  };

  const saveContactInfo = (info) => {
    setContactInfo(info);
  };

  // Education
  const addEducationItem = (newItem) => {
    console.log(newItem);
    setEducationArr((prev) => [...prev, newItem]);
  };

  const removeEducationItem = (id) => {
    const remainingEducationItems = educationArr.filter(
      (item) => item.id !== id
    );
    setEducationArr(remainingEducationItems);
  };

  const updateEducationItem = (id, updatedItem) => {
    const updatedEducationList = educationArr.map((item) =>
      item.id === id ? updatedItem : item
    );
    setEducationArr(updatedEducationList);
  };

  // Experience
  const addExperienceItem = (newItem) => {
    setExperienceArr((prev) => [...prev, newItem]);
  };

  const updateExperienceItem = (id, updatedItem) => {
    const updatedExperienceList = experienceArr.map((item) =>
      item.id === id ? updatedItem : item
    );

    setExperienceArr(updatedExperienceList);
  };

  const removeExperienceItem = (id) => {
    console.log('removed', id);
    const remainingExperienceList = experienceArr.filter(
      (item) => item.id !== id
    );
    setExperienceArr(remainingExperienceList);
  };

  return (
    <>
      <Header />
      <main className="wrapper">
        <div className="main-wrapper">
          <div className="col-left">
            <PersonalDetails savePersonalDetails={savePersonalDetails} />
            <ContactInfo saveContactInfo={saveContactInfo} />
            <Education
              educationArr={educationArr}
              addEducationItem={addEducationItem}
              updateEducationItem={updateEducationItem}
              removeEducationItem={removeEducationItem}
            />
            <Experience
              experienceArr={experienceArr}
              addExperienceItem={addExperienceItem}
              updateExperienceItem={updateExperienceItem}
              removeExperienceItem={removeExperienceItem}
            />
          </div>
          <div className="col-right">
            <Resume
              firstName={personalDetails.firstName}
              lastName={personalDetails.lastName}
              professionalTitle={personalDetails.professionalTitle}
              email={contactInfo.email}
              tel={contactInfo.tel}
              summary={personalDetails.summary}
              location={contactInfo.location}
              website={contactInfo.website}
              educationArr={educationArr}
              experienceArr={experienceArr}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
