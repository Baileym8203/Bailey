import react from 'react';
import {Container, Row, Col, Table, Image, Tabs, Tab} from 'react-bootstrap';
import './skillsaboutme.css'
import Code from '../../Images/code.png'
import Problem from '../../Images/problem.png'
const SkillsAboutMe = () => {

const now = 60

return (
  <Container fluid style={{ margin: 0, padding: 0, marginBottom: "10px" }}>
    <Row style={{ display: "flex"}}>
      <h1
        className="text-center"
        style={{ marginTop: "100px", fontWeight: 650 }}
      >
        About Me
      </h1>
      <h4 className="text-center" style={{ marginBottom: "50px" }}>
        ------ <span style={{ color: "rgb(175, 77, 20)" }}>In Depth Me</span>{" "}
        ------
      </h4>
      <Col lg={12} style={{display: "flex", justifyContent: "center"}}>
        <Image
          fluid
          style={{ marginTop: "100px", padding: "20px" }}
          src={Code}
        ></Image>
      </Col>
      <Col className=" Col --about-me text-center" lg={12}>
        <h3>
          {" "}
          ---{" "}
          <span style={{ color: "rgb(175, 77, 20)" }}>
            Why I Choose To Code
          </span>{" "}
          ---{" "}
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sollicitudin aliquam ultrices sagittis orci a scelerisque purus
          semper. Morbi non arcu risus quis varius quam quisque. Porta lorem
          mollis aliquam ut porttitor leo. Arcu cursus vitae congue mauris
          rhoncus. Elementum integer enim neque volutpat ac tincidunt. Enim
          tortor at auctor urna nunc id cursus metus aliquam. Id consectetur
          purus ut faucibus pulvinar. Volutpat lacus laoreet non curabitur
          gravida arcu. Dui ut ornare lectus sit amet est. Ut sem nulla pharetra
          diam sit. Tincidunt dui ut ornare lectus sit amet est placerat in.
          Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.
          Vitae ultricies leo integer malesuada. Neque laoreet suspendisse
          interdum consectetur libero id faucibus nisl tincidunt. Tempor orci eu
          lobortis elementum nibh tellus molestie nunc non. Leo urna molestie at
          elementum eu. Suspendisse interdum consectetur libero id faucibus nisl
          tincidunt. Vestibulum rhoncus est pellentesque elit ullamcorper. Justo
          eget magna fermentum iaculis eu non diam phasellus vestibulum. Id nibh
          tortor id aliquet lectus. Diam maecenas ultricies mi eget mauris.
          Adipiscing vitae proin sagittis nisl rhoncus mattis. Molestie a
          iaculis at erat pellentesque adipiscing commodo elit. Sit amet mauris
          commodo quis imperdiet massa tincidunt nunc pulvinar. Malesuada
          pellentesque elit eget gravida. Senectus et netus et malesuada fames
          ac turpis. Sit amet porttitor eget dolor morbi non arcu risus.
          Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam.
          Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.
          Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat.
          Malesuada fames ac turpis egestas integer eget aliquet nibh. Nulla
          facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Ac felis
          donec et odio pellentesque. Urna condimentum mattis pellentesque id
          nibh tortor. Non consectetur a erat nam at lectus. Aliquam sem et
          tortor consequat. Leo vel fringilla est ullamcorper eget nulla
          facilisi. Dui sapien eget mi proin sed libero enim sed. Hac habitasse
          platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.
          Mauris augue neque gravida in fermentum. In nisl nisi scelerisque eu
          ultrices vitae auctor eu. Tortor posuere ac ut consequat semper
          viverra. Viverra aliquet eget sit amet tellus cras adipiscing enim.
          Purus in massa tempor nec feugiat nisl pretium fusce. Integer eget
          aliquet nibh praesent tristique. Sed velit dignissim sodales ut eu sem
          integer vitae justo. Aenean vel elit scelerisque mauris. Mattis enim
          ut tellus elementum sagittis. Vulputate odio ut enim blandit. Purus
          faucibus ornare suspendisse sed nisi lacus sed viverra. Vel elit
          scelerisque mauris pellentesque pulvinar. Condimentum vitae sapien
          pellentesque habitant morbi tristique. Semper viverra nam libero justo
          laoreet sit amet cursus sit. Porttitor lacus luctus accumsan tortor.
          Quam nulla porttitor massa id neque aliquam vestibulum morbi. Risus
          nec feugiat in fermentum posuere urna. Scelerisque eu ultrices vitae
          auctor eu. Condimentum mattis
        </p>
      </Col>
    </Row>
    <Row style={{ margin: 0, padding: 0,}}>
      <Col lg={12} style={{display: "flex", justifyContent: "center"}}>
        <Image
          fluid
          style={{ marginTop: "100px", padding: "20px" }}
          src={Problem}
        ></Image>
      </Col>
      <Col className=" Col --about-me text-center" lg={12}>
        <h3>
          {" "}
          ---{" "}
          <span style={{ color: "rgb(175, 77, 20)" }}>
            My Problem Solving Process
          </span>{" "}
          ---{" "}
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sollicitudin aliquam ultrices sagittis orci a scelerisque purus
          semper. Morbi non arcu risus quis varius quam quisque. Porta lorem
          mollis aliquam ut porttitor leo. Arcu cursus vitae congue mauris
          rhoncus. Elementum integer enim neque volutpat ac tincidunt. Enim
          tortor at auctor urna nunc id cursus metus aliquam. Id consectetur
          purus ut faucibus pulvinar. Volutpat lacus laoreet non curabitur
          gravida arcu. Dui ut ornare lectus sit amet est. Ut sem nulla pharetra
          diam sit. Tincidunt dui ut ornare lectus sit amet est placerat in.
          Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.
          Vitae ultricies leo integer malesuada. Neque laoreet suspendisse
          interdum consectetur libero id faucibus nisl tincidunt. Tempor orci eu
          lobortis elementum nibh tellus molestie nunc non. Leo urna molestie at
          elementum eu. Suspendisse interdum consectetur libero id faucibus nisl
          tincidunt. Vestibulum rhoncus est pellentesque elit ullamcorper. Justo
          eget magna fermentum iaculis eu non diam phasellus vestibulum. Id nibh
          tortor id aliquet lectus. Diam maecenas ultricies mi eget mauris.
          Adipiscing vitae proin sagittis nisl rhoncus mattis. Molestie a
          iaculis at erat pellentesque adipiscing commodo elit. Sit amet mauris
          commodo quis imperdiet massa tincidunt nunc pulvinar. Malesuada
          pellentesque elit eget gravida. Senectus et netus et malesuada fames
          ac turpis. Sit amet porttitor eget dolor morbi non arcu risus.
          Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam.
          Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.
          Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat.
          Malesuada fames ac turpis egestas integer eget aliquet nibh. Nulla
          facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Ac felis
          donec et odio pellentesque. Urna condimentum mattis pellentesque id
          nibh tortor. Non consectetur a erat nam at lectus. Aliquam sem et
          tortor consequat. Leo vel fringilla est ullamcorper eget nulla
          facilisi. Dui sapien eget mi proin sed libero enim sed. Hac habitasse
          platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.
          Mauris augue neque gravida in fermentum. In nisl nisi scelerisque eu
          ultrices vitae auctor eu. Tortor posuere ac ut consequat semper
          viverra. Viverra aliquet eget sit amet tellus cras adipiscing enim.
          Purus in massa tempor nec feugiat nisl pretium fusce. Integer eget
          aliquet nibh praesent tristique. Sed velit dignissim sodales ut eu sem
          integer vitae justo. Aenean vel elit scelerisque mauris. Mattis enim
          ut tellus elementum sagittis. Vulputate odio ut enim blandit. Purus
          faucibus ornare suspendisse sed nisi lacus sed viverra. Vel elit
          scelerisque mauris pellentesque pulvinar. Condimentum vitae sapien
          pellentesque habitant morbi tristique. Semper viverra nam libero justo
          laoreet sit amet cursus sit. Porttitor lacus luctus accumsan tortor.
          Quam nulla porttitor massa id neque aliquam vestibulum morbi. Risus
          nec feugiat in fermentum posuere urna. Scelerisque eu ultrices vitae
          auctor eu. Condimentum mattis
        </p>
      </Col>
    </Row>
  </Container>
);
}

export default SkillsAboutMe;
