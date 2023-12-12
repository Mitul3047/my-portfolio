
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import ContactUs from './components/Contact/ContactUs';
import Education from './components/Education/Education';
import Skill from './components/Skill/Skill';
import Projects from './components/Projects/Projects';


const App = () => {
  return (
    <div className=''>
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
