import react from 'react';
import { Nav } from 'react-bootstrap'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ParallaxImg from '../ParallaxImg/parallaximg';

// imports

import './home.css';

// imported CSS

import Projects from '../Projects/projects';
import SkillsAboutMe from '../Skills & About Me/skillsaboutme';
import Contact from '../Contact/contact';
import Services from '../Services/services';
import Resume from '../../Bailey_Mashore_Resume.PDF'

// other imported files


const Home = () => {
    
    return (
      <ParallaxProvider>
        <Parallax speed={-150}>
          <ParallaxImg imgsrc='https://images.weserv.nl/?url=webdevbaileym.com/static/media/must4.1a764c1244b39e516cc7.jpg'>
            <h1 className="h1 text-center --Intro-Heading">
              Hello Everyone<br></br>My Name Is Bailey Mashore<br></br>I Am A
              Web Developer
            </h1>
            <Nav.Link className="Nav --Intro-Cv" href={Resume} target="_blank">See Resume</Nav.Link>
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


