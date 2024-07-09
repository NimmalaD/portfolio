import { useRef, useState } from "react";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  const homeRef = useRef(null);
  // const skillsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  const toggleTabs = (section) => {
    setActiveSection(section);
    if (section === 'home' && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'aboutme' && aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    // } else if (section === 'skills' && skillsRef.current) {
    //   skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <NavBar toggleTabs={toggleTabs} />
      <div className="content">
        <div ref={homeRef}>
          {activeSection === 'home' && <Home />}
        </div>
        {/* <div ref={skillsRef}>
          {activeSection === 'skills' && <Skills />}
        </div> */}
        <div ref={aboutMeRef}>
          {activeSection === 'aboutme' && <AboutMe />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;