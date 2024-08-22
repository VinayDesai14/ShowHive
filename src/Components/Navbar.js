import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.css';
import Signup from '../Pages/Signup';
const  NavbarComp = () => {
  const [modal,setModalShow]=useState(false);
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
          <Signup/>
          {/* <Button variant='light' onClick={() => setModalShow(true)} >SignIn</Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp