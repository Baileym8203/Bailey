import react from 'react';
import {Container, Row, Col, Table, Image, Tabs, Tab} from 'react-bootstrap';
import './skillsaboutme.css'
import Code from '../../Images/code.png'
import Problem from '../../Images/problem.png'
const SkillsAboutMe = () => {

const now = 60

return (
  <Container id="about" fluid style={{ margin: 0, padding: 0, marginBottom: "10px" }}>
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
          Hello, I am Bailey Mashore! I learned about programming when I was 9 years
          old watching a new movie at the time in 2012 Tron Legacy. It opened my
          perspective to the idea of command lines and a word of programs. After a
          couple of years once I turned 15 I started playing around with Python. I
          ended up getting all the way to loops before stopping and trying other
          things. When I turned 18 however I wanted to decide what I wanted to do
          as we all need to, and I loved problem-solving through high school. This
          made me think back to when I was playing around with Python, so I decided
          to give code another chance. This was the best decision I’ve ever made
          because the rest is history! Before I knew it I was in love with the idea
          of always learning more and driving to become better and better. This is
          how I came to be my favorite thing I could have ever asked for!
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
          When I get stumped by a problem I never throw in the towel ever! Sometimes
          I get mad at myself just because I don’t know when to back down at times. 
          When a problem is too big for me to solve alone I always ask for guidance 
          or to pair-program with someone else if they have the time of course. But 
          most of the time I’m able to conquer any problem that comes my way. Mainly 
          because I will continue to search and test until the issue resolution comes. 
          As when I solve that issue it feels so great knowing that I was able to save 
          something from the brink of disaster! Not only all of that but you earn 
          something new that you can bring to the next problem and the next one after 
          that. Your knowledge continues to grow, so usually once you solve a hard 
          problem you won’t have the same difficulty if you end up hitting it again 
          in the future. 

        </p>
      </Col>
    </Row>
  </Container>
);
}

export default SkillsAboutMe;
