import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import { techstack, tools } from './assests/data';
import Activities from './components/activities';
import Contact from './components/contact';
import Projects from './components/projects';

function App() {
  return (
    <Box maxW={'100vw'}
    // p={5}
    className="App">
      <Navbar/>
      <Box bg={'gray.100'}>
        <section id="home"><Home /></section>
        <section id="about" className="about section"><About /></section>
        <section id="skills" ><Skills techstack={techstack} heading={"Skills"}/>
        <Skills techstack={tools} heading={"Tools"}/>
        </section>
        <section id="projects"><Projects /></section>
        <section id='activities'><Activities/></section>
        <section id="contact"><Contact /></section>
      </Box>
    </Box>
  );
}

export default App;
