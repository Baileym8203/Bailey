import React from "react";
import {Container} from "react-bootstrap";
import NavbarItem from "./Components/Navbar/navbar";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// imports

import "./App.css";

// imported CSS

import Home from './Components/Home/home';

const App = () => {

  return (
    <Router>
      <NavbarItem />
      <Container
        fluid
        className="Container --Background-Image"
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
