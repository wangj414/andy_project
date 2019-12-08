import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./Home";
import AboutUs from "./AboutUs";
import Project from "./Project";
import ContactUs from "./ContactUs";
import { Nav, Navbar} from 'react-bootstrap';

export default function Header(){
  return(
    <header className="Header">
    <Router>
    <Navbar bg = "light" expand="lg">
    <Nav className="Nav">
    <Nav.Link href='/'>Home</Nav.Link>
    <Nav.Link href='/about'>About us</Nav.Link>
    <Nav.Link href='/services'>Services</Nav.Link>
    <Nav.Link href='/projects'>Projects</Nav.Link>
    <Nav.Link href='/contact_us'>Contact us</Nav.Link>
    </Nav>
    </Navbar>
    <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={AboutUs} />
              <Route path='/services' component={Home} />
              <Route path='/projects' component={Project} />
              <Route path='/contact_us' component={ContactUs} />
          </Switch>
    </Router>
    </header>
  );
}
