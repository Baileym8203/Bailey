import react from 'react';
import {Container, Col, Row, Image, Accordion, ProgressBar} from 'react-bootstrap';
import CodeLogo from '../../Images/codeLogo.png'
import Brush from '../../Images/brush.png'
import './services.css'


const Services = () => {
return (
  <Container
  id="services"
    fluid
    style={{ backgroundColor: "#292929", color: "white", marginTop: "150px" }}
  >
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
      <Col lg={12} style={{marginBottom: "100px"}}>
  <ProgressBar style={{borderRadius: "0%"}} className='mt-2' variant="danger" now={90} label="HTML" />
  <ProgressBar style={{borderRadius: "0%"}} className='mt-2' variant="success" now={75} label="CSS" />
  <ProgressBar style={{borderRadius: "0%"}} className='mt-2' variant="warning" now={70} label="V JavaScript" />
  <ProgressBar style={{borderRadius: "0%"}} className='mt-2' variant="info" now={80} label="MERN" />
  <ProgressBar style={{borderRadius: "0%"}} className='mt-2' variant="info" now={60} label="MEAN" />
  <ProgressBar style={{borderRadius: "0%"}} className='mt-2' variant="warning" now={55} label="jQuery" />
  </Col>
    </Row>
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
              I am a front-end web developer that can develop applications in
              tech stacks such as MERN and MEAN. I can also create applications
              using jQuery and vanilla Js if you require it. I can also test and
              run a back-end with full-stack knowledge. I can create apps in mobile
              as well using React Native to my employers client needs.
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
