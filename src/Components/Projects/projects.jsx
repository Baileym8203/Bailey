import react from 'react';
import {Row, Col, Card, Container, Button} from 'react-bootstrap';
import './projects.css'
import CodeEasy from '../../Images/codeeasy.png'
import Pokidex from '../../Images/pokidex.png'
import Timeslip from '../../Images/timeslip.png'
import BestMovies from '../../Images/bestmovies.png'
import MovieApi from '../../Images/movieapi.png'
import NFT from '../../Images/nft.png'
import Meet from '../../Images/meets.png'
import ToDo from '../../Images/todo.png'

const Projects = () => {

return (
  <Container
    fluid
    style={{
      margin: "0px",
      padding: 0,
      justifyContent: "space-around",
    }}
  >
    <Row style={{ margin: 0, backgroundColor: "#292929", color: "white" }}>
      <h1
        className="text-center"
        style={{ marginTop: "100px", fontWeight: 650 }}
      >
        My Favorite Projects
      </h1>
      <h4 className="text-center">
        ------ <span style={{ color: "rgb(175, 77, 20)" }}>My Most Loved</span>{" "}
        ------
      </h4>
      <Col lg={6} style={{ marginTop: "100px", padding: "20px" }}>
        <Card>
          <Card.Img variant="top" src={BestMovies} />
        </Card>
      </Col>
      <Col lg={6} style={{ marginTop: "150px" }}>
        <h2 className="float-left" style={{ fontWeight: 650 }}>
          Best Movies Application
        </h2>
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
        </p>
        <a href="https://bestmoviescentral.netlify.app/" target="_blank">
        <Button variant="light" className="mt-1">Check It Out</Button>
        </a>
      </Col>
      <Col lg={6} style={{ marginTop: "150px", direction: "rtl" }}>
        <h2 className="float-right" style={{ fontWeight: 650 }}>
          Best Movies API
        </h2>
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
        </p>
        <a href="https://bestmoviecentral.herokuapp.com/" target="_blank">
        <Button variant="light" className="mt-1">Check It Out</Button>
        </a>
      </Col>
      <Col lg={6} style={{ marginTop: "100px", padding: "20px", marginBottom: "100px" }}>
        <Card className="text-center">
          <Card.Img variant="top" src={MovieApi} />
        </Card>
      </Col>
    </Row>
    <Row style={{ margin: 0 }}>
      <h1
        className="text-center"
        style={{ marginTop: "150px", fontWeight: 650 }}
      >
        My Other Unique Projects
      </h1>
      <h4 className="text-center">
        ------ <span style={{ color: "rgb(175, 77, 20)" }}>They Stand Out</span>{" "}
        ------
      </h4>
      <Col lg={4} style={{ marginTop: "100px" }}>
        <Card className="text-center">
          <Card.Img variant="top" src={CodeEasy} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">See on Github</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} style={{ marginTop: "100px" }}>
        <Card fluid className="text-center">
          <Card.Img variant="top" src={Pokidex} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">See On Github</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} style={{ marginTop: "100px" }}>
        <Card className="text-center">
          <Card.Img variant="top" src={Timeslip} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">See On Github</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row style={{ margin: 0 }}>
      <Col lg={4} style={{ marginTop: "100px" }}>
        <Card className="text-center">
          <Card.Img variant="top" src={NFT} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">See on Netlify</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} style={{ marginTop: "100px" }}>
        <Card fluid className="text-center">
          <Card.Img variant="top" src={Meet} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">See On Github</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} style={{ marginTop: "100px" }}>
        <Card className="text-center">
          <Card.Img variant="top" src={ToDo} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">See On Netlify</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
}

export default Projects;

