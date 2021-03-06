import react from 'react';
import {Row, Col, Card, Container, Button} from 'react-bootstrap';

// imports

import './projects.css'

// import CSS

import CodeEasy from '../../Images/codeeasy.png'
import Pokidex from '../../Images/pokidex.png'
import Timeslip from '../../Images/timeslip.png'
import BestMovies from '../../Images/bestmovies.png'
import NFT from '../../Images/nft.png'
import Meet from '../../Images/meets.png'
import ToDo from '../../Images/todo.png'

// import Images from local files

const Projects = () => {

return (
  <Container
    className='Container --Projects'
  id="projects"
    fluid
  >
    <Row className='Row --Fav-Projects'>
      <h1
        className="h1 text-center --Fav-Projects-Header"
      >
        My Favorite Project
      </h1>
      <h4 className="text-center">
        ------ <span style={{ color: "rgb(175, 77, 20)" }}>My Most Loved</span>{" "}
        ------
      </h4>
      <Col className='Col --Best-Movie-Image' lg={6}>
        <Card>
          <Card.Img variant="top" src={BestMovies} />
        </Card>
      </Col>
      <Col className="Col --Best-Movie-Description" lg={6} >
      <h1 className='h1 --Best-Movie-Header' >
          Best Movies App
        </h1>
        <h3 className='h1 --Best-Movie-Summary'>Summary</h3>
        <p>
          Best Movies is a web app created using the MERN tech stack,
          that provides users with access to information about movies, 
          directors, and genres. Users are able to create an account, 
          update their personal data, and create a list of favorite movies.
          Best Movies was a personal project I created as a part of my 
          web development course at CareerFoundry to demonstrate my
          mastery of full-stack javascript development. The aim of the 
          project was to have a movie app that all users to see info on the movies they desire. The problem I wanted to solve is 
          to build the complete server-side and client-side application 
          from scratch. 
        </p>
        <a href="https://docs.google.com/document/d/e/2PACX-1vRNs3U4BUezHs7hSYXodr61srsMesVoJdoLowj20ciL96lsapxA8ioxvy3_lqXxz8oDDd_9Qp83yGMh/pub" target="_blank">
          <Button variant="light" className='me-3'>Breakdown!</Button>
        </a>
        <a href="https://bestmoviescentral.netlify.app/" target="_blank">
        <Button variant="light" className=" me-3">See Live!</Button>
        </a>
        <br></br> <br></br>
        <a href="https://github.com/Baileym8203/myFlix-client" target="_blank">
        <Button variant="light" className="me-3">See Code!</Button>
        </a>
        <a href="https://github.com/Baileym8203/movie_api" target="_blank">
        <Button variant="light" className="me-3">API</Button>
        </a>
        </Col>
    </Row>
    <Row className='Row --Other-Projects'>
      <h1
        className="h1 text-center --Other-Projects-Heading"
        
      >
        My Other Unique Projects
      </h1>
      <h4 className="text-center">
        ------ <span style={{ color: "rgb(175, 77, 20)" }}>They Stand Out</span>{" "}
        ------
      </h4>
      <Col className='Col --Code-Easy' lg={4}>
        <Card className="text-center">
          <Card.Img variant="top" src={CodeEasy} />
          <Card.Body>
            <h2 className='h2 --Code-Easy-Summary'>Summary</h2>
            <Card.Text>
              CodeEasy is an app that allows the user to look up exact tags of HTML elements
              with just a lookup of the name of the element wanted. As well as authenticates 
              users with login, and allows the user to change a password if forgotten in any 
              circumstances. 
            </Card.Text>
            <a href="https://docs.google.com/document/d/e/2PACX-1vTqjFpLZpJNqU7AzdCKvYD_4os0bni77McBH43Q7ocJCNCqGnh4hpE_dC3lGTHSI1mvzqPYW7-8BOZc/pub" target="_blank">
              <Button className="mb-3" variant="secondary">Breakdown!</Button>
              </a>
            <h3 className='h3 --Code-Easy-Tools'>Main Tools</h3>
            <Card.Text>React, Firebase, Bootstrap, Recharts, PWA </Card.Text>
            <a href="https://baileym8203.github.io/Visual/" target="_blank">
            <Button className="me-4" variant="secondary">See Live!</Button>
            </a>
            <a href="https://github.com/Baileym8203/Visual" target="_blank">
            <Button variant="secondary">See Code!</Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
      <Col className='Col --Pokedex' lg={4}>
        <Card fluid className="text-center">
          <Card.Img variant="top" src={Pokidex} />
          <Card.Body>
          <h2 className='h2 --Pokedex-Summary'>Summary</h2>
            <Card.Text>
              Pokedex is an app that allows the user to see any info on any Pokemon they
              want to know more about. When the name of the Pokemon has been clicked an
              image, height, and type will be given for that specific Pokemon.
            </Card.Text>
            <a href="https://docs.google.com/document/d/e/2PACX-1vSW8qMXKgjUpUCQVdivsxPzbLSF4NbfvfgxqVbn1PBWWQUhlqA20L5ALtHYRyAKCiQVonaJsmra_LrY/pub" target="_blank">
              <Button className="mb-3" variant="secondary">Breakdown!</Button>
              </a>
            <h3 className='h3 --Pokedex-Tools'>Main Tools</h3>
            <Card.Text>jQuery, Bootstrap </Card.Text>
            <a href="https://baileym8203.github.io/simple-js-app/" target="_blank">
            <Button className="me-4" variant="secondary">See Live!</Button>
            </a>
            <a href="https://github.com/Baileym8203/simple-js-app" target="_blank">
            <Button variant="secondary">See Code!</Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
      <Col className='Col --Time-Slip' lg={4}>
        <Card className="text-center">
          <Card.Img variant="top" src={Timeslip} />
          <Card.Body>
          <h2 className='h2 --Time-Slip-Summary'>Summary</h2>
            <Card.Text>
              TimeSlip is a mobile app that allows the user to chat with all
              other users using the app. After the user picks a background color
              and name they can enter the chat. From there, their messages will
              be seen by all other users as well as their locations, and the images
              they send.
            </Card.Text>
            <a href="https://docs.google.com/document/d/e/2PACX-1vTlVzCvDhBtAoLHUrd7ghVnoNtlf4Cto3qILJ-VIhpsO02cj83uyk7RfRlrGChURQU11PGdqdyMArSv/pub" target="_blank">
              <Button className="mb-3" variant="secondary">Breakdown!</Button>
            </a>
            <h3 className='h3 --Time-Slip-Tools'>Main Tools</h3>
            <Card.Text>React Native, Gifted Chat, Firebase </Card.Text>
            <a href="https://github.com/Baileym8203/hello-world" target="_blank">
            <Button variant="secondary">See Code!</Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className='Row --Other-Projects-Two'>
      <Col className='Col --Nft' lg={4}>
        <Card className="text-center">
          <Card.Img variant="top" src={NFT} />
          <Card.Body>
          <h2 className='h2 --Nft-Summary'>Summary</h2>
            <Card.Text>
              This NFT landing page was created for a client starting a company in NFTs.
              This app has a back-end contact page. Not only this but this app has scroll
              animations that allow the visitors to be more immersed in the info they need
              for the company!
            </Card.Text>
            <h3 className='h3 --Nft-Tools'>Main Tools</h3>
            <Card.Text>React, Bootstrap, Node js, AOS, Netlify </Card.Text>
            <a href="https://thirsty-leakey-78068d.netlify.app/" target="_blank">
            <Button className="me-4" variant="secondary">See Live!</Button>
            </a>
            <a href="https://github.com/Baileym8203/react-NFT" target="_blank">
            <Button variant="secondary">See Code!</Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
      <Col className='Col --Meet' lg={4}>
        <Card fluid className="text-center">
          <Card.Img variant="top" src={Meet} />
          <Card.Body>
          <h2 className='h2 --Meet-Summary'>Summary</h2>
            <Card.Text>
              Meets is an app that allows the user to find, and see data on coding events in certain
              locations. After the user is logged in they will be able to search for an event then see
              data on the events in that area. They can then set up reminders by clicking on the event
              chosen.
            </Card.Text>
            <a href="https://docs.google.com/document/d/e/2PACX-1vT-usKLxUWMp-58vZeSX_Wy5vIhkkY6ei2u4GdhNH4Ng1ezZwgEym9T_3zTyH-vS9xI-TO-rI1JN2WE/pub" target="_blank">
              <Button className="mb-3" variant="secondary">Breakdown!</Button>
            </a>
            <h3 className='h3 --Meet-Tools'>Main Tools</h3>
            <Card.Text>React, Bootstrap, Recharts, PWA </Card.Text>
            <a href="https://baileym8203.github.io/meets/" target="_blank">
            <Button className="me-4" variant="secondary">See Live!</Button>
            </a>
            <a href="https://github.com/Baileym8203/meets" target="_blank">
            <Button variant="secondary">See Code!</Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
      <Col className='Col --To-Do' lg={4}>
        <Card className="text-center">
          <Card.Img variant="top" src={ToDo} />
          <Card.Body>
          <h2 className='h2 --To-Do-Summary'>Summary</h2>
            <Card.Text>
              ToDo is a to do list app that allows the user to create a to do list.
              The user can add as many items as they want re-arrange them, and they
              can delete items off the list when they want. They can also cross an
              item off the list when complete.
            </Card.Text>
            <h3 className='h3 --To-Do-Tools'>Main Tools</h3>
            <Card.Text>Vanilla js, Netlify </Card.Text>
            <a href="https://idyllic-choux-548ccd.netlify.app/" target="_blank">
            <Button className="me-4" variant="secondary">See Live!</Button>
            </a>
            <a href="https://github.com/Baileym8203/to-do-list" target="_blank">
            <Button variant="secondary">See Code!</Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
}

export default Projects;

