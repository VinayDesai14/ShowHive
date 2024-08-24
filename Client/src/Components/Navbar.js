import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import Signup from '../Pages/Signup';

const NavbarComp = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">BookMyShow</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#plays">Plays</Nav.Link>
            <Nav.Link href="#sports">Sports</Nav.Link>
          </Nav>
          <div className="ms-auto">
            <Signup className='signup-btn' />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;