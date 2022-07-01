import react from 'react';
import './home.css';
import {Nav} from 'react-bootstrap'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ParallaxImg from '../ParallaxImg/parallaximg';
import Projects from '../Projects/projects';
import SkillsAboutMe from '../Skills & About Me/skillsaboutme';
import Contact from '../Contact/contact';
import Services from '../Services/services';
import Resume from '../../Bailey_Mashore_Resume.PDF'


const Home = () => {
    
    return (
      <ParallaxProvider>
        <Parallax speed={-150}>
          <ParallaxImg imgsrc='https://images.weserv.nl/?url=webdevbaileym.com/static/media/must4.1a764c1244b39e516cc7.jpg'>
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
          <Services />
          <SkillsAboutMe />
         <Projects />
          <Contact />
        </Parallax>
      </ParallaxProvider>
    );
}

export default Home;


