import Header from './components/Header/Header';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';

import './global.css';

function App() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <div className="main-wrapper">
          <div className="col-left">
            <PersonalDetails />
            <ContactInfo />
            <Education />
            <Experience />
            <Skills />
          </div>
          <div className="col-right">
            <Resume />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
