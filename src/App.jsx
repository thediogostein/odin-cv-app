import React, { useState } from 'react';
import Header from './components/Header/Header';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';

import './global.css';

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
            <Education />
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
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
