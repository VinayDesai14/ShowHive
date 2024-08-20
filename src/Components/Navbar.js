import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.css';
const navbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">BookMyShow</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#plays">Plays</Nav.Link>
            <Nav.Link href="#sports">Sports</Nav.Link>
          </Nav>
          <Button variant='light'>SignIn</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navbar