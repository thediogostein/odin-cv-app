import React, { useState } from 'react';
import Header from './components/Header/Header';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
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

  const [educationArr, setEducationArr] = useState([]);

  const [experienceArr, setExperienceArr] = useState([
    {
      id: 0,
      title: 'Web Developer',
      company: 'Google',
      location: 'Remote',
      startDate: '',
      endDate: '',
      description: 'lorem ipsum lorem ipsum',
    },
  ]);

  const savePersonalDetails = (details) => {
    setPersonalDetails(details);
  };

  const saveContactInfo = (info) => {
    setContactInfo(info);
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
              setEducationArr={setEducationArr}
            />
            <Experience />
            <Skills />
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
