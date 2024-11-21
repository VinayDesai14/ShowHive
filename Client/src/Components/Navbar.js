import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import Signup from "../Pages/Signup";
import { useSelector, useDispatch } from "react-redux";
import ProfileDropdown from "./ProfileDropDown";
import { useNavigate } from "react-router-dom";
// Import setToken
import { setToken } from "../Slices/authSlice";

const NavbarComp = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // Update the screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1000);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    dispatch(setToken(null)); // Clear token
    localStorage.removeItem("token"); // Remove from localStorage
    navigate("/"); // Redirect to homepage
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          ShowHive
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/music">Music</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/plays">Plays</Nav.Link>
            <Nav.Link href="/sports">Sports</Nav.Link>
          </Nav>
          {token == null ? (
            <div className="ms-auto">
              <Signup className="signup-btn" />
            </div>
          ) : isMobile ? (
            // Show individual menu items on smaller screens
            <Nav className="ms-auto flex-column text-center">
              <Nav.Link onClick={() => navigate("/my-profile")}>Profile</Nav.Link>
              <Nav.Link onClick={() => navigate("/create-event")}>Create Event</Nav.Link>
              <Nav.Link onClick={() => navigate("/my-event")}>My Events</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          ) : (
            // Show dropdown on larger screens
            <ProfileDropdown />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
