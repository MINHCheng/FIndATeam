import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const MyNavbar = () => {
    return (
        <Navbar expand="false" className="Nav-title bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"className="Nav-title" >Team<span style={{ color: '#963D5A' }}>UP</span></Navbar.Brand>
                <Navbar.Toggle className="Nav-title" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto Nav-title">
                        <Nav.Link href="#link"className="Nav-title" >Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
