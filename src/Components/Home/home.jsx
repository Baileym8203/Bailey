import react from 'react';
import './home.css';
import {Nav} from 'react-bootstrap'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ParallaxImg from '../ParallaxImg/parallaximg';
import Projects from '../Projects/projects';
import SkillsAboutMe from '../Skills & About Me/skillsaboutme';
import Contact from '../Contact/contact';
import Services from '../Services/services';
import Resume from '../../resume.PDF'

import Mustafar from '../../Images/must4.jpg'


const Home = () => {
    
    return (
      <ParallaxProvider>
        <Parallax speed={-150}>
          <ParallaxImg imgsrc={Mustafar}>
            <h1 className="h1 --intro-heading text-center">
              Hello Everyone<br></br>My Name Is Bailey Mashore<br></br>I Am A
              Web Developer
            </h1>
            <h1></h1>
            <Nav.Link className="nav --intro-cv" href={Resume} target="_blank">See Resume</Nav.Link>
            <h1 style={{ position: "absolute" }}></h1>
          </ParallaxImg>
        </Parallax>
        <Parallax speed={3} style={{ backgroundColor: "white" }}>
          <Projects />
          <Services />
          <SkillsAboutMe />
          <Contact />
        </Parallax>
      </ParallaxProvider>
    );
}

export default Home;


