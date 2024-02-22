import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import { techstack } from './assests/data';

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
        <Skills techstack={techstack} heading={"Tools"}/>
        </section>
        {/* <section id="projects"><Projects /></section> */}
        {/* <section id="contact"><Contact /></section> */}
      </Box>
    </Box>
  );
}

export default App;
