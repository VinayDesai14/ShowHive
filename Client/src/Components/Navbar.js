import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import Signup from '../Pages/Signup';
import { useSelector } from "react-redux";
import ProfileDropdown from './ProfileDropDown';

const NavbarComp = () => {
  const { token } = useSelector((state) => state.auth);
  // useEffect(()=>{
  //   console.log('token ',token);
  // },[])
  // const token = localStorage.getItem("token");
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">ShowHive</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#music">Music</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#plays">Plays</Nav.Link>
            <Nav.Link href="#sports">Sports</Nav.Link>
          </Nav>
          {token == null && <div className="ms-auto"><Signup className='signup-btn' /></div>}
          {token !== null && <ProfileDropdown />}
          {/* <div className="ms-auto"><Signup className='signup-btn' /></div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
