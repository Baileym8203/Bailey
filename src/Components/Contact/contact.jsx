import react from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import ContactForm from '../Contact Form/contactform';
import Github from '../../Images/github.jpg'
import LinkedIn from '../../Images/linkedin.png'

// imports

import './contact.css'

// imported CSS

const Contact = () => {

return (
  <Container
    className='Container --Contact'
  id="contact"
    fluid
  >
    <Row>
      <h1
        className=" h1 text-center --Contact-Header"
      >
        Contact Me
      </h1>
      <h4 className=" h4 text-center --Contact-Sub-Heading">
        ------ <span style={{ color: "rgb(175, 77, 20)" }}>Get In Touch</span>{" "}
        ------
      </h4>
      <Col className='Col --Contact-Form' lg={12}>
        <ContactForm />
      </Col>
    </Row>
    <Row>
      <Col className='Col --Contact-Github' lg={5}>
        <a href="https://github.com/Baileym8203?tab=repositories" target="_blank">
          <Image
            className='Image --Contact-Github-Image'
            fluid
            src={Github}
            ></Image>
        </a>
      </Col>
      <Col className='Col --Contact-Tel' lg={2}>
        <a className='a --Contact-Tel-Link' href="tel:725-242-6439">
          Give Me A Call
        </a>
      </Col>
      <Col className='Col --Contact-Linkedin' lg={5}>
        <a href="https://www.linkedin.com/in/bailey-mashoreba2111177/" target="_blank">
          <Image
            className='Image --Contact-Linkedin-Image'
            fluid
            src={LinkedIn}
          ></Image>
        </a>
      </Col>
    </Row>
  </Container>
);
}

export default Contact
