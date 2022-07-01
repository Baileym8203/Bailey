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
import API from '../../Images/API.png'
import Wireframe from '../../Images/Wireframe.jpg'
import SCSS from '../../Images/SCSS.png'

const Projects = () => {

return (
  <Container
  id="projects"
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
        style={{ marginTop: "125px", fontWeight: 650 }}
      >
        My Favorite Projects
      </h1>
      <h4 className="text-center">
        ------ <span style={{ color: "rgb(175, 77, 20)" }}>My Most Loved</span>{" "}
        ------
      </h4>
      <h1  style={{ fontWeight: 650, textAlign: "center", marginTop: "50px" }}>
          Best Movies App
        </h1>
      <Col lg={12} style={{ marginTop: "10px", padding: "50px", float: "center" }}>
        <Card>
          <Card.Img variant="top" src={BestMovies} />
        </Card>
      </Col>
      <Col lg={12} style={{ marginTop: "20px", textAlign: "center" }}>
        <h4 style={{ fontWeight: 650, marginTop: "25px", marginBottom: "20px", textAlign: "center" }}>--- <span style={{ color: "rgb(175, 77, 20)" }}>Introduction</span> ---</h4>
        <p>
          Best Movies is a web app created using the MERN tech stack,
          that provides users with access to information about movies, 
          directors, and genres.Users are able to create an account, 
          update their personal data, and create a list of favorite movies.
          Best Movies was a personal project I created as a part of my 
          web development course at CareerFoundry to demonstrate my
          mastery of full-stack javascript development.The aim of the 
          project was to have an ambitious full-stack project I can add 
          to my professional portfolio.The problem I wanted to solve is 
          to build the complete server-side and client-side application 
          from scratch. 
        </p>
        <h1 style={{ fontWeight: 650, textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>API</h1>
        <p> First I connected the Back-End API to the Front-End so that the
          users could see and use the information from the API.
          This step was one of the most important as without the Back-End
          API the app wouldn’t function as intended. The goal was to make
          sure that when you’d click on a movie image or anything placeholder
          at the time that the movie info would come back from the Back-End.
        </p>
        <Col lg={12} style={{ marginTop: "20px", padding: "50px", float: "center" }}>
        <Card>
          <Card.Img variant="top" src={API} />
        </Card>
      </Col>
        <h4 style={{ fontWeight: 650, textAlign: "center" }}>--- <span style={{ color: "rgb(175, 77, 20)" }}>Tools</span> ---</h4>
        <p>The tool I used Was React, and its data passing language JSX.
          React is a Javascript library that allows easier use of the 
          language.With React you can use simple document setups and with 
          that use HTML, and Reacts language JSX straight in the same file.
          HTML is what the web uses to bring your website to life.While 
          React is more of the extra detail to make your website Its own!
          While making the template for the app in React was relatively 
          straightforward, connecting the API wasn’t so much.As this 
          required the use of props as well as states.Which are essentially
          like playing telephone with your friend, but in files.You need 
          to use these to pass along the info to every different file and 
          save it to a name or variable.States and props aren't too 
          difficult to use once you get the hang of them, but they can be pretty 
          tricky as they were for me. I passed this hurdle through trial, and 
          error until I fully understood the nature of how my data is getting 
           transferred and working to success! 
        </p>
        <h4 style={{ fontWeight: 650, textAlign: "center" }}>--- <span style={{ color: "rgb(175, 77, 20)" }}>Challenges</span> ---</h4>
        <p>  I had to face some big decisions using class components or
          functional components. Which is like just having your choice
          of Coke or Pepsi, both taste good but which do you like to drink
          most? It’s the same with classes and functional components. It’sjust a
          matter of preference, but I chose to use class components as this was more
          structured in my mind. As when I use class components the files look more
          clean and organized.
        </p>
        <h1 style={{ fontWeight: 650, textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>Main UI</h1>
        <p>  Next, I created all of the main UI components for the users
          to surf around the app. This step was crucial to the app's use,
          and long-term user retention.  The goal was to create an eye-catching
          UI with easy navigation and easily transferable size to help with
          responsive design.
        </p>
        <Col lg={12} style={{ marginTop: "20px", padding: "50px" }}>
        <Card>
          <Card.Img variant="top" src={Wireframe} />
        </Card>
      </Col>
        <h5 style={{ fontWeight: 650, textAlign: "center" }}>--- <span style={{ color: "rgb(175, 77, 20)" }}>Tools</span> ---</h5>
        <p> The tools I used were React, and React Bootstrap. React is a Javascript
          library that allows easier use of the language. With React you can use simple
          document setups and with that use HTML, and React's language JSX straight in
          the same file. React Bootstrap is a package you can download in React that allows
          pre-built elements to be used to build off of. It's like buying a desk from Ikea.
          They ship you the parts with the instructions but you still build it yourself in that sense. </p>
          <h5 style={{ fontWeight: 650, textAlign: "center" }}>--- <span style={{ color: "rgb(175, 77, 20)" }}>Challenges</span> ---</h5>
        <p>  Using React bootstrap was simple and well documented. What became a struggle was trying to strive for perfection when creating the UI. When as a developer you have to stop and tell yourself “simple is better” to stop yourself from over-creating the UI.
        </p>
        <h5 style={{ fontWeight: 650, textAlign: "center" }}>--- <span style={{ color: "rgb(175, 77, 20)" }}>My Decision Process</span> ---</h5>
        <p>  Some big decision I had to make here was what I wanted my main layout to be. When creating an app your UI is the make or break for your application. But I went with a simplistic equal spaced approach with navigation at the top and a search bar to the bottom right of it.
        </p>
        <h1 style={{ fontWeight: 650, textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>Styling</h1>
        <p>  Next, I had to style the elements. This step would help the user retention and the overall look of the app itself. The goal was to help complement the UI while trying to keep the contrast up, and everything simple.
        </p>
        <Col lg={12} style={{ marginTop: "20px", padding: "50px", float: "center" }}>
        <Card>
          <Card.Img variant="top" src={SCSS} />
        </Card>
      </Col>
        <h5 style={{ fontWeight: 650, textAlign: "center" }}>--- <span style={{ color: "rgb(175, 77, 20)" }}>Tools</span> ---</h5>
        <p>  The tools I used were CSS and SCSS.  Using both of these was pretty straightforward although you can get lost in styling. What I mean is the simpler the better! You don’t want to over-style your app so it can be hard to find the perfect blend for styling and UI. But as I kept experimenting I found the black and white theme to be perfect with fading over hover as well as smaller stylings such as perfect matched spacing etc.
With these, I also made the app fully responsive. Which will allow the users to use my app on any screen size they would like to use besides 300 pixels and below.
        </p>
        <h5 style={{ fontWeight: 650, textAlign: "center" }}>--- <span style={{ color: "rgb(175, 77, 20)" }}>Code Clean-Up</span> ---</h5>
        <p>
  Lastly, I went back and cleaned up my code. This step would allow easier readability if I ever need to come back to the app for maintenance. The goal of this would be to organize my code and make files more accessible.
        </p>
        <h1 style={{ fontWeight: 650, textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>Conclusion</h1>
        <p> In the end, I achieved my goal through pure determination and learning through the mistakes I made. With the help of peer programming with my mentor, this was made easier as I was able to get an industry expert's eyes on my mistakes to enlighten them and help me jump over the hurdles necessary to learn from my mistakes. The most difficult part of the project was definitely the UI and Back-End API. As those were the most critical for my app to function they were definitely hard. But with my determination and problem-solving I was able to get past them and see how they aren’t as hard as they once seemed. If I could do this project all over again I'd try to see the overall picture first and worry less about sophisticated design. I’d take a step back and make everything a lot more simple, and neat, and comment more on code snippets.
        </p>
        <a href="https://bestmoviescentral.netlify.app/" target="_blank">
        <Button variant="light" className="mt-1 me-5">See Live!</Button>
        </a>
        <a href="https://github.com/Baileym8203/myFlix-client" target="_blank">
        <Button variant="light" className="mt-1">See Code</Button>
        </a>
      </Col>
      <Col lg={12} style={{ marginTop: "60px", textAlign: "center" }}>
        <h2 className="float-right" style={{ fontWeight: 650 }}>
          Best Movies API
        </h2>
        <Col lg={12} style={{ marginTop: "15px", padding: "50px", marginBottom: "20px" }}>
        <Card className="text-center">
          <Card.Img variant="top" src={MovieApi} />
        </Card>
      </Col>
        <p>
          Best movies API is a web-based API that holds all data within a database.
          This data includes the user data, movie data, and authentication/authorizations 
          for the users. This API can be used with any front-end application that wants to 
          authenticate users or use the movie listing and data that is stored. The API is 
          documented with the endpoints as well as data needed to be transferred in order 
          to use the API within the directory. 
        </p>
        <a href="https://bestmoviecentral.herokuapp.com/" target="_blank">
        <Button variant="light" className="mt-1 mb-5 me-5">See Live!</Button>
        </a>
        <a href="https://github.com/Baileym8203/movie_api" target="_blank">
        <Button variant="light" className="mt-1 mb-5">See Code!</Button>
        </a>
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
            <h2 style={{fontWeight: 650}}>Summary</h2>
            <Card.Text>
              CodeEasy is an app that allows the user to look up exact tags of HTML elements
              with just a lookup of the name of the element wanted. As well as authenticates 
              users with login, and allows the user to change a password if forgotten in any 
              circumstances. 
            </Card.Text>
            <h3 style={{ fontWeight: 650 }}>Main Tools</h3>
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
      <Col lg={4} style={{ marginTop: "100px" }}>
        <Card fluid className="text-center">
          <Card.Img variant="top" src={Pokidex} />
          <Card.Body>
          <h2 style={{fontWeight: 650}}>Summary</h2>
            <Card.Text>
              Pokedex is an app that allows the user to see any info on any Pokemon they
              want to know more about. When the name of the Pokemon has been clicked an
              image, height, and type will be given for that specific Pokemon.
            </Card.Text>
            <h3 style={{ fontWeight: 650 }}>Main Tools</h3>
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
      <Col lg={4} style={{ marginTop: "100px" }}>
        <Card className="text-center">
          <Card.Img variant="top" src={Timeslip} />
          <Card.Body>
          <h2 style={{fontWeight: 650}}>Summary</h2>
            <Card.Text>
              TimeSlip is a mobile app that allows the user to chat with all
              other users using the app. After the user picks a background color
              and name they can enter the chat. From there, their messages will
              be seen by all other users as well as their locations, and the images
              they send.
            </Card.Text>
            <h3 style={{ fontWeight: 650 }}>Main Tools</h3>
            <Card.Text>React Native, Gifted Chat, Firebase </Card.Text>
            <a href="https://github.com/Baileym8203/hello-world" target="_blank">
            <Button variant="secondary">See Code!</Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row style={{ margin: 0 }}>
      <Col lg={4} style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Card className="text-center">
          <Card.Img variant="top" src={NFT} />
          <Card.Body>
          <h2 style={{fontWeight: 650}}>Summary</h2>
            <Card.Text>
              This NFT landing page was created for a client starting a company in NFTs.
              This app has a back-end contact page. Not only this but this app has scroll
              animations that allow the visitors to be more immersed in the info they need
              for the company!
            </Card.Text>
            <h3 style={{ fontWeight: 650 }}>Main Tools</h3>
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
      <Col lg={4} style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Card fluid className="text-center">
          <Card.Img variant="top" src={Meet} />
          <Card.Body>
          <h2 style={{fontWeight: 650}}>Summary</h2>
            <Card.Text>
              Meets is an app that allows the user to find, and see data on coding events in certain
              locations. After the user is logged in they will be able to search for an event then see
              data on the events in that area. They can then set up reminders by clicking on the event
              chosen.
            </Card.Text>
            <h3 style={{ fontWeight: 650 }}>Main Tools</h3>
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
      <Col lg={4} style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Card className="text-center">
          <Card.Img variant="top" src={ToDo} />
          <Card.Body>
          <h2 style={{fontWeight: 650}}>Summary</h2>
            <Card.Text>
              ToDo is a to do list app that allows the user to create a to do list.
              The user can add as many items as they want re-arrange them, and they
              can delete items off the list when they want. They can also cross an
              item off the list when complete.
            </Card.Text>
            <h3 style={{ fontWeight: 650 }}>Main Tools</h3>
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

