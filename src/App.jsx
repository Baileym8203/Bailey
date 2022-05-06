import React from "react";
import "./App.css";
import {Container} from "react-bootstrap";
import NavbarItem from "./Components/Navbar/navbar";
import Home from './Components/Home/home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
const App = () => {

  return (
    <Router>
      <NavbarItem />
      <Container
        fluid
        style={{ margin: "0px", padding: "0px"}}
        className="Container --background-image"
      >
        <Routes>
          <Route exact path="/Bailey" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
