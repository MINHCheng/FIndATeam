// src/components/HomePage.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            <Container className='landing-page ' fluid style={{ backgroundColor: '#e6f7ff', minHeight: '100vh' }}>
                <h1 className='Title'>Find Your Team</h1>
                <h1 className='Title'>Join the Community.</h1>
                <Row className='linkbutton d-flex align-items-center'>
                        <Col md={2}>
                            <Link to="/signup">
                                <Button size="lg" className="linkbutton mt-3">Get started</Button>
                            </Link>
                        </Col>
                        <Col md={2}>
                            <a href="/find-your-team" className="d-block mt-3">Find your team</a>
                        </Col>
                    </Row>
            </Container>
        </>
    );
};

export default LandingPage;
