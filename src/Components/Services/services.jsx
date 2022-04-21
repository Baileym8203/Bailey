import react from 'react';
import {Container, Col, Row, Image, Accordion} from 'react-bootstrap';
import CodeLogo from '../../Images/codeLogo.png'
import Brush from '../../Images/brush.png'
import './services.css'


const Services = () => {
return (
  <Container
    fluid
    style={{ backgroundColor: "#292929", color: "white", marginTop: "150px" }}
  >
    <Row style={{ margin: 0, display: "flex", justifyContent: "space-around" }}>
      <h1
        className="text-center"
        style={{ marginTop: "100px", fontWeight: 650 }}
      >
        Services
      </h1>
      <h4 style={{ marginBottom: "100px" }} className="text-center">
        ------ <span style={{ color: "rgb(175, 77, 20)" }}>What I Do</span>{" "}
        ------
      </h4>
      <Col lg={3} style={{ justifyContent: "center", marginBottom: "100px" }}>
        <h4 style={{ marginBottom: "100px" }} className="text-center">
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
                style={{ width: "100%", height: "80%" }}
                src={CodeLogo}
              ></Image>
            </Accordion.Header>
            <Accordion.Body style={{ color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>

      <Col lg={3} style={{ marginBottom: "100px" }}>
        <h4 style={{ marginBottom: "100px" }} className="text-center">
          ------{" "}
          <span style={{ color: "rgb(175, 77, 20)" }}>Web & App Design</span>{" "}
          ------
        </h4>
        <Accordion bg="dark" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Image
                style={{ width: "100%", height: "80%" }}
                src={Brush}
              ></Image>
            </Accordion.Header>
            <Accordion.Body style={{ color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
    <Row style={{ margin: 0, display: "flex", justifyContent: "center" }}>
      <h1
        className="text-center"
        style={{ marginTop: "50px", fontWeight: 650 }}
      >
        Skills
      </h1>
      <h4 style={{ marginBottom: "100px" }} className="text-center">
        ------ <span style={{ color: "rgb(175, 77, 20)" }}>Experience</span>{" "}
        ------
      </h4>
    </Row>
  </Container>
);
}

export default Services;
