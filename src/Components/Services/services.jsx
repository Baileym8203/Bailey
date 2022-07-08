import react from 'react';
import {Container, Col, Row, Image, Accordion, ProgressBar} from 'react-bootstrap';

// imports

import './services.css'

// import CSS

import CodeLogo from '../../Images/codeLogo.png'
import Brush from '../../Images/brush.png'

// other imports

const Services = () => {

return (
  <Container
    className='Container --Skills'
  id="skills"
    fluid
  >
    <Row className='Row --My-Skills'>
      <h1
        className="h1 text-center --My-Skills-Heading"
      >
        My Skills
      </h1>
      <h4 className="h4 text-center --My-Skills-Sub-Heading">
        ------ <span style={{ color: "rgb(175, 77, 20)" }}>Experience</span>{" "}
        ------
      </h4>
      <Col className='Col --My-Skills-Progress' lg={12}>
  <ProgressBar className='ProgressBar mt-2 --My-Skills-Progress-Bars' variant="danger" now={90} label="HTML" />
  <ProgressBar className='ProgressBar mt-2 --My-Skills-Progress-Bars' variant="success" now={75} label="CSS" />
  <ProgressBar className='ProgressBar mt-2 --My-Skills-Progress-Bars' variant="warning" now={70} label="Vanilla Js" />
        <ProgressBar className='ProgressBar mt-2 --My-Skills-Progress-Bars' variant="info" now={80} label="React" />
        <ProgressBar className='ProgressBar mt-2 --My-Skills-Progress-Bars' variant="info" now={78} label="React-Native" />
  <ProgressBar className='ProgressBar mt-2 --My-Skills-Progress-Bars' variant="info" now={65} label="Angular" />
  <ProgressBar className='ProgressBar mt-2 --My-Skills-Progress-Bars' variant="warning" now={57} label="jQuery" />
  <ProgressBar className='ProgressBar mt-2 --My-Skills-Progress-Bars' variant="danger" now={68} label="Redux" />
  <ProgressBar className='ProgressBar mt-2 --My-Skills-Progress-Bars' variant="warning" now={75} label="Node Js" />
  <ProgressBar className='ProgressBar mt-2 --My-Skills-Progress-Bars' variant="danger" now={78} label="Express" />
  <ProgressBar className='ProgressBar mt-2 --My-Skills-Progress-Bars' variant="warning" now={79} label="Mongo DB" />
  <ProgressBar className='ProgressBar mt-2 --My-Skills-Progress-Bars' variant="success" now={60} label="Jest" />
  </Col>
    </Row>
    <Row className='Row --Services'>
      <h1
        className="h1 text-center --Services-Heading"
      >
        Services
      </h1>
      <h4 className="h4 text-center --Services-Sub-Heading">
        ------ <span style={{ color: "rgb(175, 77, 20)" }}>What I Do</span>{" "}
        ------
      </h4>
      <Col className='Col --App-Web-Dev' lg={3}>
        <h4 className='h4 text-center --App-Web-Dev-Heading'>
          ------{" "}
          <span style={{ color: "rgb(175, 77, 20)" }}>
            App & Web Development
          </span>{" "}
          ------
        </h4>
        <Accordion bg="dark" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Image
                className='Image --App-Web-Dev-Image'
                src={CodeLogo}
              ></Image>
            </Accordion.Header>
            <Accordion.Body className='Accordian --App-Web-Dev-Image-Summary'>
              I am a front-end web developer that can develop applications in
              tech stacks such as MERN and MEAN. I can also create applications
              using jQuery and vanilla Js if you require it. I can also test and
              run a back-end with full-stack knowledge. I can create apps in mobile
              as well using React Native to my employers client needs.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>

      <Col className='Col --Web-App-Design' lg={3}>
        <h4 className="h4 text-center --Web-App-Design-Header">
          ------{" "}
          <span style={{ color: "rgb(175, 77, 20)" }}>Web & App Design</span>{" "}
          ------
        </h4>
        <Accordion bg="dark" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Image
                className='Image --Web-App-Design-Image'
                src={Brush}
              ></Image>
            </Accordion.Header>
            <Accordion.Body className='Accordian --Web-App-Design-Summary'>
              I can create mockups and or wireframes of an app that will give the best
              user experiences posible with my insights on UX/UI design. I can also give
              the best contrast ratios for certain color choices with the different
              insights in different calibrated screen color contrast ratios via SRGB or
              Adobe RGB. I can also implement accessibility features for those who have
              red color blindness issues and or need screen readers to help them enjoy
              the same content as all users!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
  </Container>
);
}

export default Services;
