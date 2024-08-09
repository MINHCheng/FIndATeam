import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <Navbar expand="lg" className="Nav-title bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/TEAMUP" className="Nav-title">
                    Team<span style={{ color: '#963D5A' }}>UP</span>
                </Navbar.Brand>
                <Navbar.Toggle className="Nav-title" aria-controls="basic-navbar-nav" />
                {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                    <Nav className="ml-auto Nav-title">  {/* Use ml-auto to push content to the right */}
                        <Nav.Link as={Link} to="/signup"className="Nav-title"><Button className='nav-button'>Sign Up</Button></Nav.Link>
                    </Nav>
                {/* </Navbar.Collapse> */}
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
