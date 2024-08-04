// src/components/HomePage.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container fluid style={{ backgroundColor: '#e6f7ff', minHeight: '100vh' }}>
            <Row className='p-3'>
                <Col md={6}>
                    <h1>Find Your Team</h1>
                    <h1>Join the Community.</h1>
                    <Row className='d-flex align-items-center'>
                        <Col md={3}>
                            <Link to="/signup">
                                <Button variant="warning" size="lg" className="mt-3">Get started</Button>
                            </Link>
                        </Col>
                        <Col md={3}>
                            <a href="/find-your-team" className="d-block mt-3">Find your team</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
