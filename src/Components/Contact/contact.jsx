import react from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import ContactForm from '../Contact Form/contactform';
import Github from '../../Images/github.jpg'
import LinkedIn from '../../Images/linkedin.png'
const Contact = () => {
return (
  <Container
    fluid
    style={{ margin: "0px", padding: 0, backgroundColor: "#292929" }}
  >
    <Row>
      <h1
        className="text-center"
        style={{ color: "white", marginTop: "100px", fontWeight: "650px" }}
      >
        Contact Me
      </h1>
      <h4 className="text-center" style={{color: 'white'}}>
        ------ <span style={{ color: "rgb(175, 77, 20)" }}>Get In Touch</span>{" "}
        ------
      </h4>
      <Col lg={12} style={{ padding: "100px" }}>
        <ContactForm />
      </Col>
    </Row>
    <Row>
      <Col lg={5} style={{ display: "flex", justifyContent: "center" }}>
        <a href="https://github.com/Baileym8203?tab=repositories">
          <Image
            fluid
            src={Github}
            style={{ marginBottom: "50px", width: "200px", height: "200px" }}
          ></Image>
        </a>
      </Col>
      <Col lg={2} style={{ display: "flex", justifyContent: "center" }}>
        <a style={{ marginBottom: "50px" }} href="tel:725-242-6439">
          Give Me A Call
        </a>
      </Col>
      <Col lg={5} style={{ display: "flex", justifyContent: "center" }}>
        <a href="https://www.linkedin.com/in/bailey-mashoreba2111177/">
          <Image
            fluid
            src={LinkedIn}
            style={{ width: "200px", height: "200px", marginBottom: "50px" }}
          ></Image>
        </a>
      </Col>
    </Row>
  </Container>
);
}

export default Contact
