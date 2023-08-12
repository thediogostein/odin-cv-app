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
    email: 'email@domain.com',
  });

  const savePersonalDetails = (details) => {
    setPersonalDetails(details);
    console.log(details);
  };

  return (
    <>
      <Header />
      <main className="wrapper">
        <div className="main-wrapper">
          <div className="col-left">
            <PersonalDetails savePersonalDetails={savePersonalDetails} />
            <ContactInfo />
            <Education />
            <Experience />
            <Skills />
          </div>
          <div className="col-right">
            <Resume
              firstName={personalDetails.firstName}
              lastName={personalDetails.lastName}
              professionalTitle={personalDetails.professionalTitle}
              // email={personalDetails.email}
              // tel={personalDetails.tel}
              summary={personalDetails.summary}
              // location={personalDetails.location}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
