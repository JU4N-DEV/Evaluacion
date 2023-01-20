import React from "react";
import './Nav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Outlet,Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillBasketFill } from 'react-icons/bs';


function navbar() {
    return (
        <>
        <Navbar className="navain">
        <Container>
          <Navbar.Brand  as={Link} to="/"><BsFillBasketFill className="logo"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="navitem1">Home</Nav.Link>
            <Nav.Link as={Link} to="/Inicio"></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <section>
            <Outlet></Outlet>
        </section>
      </>
    )
}


export default navbar;









