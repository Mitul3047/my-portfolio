
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import ContactUs from './components/Contact/ContactUs';

import Skill from './components/Skill/Skill';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';



const App = () => {
  return (
    <div className='bg-black'>
      <BrowserRouter>
        <NavBar></NavBar>
        <Home></Home>
        <AboutMe></AboutMe>
        <Education></Education>
        <Skill></Skill>
        <Projects></Projects>
        <ContactUs></ContactUs>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
