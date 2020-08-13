import React,{useState,useEffect} from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Logo} from "../Images"

const Header = () => {
    const [scroll, setScroll] = useState(false);

 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 2);
   });
 }, []); 
  return (
    <Navbar collapseOnSelect className={scroll ? "navbar" : "bg-transparent"} variant="dark" expand="md" sticky="top">
    <Navbar.Brand href="#home">
    <img src={Logo} className="navlogo" alt="Logo" />
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav">
          <Nav.Link className="navLink">Features</Nav.Link>
          <Nav.Link className="navLink">Developers</Nav.Link>
          <Nav.Link className="navLink">About</Nav.Link>
          <Nav.Link className="navLink">News</Nav.Link>
          <Nav.Link className="navLink">Resources</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;